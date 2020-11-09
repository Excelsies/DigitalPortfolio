(this["webpackJsonpdigital-portfolio"]=this["webpackJsonpdigital-portfolio"]||[]).push([[0],{24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c(17),i=c.n(n),l=(c(8),c(15)),o=c(2),r=(c(24),["btn--primary","btn--outline","btn--test"]),j=["btn--medium","btn--large"],b=["/contact-me","/about"],m=function(e){var t=e.children,c=e.type,a=e.onClick,n=e.buttonStyle,i=e.buttonSize,l=e.buttonLink,m=r.includes(n)?n:r[0],d=j.includes(i)?i:j[0],h=b.includes(l)?l:b[0];return Object(s.jsx)(o.b,{to:h,className:"btn-mobile",children:Object(s.jsx)("button",{className:"btn ".concat(m," ").concat(d),onClick:a,type:c,children:t})})};c(30);var d=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),r=Object(l.a)(i,2),j=r[0],b=r[1],d=function(){return n(!1)},h=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(a.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsxs)(o.b,{to:"/",className:"navbar-logo",onClick:d,children:[Object(s.jsx)("img",{src:"images/img-portrait.jpg",className:"portrait__img",alt:""}),Object(s.jsx)("div",{className:"navbar-logo-text",children:"Garet Eyre"})]}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return n(!c)},children:Object(s.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/",className:"nav-links",onClick:d,children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/about",className:"nav-links",onClick:d,children:"About Me"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/skills",className:"nav-links",onClick:d,children:"Skills"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/education",className:"nav-links",onClick:d,children:"Education"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/projects",className:"nav-links",onClick:d,children:"Projects"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/work",className:"nav-links",onClick:d,children:"Work"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/hobbies",className:"nav-links",onClick:d,children:"Hobbies"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(o.b,{to:"/contact-me",className:"nav-links-mobile",onClick:d,children:"Contact Me!"})})]}),j&&Object(s.jsx)(m,{buttonStyle:"btn--outline",children:"Contact Me!"})]})})})},h=c(3);c(31);var x=function(){return Object(s.jsxs)("div",{className:"hero-container",children:[Object(s.jsx)("video",{src:"/videos/backgroundVideo.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(s.jsx)("h1",{children:"Garet Eyre"}),Object(s.jsx)("p",{children:"A website about me!"}),Object(s.jsxs)("div",{className:"hero-btns",children:[Object(s.jsx)(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",buttonLink:"/about",children:"Who am I?"}),Object(s.jsx)(m,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"Contact Me!"})]})]})};c(32);var O=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(o.b,{className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(s.jsx)("img",{src:e.src,alt:"Travel Image",className:"cards__item__img"})}),Object(s.jsx)("div",{className:"cards__item__info",children:Object(s.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var u=function(){return Object(s.jsxs)("div",{className:"cards",children:[Object(s.jsx)("h1",{children:"Check out some of these topics!"}),Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsxs)("div",{className:"cards__wrapper",children:[Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(O,{src:"images/IMG-wedding.jpg",text:"Explore what it means to be Garet.",label:"About Me",path:"/about"}),Object(s.jsx)(O,{src:"images/img-Projects.jpg",text:"Travel through my past to see the projects I have worked on!",label:"Projects",path:"/projects"}),Object(s.jsx)(O,{src:"images/img-hobbies.jpg",text:"Check out what Garet likes to do when he is not hard at work",label:"Hobbies",path:"/hobbies"})]}),Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(O,{src:"images/img-skills.jpg",text:"Take a trip through the skills I have obtained throughout my life",label:"Skills",path:"/skills"}),Object(s.jsx)(O,{src:"images/img-Education.jpg",text:"Learn about the formal education I have received",label:"Education",path:"/education"}),Object(s.jsx)(O,{src:"images/img-work.jpg",text:"Find out all about my work history!",label:"Work",path:"/work"}),Object(s.jsx)(O,{src:"images/img-contact.jpg",text:"Would not hurt, to each out to Garet!",label:"Contact Me",path:"/contact-me"})]})]})})]})};c(33);var p=function(){return Object(s.jsxs)("div",{className:"footer-container",children:[Object(s.jsx)("div",{className:"footer-links",children:Object(s.jsx)("div",{className:"footer-link-wrapper",children:Object(s.jsxs)("div",{className:"footer-link-items",children:[Object(s.jsx)("h2",{children:"All About Me"}),Object(s.jsx)(o.b,{to:"/about",children:"About Me"}),Object(s.jsx)(o.b,{to:"/skills",children:"Skills"}),Object(s.jsx)(o.b,{to:"/education",children:"Education"}),Object(s.jsx)(o.b,{to:"/projects",children:"Projects"}),Object(s.jsx)(o.b,{to:"/work",children:"Work"}),Object(s.jsx)(o.b,{to:"/hobbies",children:"Hobbies"})]})})}),Object(s.jsx)("section",{className:"social-media",children:Object(s.jsxs)("div",{className:"social-media-wrap",children:[Object(s.jsx)("div",{className:"footer-logo",children:Object(s.jsx)(o.b,{to:"/",className:"social-logo",children:"MyLogo"})}),Object(s.jsx)("small",{className:"website-rights",children:"\xa9 Copyright \xa92020 All rights reserved"}),Object(s.jsx)("small",{className:"website-credit",children:"This portfolio was made from scratch with \u2665 by Garet Eyre"}),Object(s.jsxs)("div",{className:"social-icons",children:[Object(s.jsx)(o.b,{className:"social-icon-link facebook",to:"//www.facebook.com/garet.eyre",target:"_blank","aria-label":"Facebook",children:Object(s.jsx)("i",{className:"fab fa-facebook-f"})}),Object(s.jsx)(o.b,{className:"social-icon-link linkedin",to:"//www.linkedin.com/in/garet-eyre-062a2870",target:"_blank","aria-label":"LinkedIn",children:Object(s.jsx)("i",{className:"fab fa-linkedin"})}),Object(s.jsx)(o.b,{className:"social-icon-link github",to:"//github.com/Excelsies",target:"_blank","aria-label":"GitHub",children:Object(s.jsx)("i",{className:"fab fa-github"})}),Object(s.jsx)("a",{className:"social-icon-link email",href:"mailto:gme97531@gmail.com","aria-label":"Email",children:Object(s.jsx)("i",{className:"far fa-envelope"})})]})]})})]})};var N=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(x,{}),Object(s.jsx)(u,{}),Object(s.jsx)(p,{})]})};function g(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"aboutme",children:"About Me"}),Object(s.jsx)(p,{})]})}function k(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"education",children:"My Education"}),Object(s.jsx)(p,{})]})}function v(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"projects",children:"My Projects"}),Object(s.jsx)(p,{})]})}function f(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"skills",children:"My Skills"}),Object(s.jsx)(p,{})]})}function y(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"work",children:"Work History"}),Object(s.jsx)(p,{})]})}c(34);function w(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"contactme",children:"Contact Me!"}),Object(s.jsxs)("section",{className:"contact",children:[Object(s.jsx)("p",{className:"contact-heading",children:"Reach out to Garet! There's no harm in trying!"}),Object(s.jsx)("p",{className:"contact-text",children:"You can fill out this form"}),Object(s.jsx)("div",{className:"input-areas",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"name",name:"name",placeholder:"Your Email*",className:"contact-input"})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"email",name:"email",placeholder:"Your Name*",className:"contact-input"})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"subject",name:"subject",placeholder:"Subject*",className:"contact-input"})}),Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"body",name:"body",placeholder:"What would you like to say?",className:"contact-input"})}),Object(s.jsx)("div",{children:Object(s.jsx)(m,{buttonStyle:"btn--large",children:"Send Message"})})]})}),Object(s.jsx)("p",{className:"contact-text",children:"OR"}),Object(s.jsxs)("p",{className:"contact-text 2",children:["Directly email me at ",Object(s.jsx)("a",{className:"email-link",href:"mailto:gme97531@gmail.com",children:" gme97531@gmail.com"})]})]}),Object(s.jsx)(p,{})]})}function _(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"hobbies",children:"My Hobbies"}),Object(s.jsx)(p,{})]})}var C=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(d,{}),Object(s.jsxs)("switch",{children:[Object(s.jsx)(h.a,{path:"/",exact:!0,component:N}),Object(s.jsx)(h.a,{path:"/about",component:g}),Object(s.jsx)(h.a,{path:"/education",component:k}),Object(s.jsx)(h.a,{path:"/projects",component:v}),Object(s.jsx)(h.a,{path:"/skills",component:f}),Object(s.jsx)(h.a,{path:"/work",component:y}),Object(s.jsx)(h.a,{path:"/contact-me",component:w}),Object(s.jsx)(h.a,{path:"/hobbies",component:_})]})]})})};i.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))},8:function(e,t,c){}},[[35,1,2]]]);
//# sourceMappingURL=main.764054f8.chunk.js.map