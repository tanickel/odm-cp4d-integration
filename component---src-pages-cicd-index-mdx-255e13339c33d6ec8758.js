(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),s=a.n(i),n=a("NmYn"),r=a.n(n),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),u=a.n(p),g=a("qKvR"),m=function(e){var t,a=e.title,i=e.theme,s=e.tabs,n=void 0===s?[]:s;return Object(g.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=n.length,t[u.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,n=s.baseUrl,r=s.subDirectory,c=n+"/edit/"+s.branch+r+"/src/pages"+t;return n?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),x=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var t,s=r()(e,{lower:!0,strict:!0}),n=s===i,c=new RegExp(i+"/?(#.*)?$"),l=a.replace(c,s);return Object(g.b)("li",{key:e,className:b()((t={},t[x.selectedItem]=n,t),x.listItem)},Object(g.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:x.list},s))))))},t}(s.a.Component),v=a("MjG9"),j=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,n=t.frontmatter,d=void 0===n?{}:n,b=t.relativePagePath,p=t.titleType,u=d.tabs,A=d.title,O=d.theme,x=d.description,w=d.keywords,N=Object(j.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=I?i.pathname.replace(I,""):i.pathname,k=u?C.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",T=O||N;return Object(g.b)(l.a,{tabs:u,homepage:!1,theme:T,pageTitle:A,pageDescription:x,pageKeywords:w,titleType:p},Object(g.b)(m,{title:s?Object(g.b)(s,null):A,label:"label",tabs:u,theme:T}),u&&Object(g.b)(y,{slug:C,tabs:u,currentTab:k}),Object(g.b)(v.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:b})),Object(g.b)(f.a,{pageContext:t,location:i,slug:C,tabs:u,currentTab:k}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Cuft:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var i,s=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l=(i="InlineNotification",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={_frontmatter:c},b=o.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(b,Object(s.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("strong",null,"Updated 10/26/2020")," - Work in progress"),Object(r.b)("p",null,"Continuous integration and continuous deployment for ODM can be supported through the use of the Decision Center REST API."),Object(r.b)("p",null,"The documentation for this API is found ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSQP76_8.10.x/com.ibm.odm.dcenter.ref.dc/topics/dc-swagger-cloud.json"}),"here"),".\nThe core REST resources used for CI/CD purpose are listed under the ",Object(r.b)("em",{parentName:"p"},"Build")," section:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/v1/testsuites/{testSuiteId}/run"),": allows to run a test suite on Decision Center."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/v1/deployments/{deploymentId}/deploy"),": allows to deploy a RuleApp to a Decision Server runtime.")),Object(r.b)("p",null,"Other resources under the ",Object(r.b)("inlineCode",{parentName:"p"},"Explore")," section allow to explore and select the desired ",Object(r.b)("inlineCode",{parentName:"p"},"{testSuiteId}")," or ",Object(r.b)("inlineCode",{parentName:"p"},"{deploymentId}"),"."),Object(r.b)("h2",null,"Try it!"),Object(r.b)("p",null,"You can quickly explore the DecisionCenter REST API from a tool such as Postman. Let’s try for example to run an ODM test suite that has been previosuly defined ."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In order to designate the test suite you want to run, you need the id of the test suite. So, you start by querying the existing decision services using the ",Object(r.b)("inlineCode",{parentName:"li"},"/v1/decisionservices")," resource, as shown below:")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1014px"}},"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAByklEQVQoz41T227UMBDNj/IT/BXP/AGi8AgPRVWBZbttYdls4vg+nosTxlmoaNlKHE0kx/GZc2bG6YqCCJmJmUUgxzANyRqGJBARUTdPYYw5HH5Gb1N03jV0VArre79nyIQIpbgQvLUlJQagnDU4Z9FjzCHGe1NuDcWUg/edMJcYFqa51nmevQ+T99P158Obt/3F+/7inYauxw8fQwzHKbx8HV+8il/uRgi2QyIfQuOtADel4ACLumAkIapaUSlVZFkxa+jDqHodFkzqkLmuynoOcl7+gNZeNE5jLDlngPa1qlOEDgDW4h1p2xBlTfFAritO5JZ6xWmtW12AcByHcRistZo4TmOKIZesFaacUoyaUghnaZMogqWqFZTgdBwdz0LcNE+CWsJojHPWpRR0bgViKUhlrvJbv1Wt9WLOqZOq/eZmWEQ/qWmuMxvDXze03Wngdlc2W9zdLav/vyvqlsfQLc1RY3SXn/ZXm9urm2+Xmx/XN/n7/glZlf4lz+2i1aq2CHJCBqnLOZwhk4iGjhd8MDaNPg82GQ9Q6L/Iq3ANh94O033vDyaxPJrf82SWFnqr9VYRajeVuDyDM8r6b8TjsSA+KJyFFvcLgaxncri3c4AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"rest get decisions",title:"rest get decisions",src:"/odm-cp4d-integration/static/4ddcf442ba7cc8e21c6dc87177472ffe/88f1f/rest-get-decisions.png",srcSet:["/odm-cp4d-integration/static/4ddcf442ba7cc8e21c6dc87177472ffe/7fc1e/rest-get-decisions.png 288w","/odm-cp4d-integration/static/4ddcf442ba7cc8e21c6dc87177472ffe/a5df1/rest-get-decisions.png 576w","/odm-cp4d-integration/static/4ddcf442ba7cc8e21c6dc87177472ffe/88f1f/rest-get-decisions.png 1014w"],sizes:"(max-width: 1014px) 100vw, 1014px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can then use the id from the desired decision service to retrieve the list of test suites for the decision service using the ",Object(r.b)("inlineCode",{parentName:"li"},"/v1/decisionservices/{decisionServiceId}/testsuites")," resource (alternatively, if you want to exercise a test suite on s specific branch or release, you can first query for the list of branches of the decision service by using the ",Object(r.b)("inlineCode",{parentName:"li"},"/v1/decisionservices/{decisionServiceId}/branches")," resource and use the branch id to retrieve the associated test suites). The test suites are then listed:")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"395px"}},"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.8611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAA7CAAAOwgEVKEqAAAABxklEQVQ4y6VUi3KbMBD0//9iWxJcbDAvIQkJJAGblWidOIk7zPRmzjqEb7nbPek0KIkQAr6zbdvu61E/TfOE4D3GWwV5ucC0LWZj4JflLyyOWgKMPwuTV1Y5EWiNcfR1S1Drk0q+qzzaKYIlwG0H8KNhlR2MnZEXHbKLQC0Mftca11ajpOe1woVr0Si8VhIvpcSF8ew8Tuu67oB/WvSsUpzP0FUFkRfQQqKVE/JqwGs5JMBmsDt4N/Kdxa0fIccp0fMOyDV6cC5xGXlUU2AlIyom9mpCw0prYZ/yF7u+A8YNrTX+194BuXqqvdC9tfAUZbAeDdtVxkFZh5FuJg/JZx2fUzzz/QyhZwTiPLQcRXF6hCor6E7gmhWoG5E4eyF/OQWIHGaMfxYC2XVI/oNxQaE8J+WrKKyuyzKMbYOh7gkoE/kx4RcVv/UGs19SpdFnF2DncD8cDxw6CrIta1I67vkVbCsmeDiCxEQfln8PdlLWxy+5NItHT8SzYd8rJKAsr5y9kvyVmISgCIYkh6cn4mP8qDI3I3+KgCI/wyhFxVT6c/zYx0vi0NikUSGhpqlhewHrdvk/3ziHAcUgSLT/ytOn6+uovQEFVOUhpxLLuwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"rest get test suites",title:"rest get test suites",src:"/odm-cp4d-integration/static/d07d90d2247ac56d392feb572f8f38a5/e0ffd/rest-get-test-suites.png",srcSet:["/odm-cp4d-integration/static/d07d90d2247ac56d392feb572f8f38a5/7fc1e/rest-get-test-suites.png 288w","/odm-cp4d-integration/static/d07d90d2247ac56d392feb572f8f38a5/e0ffd/rest-get-test-suites.png 395w"],sizes:"(max-width: 395px) 100vw, 395px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Say you want to execute the ",Object(r.b)("inlineCode",{parentName:"li"},"TestSuite-Small")," test suite. You can now use the ",Object(r.b)("inlineCode",{parentName:"li"},"/v1/testsuites/{testSuiteId}/run")," resource using id ",Object(r.b)("inlineCode",{parentName:"li"},"74978387-1e65-47ff-9289-0c3134c66f8b"),". The result of this request is the following:")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"335px"}},"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7CAAAOwgEVKEqAAAABj0lEQVQ4y62T23KbMBCG/f4PmIs2cW0LIyyQhY5ICPFnMbYnSZsJF9XMDrOL9Onfg3Y5Z/zPtZvKhGQsBmsRp4JGBQg94GoGaJ+gXYTxEb1dTSgPS/GO9qh7TNLe3g6Y5xm7herbFk5KxDCgrjgEl5A6gLUWfxqNIxm7GDTSggmDimyJcfJPFD+S8VajlLICA8Hk6ytsI6D5GR3vEIaEtieo0Hg5SJzbFXigw7+ZxFvdo27XC2rpkGIihbgrXIBve0RKW5H8fa1wURa5zOSHm4qOFIurR3N19M/f0uQEWqxRDo9e3ICDusLWHIbXMOyI7D1M9BjHcXMzlvp9qCGlyhjchb7nGimN6L1FugNLmZ8HvrMHdK2h6qD2e1gh4JoGPgR0pqcd+OvAV/9j/Jny0mVDIEdAq3uql/pXUpi3zOGjhvrE4DuJMVF3abaOvMfhPhrjmD8p+hG4KNSsgqoYjQ6HPDBogvPO4Fel4ELcDszThEKqMtkYA70ajUAXzNSQmPLtNUxl3g6cCLh1LLasd/hc9JeEX4TcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"rest post run test suites",title:"rest post run test suites",src:"/odm-cp4d-integration/static/64d50d65a6cc89ff17cdd756f8218e40/8d8c1/rest-post-run-test-suites.png",srcSet:["/odm-cp4d-integration/static/64d50d65a6cc89ff17cdd756f8218e40/7fc1e/rest-post-run-test-suites.png 288w","/odm-cp4d-integration/static/64d50d65a6cc89ff17cdd756f8218e40/8d8c1/rest-post-run-test-suites.png 335w"],sizes:"(max-width: 335px) 100vw, 335px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"After the test suite execution has started, you can retrieve the status using the resource ",Object(r.b)("inlineCode",{parentName:"li"},"/v1/testreports/{testReportId}"),", which will provide the following information:")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"341px"}},"\n      ",Object(r.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABk0lEQVQ4y62T627cIBCF9/3fr4oqJWnstVlf1mAMGHw9OeB0+6Nq40hBsmzD8HGGOXMJIeA7x2WaZ8zOYbIWYVmh3AxpAtp+xBhm9DYcb86ZkWvDCOdnKOO5NqXvu/bQjNu2DZdIHTsJe2/hBgNR1hBFg0Y53DqDp1yibAe8lAqVdHguJLJ6wC+hkDUDRGvw8yopwGFbV1x2AkOvofIMphQwTY1O1PB+gqKavDk2F7WmEkeYxjPhcU7cLQ+16cAQpiPlBNQEvr3BSZVSeOWGK4PWbWeqHldC4xW0eiTEEDyi41PyO84LZrIsywdw36mwh61r9EVBlQWmeICzj6AzI3IeCr2U0ITpooS5VbCEKWsegWee37EHsCfwmkOXJRyVOgLvuv8L+NkBfxQqlapsCAu0j3K8E1bsX2n914cxJvQKAys8CIGZRpf01CurGKuXN4aeGyPtFDT5MN6hqarDOtWNFc8gb3Wq5I+sY+WnBNzPAGPr7Uxv4Xv2Y+oaT/us/J9i57BDtpPqEnBm633FFp9B3wHWDfTW5BP7fwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"rest get test report",title:"rest get test report",src:"/odm-cp4d-integration/static/2546dc05064be076586b1e7916029c84/93f07/rest-get-test-report.png",srcSet:["/odm-cp4d-integration/static/2546dc05064be076586b1e7916029c84/7fc1e/rest-get-test-report.png 288w","/odm-cp4d-integration/static/2546dc05064be076586b1e7916029c84/93f07/rest-get-test-report.png 341w"],sizes:"(max-width: 341px) 100vw, 341px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"In this case, we see that the execution has completed, has run 5 scenarios and, unfortunately in this case, all scenarios have ended up in error."),Object(r.b)("p",null,"Based on the above sequence, you can see how to integrate calls to the Decision Center REST API with your CI/CD pipeline to automate build, test and deployment operations."))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cicd-index-mdx-255e13339c33d6ec8758.js.map