(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),c=t.n(i),r=t(49),o=t(50),s=t(58),m=t(51),d=t(59),p="".concat("img/works","/websites"),u="".concat("img/works","/graphics"),g="/img/avatar.jpg",v="/img/Icons/react-native.png",h="/img/Icons/after-effects.png",E=["".concat(p,"/kainetix-landing-page.png"),"".concat(p,"/kainetix-blog-page.png"),"".concat(p,"/kainetix-events-page.png"),"".concat(p,"/kainetix-gallery-page.png")],k=["".concat(p,"/yalla-landing-page.png"),"".concat(p,"/yalla-client-dashboard.png"),"".concat(p,"/yalla-calculator-page.png"),"".concat(p,"/yalla-create-delivery-page.png")],b=["".concat(p,"/tecky-landing-page.png"),"".concat(p,"/tecky-dashboard-page.png"),"".concat(p,"/tecky-pricing-page.png"),"".concat(p,"/tecky-skills-page.png")],f=["".concat(u,"/CEO-BC.png"),"".concat(u,"/Azuri-Flyer.png"),"".concat(u,"/double-joe.png"),"".concat(u,"/brothers-corporation.png"),"".concat(u,"/gidimiami.png"),"".concat(u,"/Eko Pearl.png"),"".concat(u,"/headline.png"),"".concat(u,"/out-of-box.png"),"".concat(u,"/pani-photar.png"),"".concat(u,"/Lakowe-Lakes.png"),"".concat(u,"/thinkana-logo.png"),"".concat(u,"/trivuz.png")],y=t(11);function w(e){var a=e.handleNavBar;return l.a.createElement("nav",{className:"side-nav"},l.a.createElement("img",{src:g,alt:"Avatar",className:"avatar shadow"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(y.Link,{activeClass:"active",className:"nav-links",to:"home",spy:!0,smooth:!0,duration:500,onClick:a},"Home")),l.a.createElement("li",null,l.a.createElement(y.Link,{activeClass:"active",className:"nav-links",to:"about",spy:!0,smooth:!0,offset:10,duration:500,onClick:a},"About Me")),l.a.createElement("li",null,l.a.createElement(y.Link,{activeClass:"active",className:"nav-links",to:"recent-works",spy:!0,smooth:!0,offset:10,duration:500,onClick:a},"Recent Works")),l.a.createElement("li",null,l.a.createElement(y.Link,{activeClass:"active",className:"nav-links",to:"contact",spy:!0,smooth:!0,offset:10,duration:500,onClick:a},"Contact"))))}function N(e){var a=e.handleNavBar;return l.a.createElement("div",{id:"home"},l.a.createElement("span",{className:"nav-button",onClick:function(){return a()}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("div",{className:"row vh-100 p-sm-5 pt-5 pb-5"},l.a.createElement("div",{className:"col-12 my-auto"},l.a.createElement("h2",null,"Hi, I'm Chinonso Eke !"),l.a.createElement("br",null),l.a.createElement("h4",null,"Just your friendly fullstack web developer & graphics designer. "),l.a.createElement("br",null),l.a.createElement("h4",null,"Looking forward to working with you !"),l.a.createElement(y.Link,{className:"nav-links btn btn-outline-light mt-3",to:"about",spy:!0,offset:10,duration:500,smooth:!0},"About Me"))))}function x(e){var a=e.skills;return l.a.createElement(n.Fragment,null,a.map(function(e,a){return l.a.createElement("div",{className:"col-md-3 col-sm-4 col-6 pt-3 p-0 pb-3 text-center border",key:a},"i"===e.type?l.a.createElement("i",{className:"skill ".concat(e.icon)}):l.a.createElement("img",{src:e.icon,width:"80",alt:e.name}),e.title?l.a.createElement("p",null,e.title):null)}))}function C(e){var a=e.skills;return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"row p-sm-5 pt-5 pb-5"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h1",{className:"text-center"},"About Me"),l.a.createElement("p",null," A hardworking and straight forward individual, a quick learner with excellent listening and understanding skills. I believe in professionalism which makes me effectively talented and able to function adequately under pressure. I am a quick learner and can easily research and find what I need to learn and to do in order to complete a task. I am capable of working with people as well as individually to produce excellent results. A people person, very sociable and highly innovative. ")),l.a.createElement("div",{className:"col-12 mt-3 text-center"},l.a.createElement("h1",null,"Skills")),l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"nav nav-tabs nav-fill"},a.map(function(e,a){return l.a.createElement("a",{className:"nav-item nav-link ".concat(0===a?"active":""),key:a,"data-toggle":"tab",href:"#".concat(e.name)},e.name)})),a.map(function(e,a){return l.a.createElement("div",{key:a,className:"tab-pane fade pt-5 pb-5 ".concat(0===a?"show active":""),id:e.name,role:"tabpanel"},l.a.createElement("div",{className:"row"},l.a.createElement(x,{key:a,skills:e.skills})))}))))}var S=t(33),j=t(110),L=t(108),A=t(109),B=t(111);function T(e){var a=e.show,t=e.size,n=e.handleClose,i=e.item;return l.a.createElement(j.a,{size:t,show:a,onHide:n,animation:!0,scrollable:!0},l.a.createElement(j.a.Header,{closeButton:!0},l.a.createElement(j.a.Title,null,i.title)),l.a.createElement(j.a.Body,null,l.a.createElement("p",null,i.description),l.a.createElement("p",null,"Languages Used: ",i.languages),l.a.createElement("p",null,"Timeline: ",i.timeline),l.a.createElement("p",null,"Pictures:"),l.a.createElement(L.a,null,i&&i.images.map(function(e,a){return l.a.createElement(A.a,{sm:6,key:a,className:"mt-3"},l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e,alt:i.title,className:"img-fluid img-thumbnail"})))}))),l.a.createElement(j.a.Footer,null,l.a.createElement(B.a,{variant:"secondary",onClick:n},"Close "),l.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:i.link},"Visit Site ")))}function M(e){var a=e.image,t=e.title,n=e.link,i=e.handleShow,c=e.index;return l.a.createElement("div",{className:"card text-dark mt-3 mb-3 shadow",onClick:function(){return i(c)}},l.a.createElement("img",{src:a,className:"card-img-top",alt:t}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 my-auto",style:{marginLeft:"-15px"}},l.a.createElement("h5",{className:"card-title"},t)),l.a.createElement("div",{className:"col-sm-6 text-sm-right"},l.a.createElement("button",{className:"btn btn-dark mb-2",style:{marginRight:"-15px"},href:n,onClick:function(){return i(c)}},"View")))))}var O=t(30),I=t.n(O);t(103);function q(e){var a=e.websites,t=e.graphics,i=Object(n.useState)(!1),c=Object(S.a)(i,2),r=c[0],o=c[1],s=Object(n.useState)(!1),m=Object(S.a)(s,2),d=m[0],p=m[1],u=function(e){p(a[e]),o(!0)};return l.a.createElement("div",{id:"recent-works"},l.a.createElement(T,{size:"lg",item:d,show:r,handleClose:function(){return o(!1)}}),l.a.createElement("div",{className:"row p-sm-5 pt-5 pb-5"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",null,"Recent Works"),l.a.createElement("h4",null,"Websites")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(I.a,{showDots:!0,swipeable:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:2,slidesToSlide:2},tablet:{breakpoint:{max:1024,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},infinite:!0,autoPlay:!0,autoPlaySpeed:3e3,keyBoardControl:!0,customTransition:"all .5s ease",containerClass:"carousel-container",dotListClass:"custom-dot-list-style dot-list",itemClass:"carousel-item-padding-40-px p-2 my-auto"},a.map(function(e,a){return l.a.createElement(M,{title:e.title,image:e.images[0],link:e.link,key:a,handleShow:u,timeline:e.timeline,index:a})})))),l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("h4",null,"Graphics")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(I.a,{showDots:!0,swipeable:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},infinite:!0,autoPlay:!0,autoPlaySpeed:3e3,keyBoardControl:!0,customTransition:"all .5s ease",containerClass:"carousel-container",dotListClass:"custom-dot-list-style dot-list",itemClass:"carousel-item-padding-40-px p-2 my-auto"},t.map(function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e,alt:"graphics",className:"img-fluid img-thumbnail"})))})))))))}var P=function(e){return l.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};function H(){return l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"row vh-100"},l.a.createElement("div",{className:"col-12 my-auto p-5 text-center"},l.a.createElement("h1",null,"Contact Me"),l.a.createElement("h4",null,"Intersted in working with me? ",l.a.createElement(P,{symbol:"\ud83d\ude0e",label:"cool"})),l.a.createElement("h4",null,"Send an email or contact me on WhatsApp ",l.a.createElement(P,{symbol:"\ud83d\ude09",label:"wink"})),l.a.createElement("div",{className:"row mt-4"},l.a.createElement("div",{className:"col text-right"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fas fa-envelope"})," ",l.a.createElement("a",{href:"mailto:chinonsoeke@gmail.com",className:"text-white"},"chinonsoeke@gmail.com"))),l.a.createElement("div",{className:"col text-left"},l.a.createElement("h4",null,l.a.createElement("i",{className:"fas fa-phone"})," +2347063944465"))),l.a.createElement("h4",null,"Remeber, you're awesome !!!"))))}var R=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={navbarActive:!1,skills:[{name:"Front-End",skills:[{name:"html",type:"i",icon:"devicon-html5-plain-wordmark colored"},{name:"css",type:"i",icon:"devicon-css3-plain-wordmark colored"},{name:"javascript",type:"i",icon:"devicon-javascript-plain colored"},{name:"react",type:"i",icon:"devicon-react-original-wordmark colored"},{name:"bootstrap",type:"i",icon:"devicon-bootstrap-plain-wordmark colored"},{name:"jquery",type:"i",icon:"devicon-jquery-plain-wordmark colored"},{name:"reactNative",type:"img",icon:v}]},{name:"Back-End",skills:[{name:"laravel",type:"i",icon:"devicon-laravel-plain-wordmark colored"},{name:"nodejs",type:"i",icon:"devicon-nodejs-plain-wordmark colored"},{name:"php",type:"i",icon:"devicon-php-plain colored"},{name:"mysql",type:"i",icon:"devicon-mysql-plain-wordmark colored"}]},{name:"Graphics",skills:[{name:"illustrator",type:"i",icon:"devicon-illustrator-plain colored",title:"Adobe Illustrator"},{name:"afterEffects",type:"img",icon:h,title:"Adobe After Effects"},{name:"figma",type:"i",icon:"fab fa-figma",title:"Figma"}]},{name:"Others",skills:[{name:"word",type:"i",icon:"fas fa-file-word",title:"Microsoft Word"},{name:"powerpoint",type:"i",icon:"fas fa-file-powerpoint",title:"Microsoft Powerpoint"},{name:"excel",type:"i",icon:"fas fa-file-excel",title:"Microsoft Excel"}]}],websites:[{title:"Kainetix Sports",type:"website",description:"Kainetix Sports Management is a talent management and sports marketing specialist, taking advantage of the abundance of talents in the African region",languages:"Laravel, MySql, HTML, CSS, Bootstrap",timeline:"2 months",images:E,link:"http://kainetix-sports.herokuapp.com"},{title:"Tecky Solutions",type:"website",description:"Tecky is aimed at connecting freelance creators in programming, photoshop, designing e.t.c. with clients looking for these creators to build a project.",languages:"Laravel, MySql, HTML, CSS, Bootstrap",timeline:"1 month",images:b,link:"https://tecky.com.ng/"},{title:"Yalla! Express",type:"website",description:"Yalla! Express is licensed by the Nigerian Postal Service Courier Regulatory Department (\u201cNIPOST CRD\u201d), to provide courier services to customers in Nigeria. They offer same day pickup and delivery solutions to individual and corporate customers across Lagos, Nigeria.",languages:"React, Laravel, MySql, HTML, CSS, Bootstrap",timeline:"2 months",images:k,link:"https://yallaexpress.com/"}],graphics:f},t.handleNavBar=function(){t.setState({navbarActive:!t.state.navbarActive})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:this.state.navbarActive?"side-nav-active":""},l.a.createElement(w,{handleNavBar:this.handleNavBar}),l.a.createElement("div",{className:"main-content"},l.a.createElement(N,{handleNavBar:this.handleNavBar}),l.a.createElement(C,{skills:this.state.skills}),l.a.createElement(q,{websites:this.state.websites,graphics:this.state.graphics}),l.a.createElement(H,null)))}}]),a}(n.Component),z=t(57);c.a.render(l.a.createElement(z.a,null,l.a.createElement(R,null)),document.getElementById("root"))},60:function(e,a,t){e.exports=t(105)}},[[60,1,2]]]);
//# sourceMappingURL=main.f922ac87.chunk.js.map