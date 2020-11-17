(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),s=a("NmYn"),n=a.n(s),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),p=a.n(m),u=a("qKvR"),h=function(e){var t,a=e.title,i=e.theme,o=e.tabs,s=void 0===o?[]:o;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=s.length,t[p.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,s=o.baseUrl,n=o.subDirectory,c=s+"/edit/"+o.branch+n+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=n()(e,{lower:!0,strict:!0}),s=o===i,c=new RegExp(i+"/?(#.*)?$"),l=a.replace(c,o);return Object(u.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=s,t),O.listItem)},Object(u.b)(r.Link,{className:O.link,to:""+l},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:O.list},o))))))},t}(o.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,m=t.titleType,p=b.tabs,g=b.title,j=b.theme,O=b.description,x=b.keywords,k=Object(y.a)().interiorTheme,N=Object(r.useStaticQuery)("2456312558").site.pathPrefix,T=N?i.pathname.replace(N,""):i.pathname,M=p?T.split("/").filter(Boolean).slice(-1)[0]||n()(p[0],{lower:!0}):"",B=j||k;return Object(u.b)(l.a,{tabs:p,homepage:!1,theme:B,pageTitle:g,pageDescription:O,pageKeywords:x,titleType:m},Object(u.b)(h,{title:o?Object(u.b)(o,null):g,label:"label",tabs:p,theme:B}),p&&Object(u.b)(v,{slug:T,tabs:p,currentTab:M}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:d})),Object(u.b)(A.a,{pageContext:t,location:i,slug:T,tabs:p,currentTab:M}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Kd6D:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return b}));var i=a("wx14"),o=a("zLVn"),s=(a("q1tI"),a("7ljp")),n=a("013z"),r=(a("qKvR"),{}),c={_frontmatter:r},l=n.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(l,Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Running ML-based scoring models as part of a rule-based decision service is a widespread need. It is almost always a requirement for solutions that involve activities such as:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Evaluating risk for underwriting a contract"),Object(s.b)("li",{parentName:"ul"},"Assessing fraud potential for a financial transaction or claim.")),Object(s.b)("p",null,"The business scenario underlying the code provided in this repository is about evaluating a bank credit risk. The goal is to show how to combine the Operational Decision Manager (ODM) component from the IBM Cloud Pak for Automation with the IBM Cloud Pak for Data platform to create, simulate, manage, and operationalize a loan risk evaluation decision service. This service uses:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A ",Object(s.b)("strong",{parentName:"p"},"predictive assessment")," component that relies on a ML model for loan default. The basis we are using for this component is the well-know ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data)"}),"German Credit Risk")," classification data. The training data for the model can be found in ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4a-integration/blob/master/data/ml-training-data/gcr-training-data.csv"}),"this CSV file"),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A ",Object(s.b)("strong",{parentName:"p"},"relationship assessment")," component, implemented as a set of explicit business rules based on established company policies to compound the raw outcome of the predictive model with e.g. banking relationship-based factors. For example, the bank may want to explicitly favor employees of the bank and their family and pre-emptively reduce their risk score."))),Object(s.b)("p",null,"The basic decision flow is the following:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"291px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"157.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAIAAACdAM/hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADRUlEQVQ4y5VVyW7bSBDlr9k3+xfs2wCGv8HwB8xhPsHwYc4DzATIANksJ7EdWfIiLhYpbiLZXCXuFCWyuSktNeLMRF6kRqNR1ajX1V31HknMnx95kWVw9kIA8eRu0zRobUvnn9h/Ht3NwALgOIXeGFwUBVoNYGgKeHTXAjfLgQzHsU3T/O/OS2AcVNd1p9NptVqnp6cnJyfIaLfbVVWtHkGsPtUwjOPj4/39/d+WY29v7+joSNO01ccvwM1yLnoDYRAEvu8jGwAQRVGSJBiG9sMwnM1mT2TGR5K9HseyqqJIojAYDCCEqFTI4HlekiRRlEiSzPN8Gb+YBAKlRTWBZVqUrYurJIN5M4fN081Dp4dh8OgSQQbbpn9rh5Qb0+N4EKRSOGXdOMqKHzyrZCtBE3hZl5ZlK3KiQvemUQqJ8TTvGF7P8m8U8xsnXTJcXzPBJA8ziMFRWnT5MSW7bWp4eTe4psQbWmAVxw5zws+Krup8oYU3ny/+evfpzdnnD18vJcedlBUGT7KyJzrfSOHs8ubvtx/ety7+fXd2R3Fx1iwys14suhElaxwwRcNSTVuP0qSoMTieFg9qKNkJJRg0DzjZZEXASroxighUKjlMQTIb5ZXqx15eTqq5JPbDJMaFqZtmklcoP6znoqL7UVqiztlS4uqLVlV1AxGB5vPr7o0XhmmWpYFRwgxnRtwqy6IsYFNXDwwdx9HPamPOYKf/8HB/f89z3EAQKZpGLUV9pimqz7L9fp+iqB5JFmW5jEcXaojnJMUwjGVZjuMgzHPC+h8YSQKtuq4fHh5ub2/v7u7u7OxsbW0dHByoqoqf8JIk8f0Rk13XRU+4vb31PA+zfVWVL+vZwXqu19HzL/lVZSjL4gafIRSnjVMRMdnNSMGkRXOUVLo7tf1Z/eq1i7ImZb/DWqTsXt2L59fMlw7DqyPgTjNYvgKGZS0YUZcZ3vWH71tXrYvO+df2Hcl4SZ7B6vXMkpVo46kAPIbXeMWW9ZGoAGmowWqNaqdZGUzyrJwruiOrBiIHomRg8rgm61bbskxDB5t99JtlY5GhACApCmbexn0edT7a52+xDDb43cxxnj9/n/9x/NNdF4xPsI0GaKt1ehzfARzTEUwRcXlGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"use case flow",title:"use case flow",src:"/refarch-dba/static/542c174465e939ac1fe69c961e69f9c0/c88a9/use-case-flow.png",srcSet:["/refarch-dba/static/542c174465e939ac1fe69c961e69f9c0/7fc1e/use-case-flow.png 288w","/refarch-dba/static/542c174465e939ac1fe69c961e69f9c0/c88a9/use-case-flow.png 291w"],sizes:"(max-width: 291px) 100vw, 291px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"The combined assessment step is using a simple decision table to combine the two components of the risk evaluation:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"680px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"17.013888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAjklEQVQI1w2O2xKCMAxE+f//U0cfLOM4YAulpC1JoTf3ZefkstkMWpucS+9dmEMIgFprSglKO6m3IvKt9SQx+kXYfcbXqJ6J90Dr8PtpmFtr53kyM8ylFBGBXtflnMsYo4PLpDlaPY3TVwE8mUFrmDNyoNjGHgDJrdbN2tv9YczS8JccR3RJ/LbOdpkBKP9mf6tna0bFOgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"combined risk table",title:"combined risk table",src:"/refarch-dba/static/f8d461e084582f2d3729404c2dd8411f/a5a26/combined-risk-table.png",srcSet:["/refarch-dba/static/f8d461e084582f2d3729404c2dd8411f/7fc1e/combined-risk-table.png 288w","/refarch-dba/static/f8d461e084582f2d3729404c2dd8411f/a5df1/combined-risk-table.png 576w","/refarch-dba/static/f8d461e084582f2d3729404c2dd8411f/a5a26/combined-risk-table.png 680w"],sizes:"(max-width: 680px) 100vw, 680px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("h2",null,"ODM object modeling considerations"),Object(s.b)("p",null,"ML models use simple collection of data points, which make them inherently more agile than decision services from a data structure point of view. Before embarking on the integration of rules with machine learning, you have to consider whether to use a rich and structured ODM object model, or a dynamic and flat one, or maybe a combination of both."),Object(s.b)("h3",null,"Structured model"),Object(s.b)("p",null,"Object models designed to support rule-based decisions are usually structured as a hierarchy of concepts to reflect the richness and complexity of the business entities that participate in a decision. For our use case, one version of the object model uses the nested Loan, Borrower and Account classes shown on the figure below."),Object(s.b)("p",null,"Note that ML-based scoring services are usually taking in as parameters a flat list of values that corresponds to the features used to train the model.\nTo invoke the scoring service, the decision service collects and maps the required scoring parameters from the ODM object model into a flat parameter list."),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1003px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB6UlEQVQoz32S247TMBCG+/4PwQ33SHCBKi5YJFhg6aq0TbbNNm0SJ058iO34lMMuVcukXVXLDSNLlq35PJ75/0mMMK64UJZytXncr8JosVo/bOKsYFob+9+Y1MrUgishn/88M0rjeLvb7wgped00jX6das7xDyy1Y5yiJLPOQ7L33nnfes9qJZV27iUP9rb1bdu61zCtGy54zWtAVGO8c/A4MJRL1WhIHY/ecyHjfbpLUi4EFHiBKyqgjvYmx3nX9cfjEb4GMGESPgmwbqRVdRbezz5/XH2/KR+Da/EJJEE3w9NQ4IIScjqdRsY5wkRJpdFaC9617fLu9senD3WyRpsQ7i7tnGFr+uEC00tliFoqGLixMHHZ2mb+ZXrz7i36/TUP743R42SsG2F3hjHGKMsPh0OjDSzGZckVSwo8vdWNWS6D2d3P/TZKs0JKTaQkSl5g2/W9kBK0absOHoWu4V5qm4dJ8GbKmJqvol+zGUJomxSUqRBnEcXXyn1JqyxFMDPZSFJVFeGjR5xhQgzDEDxEqyAghICjoCmlrVBmQrgE8fq+S1HCGYOBWUl2396j9VKBVpxYWVvfgu0Wi3lVlVleQVPejYpMEOaEiuq8wKElFXBMUbFL8GjPs6lA2ChO5osQFTTH7Oqyv6vqkh8EmYBNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"hierarchical object model",title:"hierarchical object model",src:"/refarch-dba/static/2b3c4478725d3294d300fcd131357fbe/a9c44/hierarchical-object-model.png",srcSet:["/refarch-dba/static/2b3c4478725d3294d300fcd131357fbe/7fc1e/hierarchical-object-model.png 288w","/refarch-dba/static/2b3c4478725d3294d300fcd131357fbe/a5df1/hierarchical-object-model.png 576w","/refarch-dba/static/2b3c4478725d3294d300fcd131357fbe/a9c44/hierarchical-object-model.png 1003w"],sizes:"(max-width: 1003px) 100vw, 1003px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"You can explore the object model and the rules for this model by loading the projects under the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4a-integration/tree/master/hierarchical-model"}),"hierarchical-model")," folder in Rule Designer.\nAlternatively, you can upload this decision service ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4a-integration/blob/master/data/exports/dc-export%20-%20risk-assessment-main.zip"}),"archive")," in Decision Center."),Object(s.b)("h3",null,"Flat model"),Object(s.b)("p",null,"The benefit of structured object models is that they allow to take into account all the details of the context of data needed to make complex business decisions. The flipside is that they create a rigid service contract. Adding a new data element to the object model requires changes to the supporting execution object model (Java classes), which requires intervention from IT resources."),Object(s.b)("p",null,"This is unlike the scoring services, for which adding a new parameter value for a new feature of the ML model is straightforward. So, if your decision services are using a context of data that is at the same level as the one used for the scoring services, and you need to have similar flexibility and dynamicity for your decision services as your scoring services, you should consider using a flat model for ODM.\nFor our use case, a flat model looks like the following:"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}},"\n      ",Object(s.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABtElEQVQoz32S226cMBCGefe+Sm96U6UXUdODlKhJlm3YBAhrTuZsYzBmjQHD9rKGKtk0VTP6ZVuWP8/4H2sOCMIodX0I3MAPIs75OI7D39E/xat97ePFbmMmWzv7dm1d7yDvxL/sNMnj8ThP02tY13XbthljEELrERz4E6ymVf0go6xwg9API971UsoTbFoWACBJEkpplOSdqm2UCyNE33FValcj7/aLeXm+v/lKE68T4gQbhgHAvsS4aRpjZ7ZV2be1aKpFLZN9h2N4dX7mPeisiJIgUKacYNtxgRegsipQaT56nDXiwMShEaxWyeU4llly+emDc/udePeZ68hpXp1bzNN4N9BWpIgqqzqhSpZ/NAjOMZaC4zj88fnMuLrIHANBf32zcmV5ubYcE31BWEUPpG5LpYoRxvMQee/eIyvyUbP5afphmGPixqSmfI+LfZ2qDNpzJ8Wq54Z27cHVPU7VXVTf3vmeWxRFWpBZyozWAJdqoQ3/C9WnX8d5nkpC73YPEIaEVIg0ayPVsJY9vBFCqO+Byvpms43jSMFJTl7+vzdhZcs4spbfWyCAaY6psuMl/BsgBIwNW/GewwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(s.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"flat object model",title:"flat object model",src:"/refarch-dba/static/88a22261280f62ab5d52774682bcbd9a/01161/flat-object-model.png",srcSet:["/refarch-dba/static/88a22261280f62ab5d52774682bcbd9a/7fc1e/flat-object-model.png 288w","/refarch-dba/static/88a22261280f62ab5d52774682bcbd9a/a5df1/flat-object-model.png 576w","/refarch-dba/static/88a22261280f62ab5d52774682bcbd9a/01161/flat-object-model.png 914w"],sizes:"(max-width: 914px) 100vw, 914px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(s.b)("p",null,"This design uses a collection of key-value pairs and thus does not have to change if you need to add a new data element for the rules. This means that you can easily evolve your ML model by changing the set of features and adjust accordingly decision service parameters. The decision service is now as dynamic as the scoring service."),Object(s.b)("p",null,"The flat model is also helpful to instrument the execution of simulations, either through a custom scenario provider, as the provider implementation does not need to change when the object model evolves, or for large scale simulations, through embedded execution on a Spark grid. See the Simulation chapter for more details about this."),Object(s.b)("p",null,"Of course, there’s a flipside too to this flat model. Multi-valued attributes become more difficult to manage. Different attributes with the same name also need to be artificially renamed to be differentiated. So, as usual in the design of an object model, there is not a good or a bad model, but one that is more or less appropriate for the task at hand."),Object(s.b)("p",null,"You can explore the flat object model implementation by loading the projects under the ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4a-integration/tree/master/flat-model"}),"flat-model")," folder in Rule Designer.\nAlternatively, you can upload this decision service ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/odm-cp4a-integration/blob/master/data/exports/dc-export%20-%20dynamic-risk-assessment-main.zip"}),"archive")," in Decision Center."))}b.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-usecase-index-mdx-097024a2d842e0b4aed9.js.map