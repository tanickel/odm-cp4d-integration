(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,s=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),w=a("dI71"),j=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,o);return Object(u.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(u.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},o))))))},t}(o.a.Component),x=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,w=b.theme,j=b.description,k=b.keywords,N=Object(v.a)().interiorTheme,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,M=y?n.pathname.replace(y,""):n.pathname,C=m?M.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",D=w||N;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:D,pageTitle:g,pageDescription:j,pageKeywords:k,titleType:d},Object(u.b)(h,{title:o?Object(u.b)(o,null):g,label:"label",tabs:m,theme:D}),m&&Object(u.b)(A,{slug:M,tabs:m,currentTab:C}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:p})),Object(u.b)(O.a,{pageContext:t,location:n,slug:M,tabs:m,currentTab:C}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},mD20:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=r.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The goal of this use case is to address different aspects of the integration of rule-based decision services with machine learning-based scoring services. More specifically, it presents the integration of Operational Decision Manager (ODM) and Business Automation Insights (BAI), which are part of the IBM Cloud Pak for Automation, with Watson Studio and Watson Machine Learning (WML), part of the IBM Cloud Pak for Data (CP4D)."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"482px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAA7CAAAOwgEVKEqAAAADuUlEQVQ4y21UyZLiRhTUb/l/fPZv+Oa7w1ffHBO2w3MZR7jd3WxCO5tACwIhARJil6Bh3HT6vRL04OVQIVVVVr4ls0rabnfoD2foujFGUYpxnIr/nhdjvdliv99jt9u9jyLfI5ot0HEiDMME3nguBvPsaV/inyDK0PUTfGr4+OVxAM2OYQcpVusvhLdvToTZeo/fZR8fHmx8rLiwhwleXl4ERsrzHNN4gjDwoOhtPNcNDH2X5j5WqxV4/5YdH+AEwlGAbtdGrWmhobTguQ6d8WlvC2kShqhWKujbfTh9G+7ARq/bg2mYUJpN7K+EDD4ej7TXhSI3CTsgbF8MZzCASthOuw1p0O9TBBeXtwsOdOD8+TMulwtOp5MgZKKiKER2vKYpCrJsgde3v3B8OVIFBU7nM7LFApqqQnIdhyL0sclyJOEaQRCg0+kgpMxVOrwgIJeeZRl2VK6ha9SOGSZ2jmicol6vwbIsgTd1vSTkLOfeDvNgA9fxCFQvCSlD7s1oNBLfSTghQhWBM0fvYYMoWELVFSgUuEtJWKYJyXGoF46LY3HCltTj8lgIHlwC9+9wOIj5mUrTNQ1pmlI/T6K/8/lczDmoaRiQuH8MWq6WtDlDmiQCEEURGrWa6OG9KIx1qCLuY0JkC8JyS5hH9HCz2aBFPdAUVSzUq1VxiAUJx2OR8c02nCUT6IRjTFOWSXFZzFmshJKRWD2OzMbkwyMShf+P1/nNf1+MnQs8l88ELBr/8xrvCWNzOVwml8upswV4fk90T7gkxVn1YDgUI7vOBSHXL9fqUMmsnDYry6XLjYZQ7f6msDhcQY0ugkY49Tr4HK+xE6Qxq2OZeAWQHwoc6RAf5BJYlNVyiVsV3Aq1qWCWJjjjDQcyNmO5ZFabiaUwmkB/rCH9pGIWhLDJ5HwN4zgWmS7vCDmI2bYwUtuIfnrE2HYFnm3Hl0CoHGUJ/vz2ByhffQPnwx+QTR2V52cY5Knnpyc4ZHyfSvE9jx6FMfSOhc73P8P++jtoP/6GqiILMsYYfFMm5Df9oYLZr1UsxjFc3xNXb71eX+9tdn1lKMPDUbQn7DpInyzEXlBWRL6cTqelse97uCeb3Pp3uPXw+oTdeshBZskcp7dXFIwrDuJBYULOtFSZ7q7SkGHRPW0ZGn01sdb6P5UpgVJl5R1vaCqtVUuVb9HZW2YvQN1w0eqP3n31bx+y2TkJxmudIWTLwyicYkMtEj4so+8peoHhJEVrEMML0/+81P/85oLYJ5xF+Fm6ptLLW/U33QH2ia6qtSAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"pak components",title:"pak components",src:"/refarch-dba/static/5a182737eb662e8180819e615d5e4cd1/20d66/pak-components.png",srcSet:["/refarch-dba/static/5a182737eb662e8180819e615d5e4cd1/7fc1e/pak-components.png 288w","/refarch-dba/static/5a182737eb662e8180819e615d5e4cd1/20d66/pak-components.png 482w"],sizes:"(max-width: 482px) 100vw, 482px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"We document some non-functional architecture details such as security and performance, but the main focus is on functional topics such as building a pattern to invoke a WML service from ODM, or design options for the ODM execution and business object model. For each topic, we try as much as possible to provide you with a working implementation, as well as detailed steps to exercise the code for yourself, assuming you are familiar with the ODM platform."),Object(i.b)("p",null,"This is a summary of what you will find in each section:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Use case")," introduces the example that we are using throughout the different sections.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Solution deployment")," goes through the required environment to support the solution, details about install, scaling and security, and how to deploy the different solution artifacts.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"ODM-WML integration")," proposes a model and implementation to set up the invocation of WML services from ODM.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Champion-challenger with BAI")," presents how you can implement this type of deployment strategy in ODM with the use of the BAI component.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Large scale simulation")," describes how to create a scenario provider to execute simulations in Decision Center using an external source of data for the simulation scenarios, and also how to execute simulations on a Spark grid from a Jupyter notebook in Watson Studio, allowing extreme parallelisation of simulation execution.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"CI/CD with ODM")," describes how you can integrate the ODM decision services lifecycle in your CI/CD pipeline."))),Object(i.b)("h2",null,"Component view"),Object(i.b)("p",null,"The figure below provides a high-level view of the different components of CP4D, ODM and BAI working together. We will reuse part of this architecture diagram in the rest of this documentation. You can find more information about the Cloud Pak for Data and Cloud Pak for Automation architectures in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/"}),"IBM Architecture Center"),"."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"923px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACvElEQVQoz11SXY/bRBT1H+0Tz5UQEkJaXhBvQF/bCgRPFPH90FI17bKqCmi1uyXZxWkSO4njsR3b4/meO3ecpFAQ4+VDiKvRzEije+bcc05kRMnKK66dNBCWMmDscBHGIqJlArR21uqaonOIziMaozUjDiBqFqPp8dubVhXMlJ1ebkVMzJPF2Un6vT38vrr1+eLrZyTO4jfukC2vuKo4ZpvZi0c3jWwiqWTVlAYG1J3HaauZhklBf8wa9P1ssl6l26KRP58vO2kDKeOwE3JFVgA2ossni5OjrJElMxnVr43xfuX2ADk1O+8U+kpaaYFwfdh5H6ib4SNrlHMuYpxmeWKvfw7Ao1Sm1FgLeacDEaVMqVFcpvOjjwnTZJwm795bb9az0euySSJFl83yhCl7rZZ7nNcLLsC60Nx71MZWwnZFO3n4XFlHKzp9PKFMbJZnWouoXj2Ln74XaFfM5K05irMHZb1zftOZQ+/D/AXVzEDGbaANHu1hbwCxPwQvIm2x0wjgesSDx0vCK2Zr1U3rbN6aGxd8lMv56Tz54IuyES7MDFYbgCCcgwgdhCPY+9fYjQwovtJ6JkQg/NnSU+hFRePjy3UjPB72/hCkAf/KYR+h37v+VfD/pXcvd350Gk/WpVmV2+Mxt5rQE662rcJMuZL5tL3IuguuwG2/QU0iTs7J+e2kVm/Fbq772/cefflTXD29HL/zacbYKL2b1EnRWSYlV78+mH303eJDEnx9fkO3Z1FT/LIYf1Vx/f6VWjDYWi/QNwqSzgarWuGd87ugB4ZxXNFBwUJ+XUZDfjGSsqvKtMeeMRXCkJ++EOvK74NNgxihIRS4v/cAF4CUhT7kBV3UJKPp6M284Wktx5W4OPqEfPtD/8dvA/4/bf8WXC9tB3WHhEltSMOkDuoPD1dE5HSIB/yv7z81qH39+iebOyJfN6uIOAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"odm and cp4d",title:"odm and cp4d",src:"/refarch-dba/static/dc0c11f70999591ac429789a1954b62c/036ce/odm-and-cp4d.png",srcSet:["/refarch-dba/static/dc0c11f70999591ac429789a1954b62c/7fc1e/odm-and-cp4d.png 288w","/refarch-dba/static/dc0c11f70999591ac429789a1954b62c/a5df1/odm-and-cp4d.png 576w","/refarch-dba/static/dc0c11f70999591ac429789a1954b62c/036ce/odm-and-cp4d.png 923w"],sizes:"(max-width: 923px) 100vw, 923px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Use the following links to access the documentation for the different components used in this repository:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_20.0.x/welcome/kc_welcome_dba_distrib.html"}),"Cloud Pak for Automation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSQNUZ_3.0.1/cpd/overview/welcome.html"}),"Cloud Pak for Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_20.0.x/com.ibm.dba.offerings/topics/con_odm_prod.html"}),"Operational Decision Manager")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSYHZ8_20.0.x/com.ibm.dba.bai/topics/con_bai_overview_top.html"}),"Business Automation Insights"))),Object(i.b)("hr",null),Object(i.b)("p",null,"This repository is part of a larger collection of Digital Business Automation ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-dba/introduction/overview/"}),"best practices and reusable content")," for deploying solutions using IBM Cloud Pak for Automation components."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-index-mdx-7e522e97f7a5dfb86326.js.map