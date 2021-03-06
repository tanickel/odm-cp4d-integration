
# Large scale ODM simulation
This notebook shows how to execute large scale ODM simulations on a Spark kernel.


```python
import os
import pandas as pd
from project_lib import Project
project = Project(os.environ['PROJECT_ID'])
```

    Waiting for a Spark session to start...
    Spark Initialization Done! ApplicationId = app-20201008172152-0000
    KERNEL_ID = bcaabc4f-bea3-4e71-8077-00f4b92340aa


## Load the simulation configuration
* ODM RuleApp and XOM jar files
* Simulation scenario file
* Target ruleset path
* Simulation output file


```python
sim_master = 'miniloan_simulation_master.csv' # set to default simulation master file
if 'SIM_MASTER_DATA' in os.environ:
    sim_master = os.environ['SIM_MASTER_DATA']
    
sim = pd.read_csv(project.get_file(sim_master))
sim.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>app_jars</th>
      <th>dataset</th>
      <th>resource_path</th>
      <th>output_filename</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_1.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_1.csv</td>
    </tr>
    <tr>
      <th>1</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_2.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_2.csv</td>
    </tr>
    <tr>
      <th>2</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_3.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_3.csv</td>
    </tr>
  </tbody>
</table>
</div>




```python
##
# load app jar
app_jars = set([])
for jar in sim.app_jars:
    app_jars.add(jar+'-ruleapp.jar')
    app_jars.add(jar+'-xom.jar')
    
app_jars
```




    {'miniloan-ruleapp.jar', 'miniloan-xom.jar'}



## Initialize Python environment with ODM engine jars and ODM model archives

   * Create a Spark Session
   * Initialize the Python environment


```python
##
# write all jars to $CWD/user-libs/spark2
# the path is already in 

odm_jars = ['j2ee_connector-1_5-fr.jar', 'jrules-res-execution.jar', 'jrules-engine.jar']
for jar in odm_jars:
    tmp = project.get_file(jar)
    filename = '%s/user-libs/spark2/%s'%(os.getcwd(),jar)
    with open(filename, 'wb') as f:
        f.write(tmp.read())

for jar in app_jars:
    tmp = project.get_file(jar)
    filename = '%s/user-libs/spark2/%s'%(os.getcwd(),jar)
    with open(filename, 'wb') as f:
        f.write(tmp.read())

%ls user-libs/spark2
```

    j2ee_connector-1_5-fr.jar  jrules-res-execution.jar  miniloan-xom.jar
    jrules-engine.jar          miniloan-ruleapp.jar



```python
##
# restart kernel to pick up jars
from IPython.core.display import HTML
HTML("<script>Jupyter.notebook.kernel.restart()</script>")
```




<script>Jupyter.notebook.kernel.restart()</script>




```python
assert sc._jvm.ilog
```

## Run simulation
1. Define the ODM execution function
2. Run the simulation scenarios


```python
import pandas as pd
import numpy as np
from pyspark.sql import SQLContext
from  pyspark.sql import Row
from project_lib import Project
project = Project(os.environ['PROJECT_ID'])
```

#### 1. Define the ODM execution function


```python
##
# create ODM session
def CreateODMSession(sc):
    if not hasattr(CreateODMSession, "fac"):
        sc = SparkSession.builder.getOrCreate()
        factoryConfig = sc._jvm.ilog.rules.res.session.IlrJ2SESessionFactory.createDefaultConfig()
        xuConfig = factoryConfig.getXUConfig();
        xuConfig.setLogAutoFlushEnabled(True);
        xuConfig.getPersistenceConfig().setPersistenceType(sc._jvm.ilog.rules.res.session.config.IlrPersistenceType.MEMORY);
        xuConfig.getManagedXOMPersistenceConfig().setPersistenceType(sc._jvm.ilog.rules.res.session.config.IlrPersistenceType.MEMORY);
        CreateODMSession.fac=sc._jvm.ilog.rules.res.session.IlrJ2SESessionFactory(factoryConfig)    
    return CreateODMSession.fac

##
# define UDF
def execute(row, parse_path):
    sc = SparkSession.builder.getOrCreate()
    factory=CreateODMSession(sc)

    sessionRequest = factory.createRequest()
    sessionRequest.setRulesetPath(sc._jvm.ilog.rules.res.model.IlrPath.parsePath(parse_path))
    # Ensure latest version of the ruleset is taken into account
    sessionRequest.setForceUptodate(True)
    # Set the input parameters for the execution of the rules
    
    inputParameters = sc._jvm.java.util.HashMap()
    payload = sc._jvm.miniloan.Payload()
    #
    # Iterate the following statment on each element of the columns header and the row
    #
    kvp = row.asDict()
    for key in kvp:  
        payload.setValue(key, str(kvp[key]))
    # Set parameters
    inputParameters["payload"]=payload
    sessionRequest.setInputParameters(inputParameters)
    session = factory.createStatelessSession()
    # Perform ODM Execution 
    response = session.execute(sessionRequest)
    col= response.getOutputParameters()
    result= response.getOutputParameters().get("payload")
    return Row(isApproved=result.getStringValue("approved"),firedRulesCount=col['ilog.rules.firedRulesCount'])
```

#### 2. Run the simulation scenarios


```python
sim_master = 'miniload_simulation_master.csv' # set to default simulation master file
if 'SIM_MASTER_DATA' in os.environ:
    sim_master = os.environ['SIM_MASTER_DATA']
```


```python
##
# read in data
sim = pd.read_csv(project.get_file(sim_master))
sim.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>app_jars</th>
      <th>dataset</th>
      <th>resource_path</th>
      <th>output_filename</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_1.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_1.csv</td>
    </tr>
    <tr>
      <th>1</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_2.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_2.csv</td>
    </tr>
    <tr>
      <th>2</th>
      <td>miniloan</td>
      <td>miniloan_simulation_dataset_3.csv</td>
      <td>/mydeployment/Miniloan_ServiceRuleset</td>
      <td>miniloan_simulation_result_3.csv</td>
    </tr>
  </tbody>
</table>
</div>




```python
def do_simulation(simdata):
    ##
    # read simulation data
    dataset = simdata.dataset
    uri_path = simdata.resource_path
    output = simdata.output_filename
    
    ##
    # load simulation data
    print('simulation: %s started ..'%(simdata.app_jars))
    print('> data: %s'%(simdata.dataset))
    sql = SQLContext(sc)
    new_decisions_pd = pd.read_csv(project.get_file(simdata.dataset))
    request_df = sql.createDataFrame(new_decisions_pd)
    
    ##
    # run simulation
    dfResult = request_df.rdd.map(lambda r: execute(r,uri_path)).toDF()
    df1 = dfResult.toPandas()
    
    ##
    # save simulation result
    project.save_data(simdata.output_filename, df1.to_csv(index=False),overwrite=True)
    print('> simulation done!')

##
# start simulation
_ = sim.apply(do_simulation, axis=1)
```

    simulation: miniloan started ..
    > data: miniloan_simulation_dataset_1.csv
    > simulation done!
    simulation: miniloan started ..
    > data: miniloan_simulation_dataset_2.csv
    > simulation done!
    simulation: miniloan started ..
    > data: miniloan_simulation_dataset_3.csv
    > simulation done!



```python

```
