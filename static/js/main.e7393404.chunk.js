(this["webpackJsonpdigital-portfolio"]=this["webpackJsonpdigital-portfolio"]||[]).push([[0],[,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),o=a(18),s=a.n(o),n=(a(4),a(16)),r=a(2),l=(a(28),["btn--primary","btn--outline","btn--outline-dark"]),j=["btn--medium","btn--large"],h=["/DigitalPortfolio/contact-me","/DigitalPortfolio/about"],d=function(e){var t=e.children,a=e.type,c=e.onClick,o=e.buttonStyle,s=e.buttonSize,n=e.buttonLink,d=l.includes(o)?o:l[0],b=j.includes(s)?s:j[0],m=h.includes(n)?n:h[0];return Object(i.jsx)(r.b,{to:m,className:"btn-mobile",children:Object(i.jsx)("button",{className:"btn ".concat(d," ").concat(b),onClick:c,type:a,children:t})})};a(34);var b=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1],s=Object(c.useState)(!0),l=Object(n.a)(s,2),j=l[0],h=l[1],b=function(){return o(!1)},m=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(c.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"navbar-container",children:[Object(i.jsxs)(r.b,{to:"/DigitalPortfolio/",className:"navbar-logo",onClick:b,children:[Object(i.jsx)("img",{src:"images/img-portrait.jpg",className:"portrait__img",alt:""}),Object(i.jsx)("div",{className:"navbar-logo-text",children:"Garet Eyre"})]}),Object(i.jsx)("div",{className:"menu-icon",onClick:function(){return o(!a)},children:Object(i.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(i.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/",className:"nav-links",onClick:b,children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/about",className:"nav-links",onClick:b,children:"About Me"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-links",onClick:b,children:"Projects"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-links",onClick:b,children:"Hobbies"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/work-history",className:"nav-links",onClick:b,children:"Work History"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/contact-me",className:"nav-links-mobile",onClick:b,children:"Contact Me!"})})]}),j&&Object(i.jsx)(d,{buttonStyle:"btn--outline",children:"Contact Me!"})]})})})},m=a(3),g=(a(35),function(){var e=p(window.innerWidth);return Object(i.jsx)("video",{muted:!0,src:e,autoPlay:!0,loop:!0,playsInline:!0})}),p=function(e){return e>=1080?"/DigitalPortfolio/videos/backgroundVideo.mp4":e>=720?"/DigitalPortfolio/videos/backgroundVideoTablet.mp4":"/DigitalPortfolio/videos/backgroundVideoMobile.mp4"};var u=function(){return Object(i.jsxs)("div",{className:"hero-container",children:[Object(i.jsx)(g,{}),Object(i.jsx)("h1",{children:"Garet Eyre"}),Object(i.jsx)("p",{children:"A website about me!"}),Object(i.jsxs)("div",{className:"hero-btns",children:[Object(i.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",buttonLink:"/DigitalPortfolio/about",children:"Who am I?"}),Object(i.jsx)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:"Contact Me!"})]})]})};a(13);var x=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("li",{className:"cards__item",children:Object(i.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(i.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(i.jsx)("img",{src:e.src,alt:"Topic Image",className:"cards__item__img"})}),Object(i.jsx)("div",{className:"cards__item__info",children:Object(i.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var O=function(){return Object(i.jsxs)("div",{className:"cards",children:[Object(i.jsx)("h1",{children:"Check out some of these topics!"}),Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/IMG-wedding.jpg",text:"Explore what it means to be me.",label:"About Me",path:"/DigitalPortfolio/about"}),Object(i.jsx)(x,{src:"images/img-Projects.jpg",text:"Travel through my past to see the projects I have worked on!",label:"Projects",path:"/DigitalPortfolio/projects"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/img-hobbies.jpg",text:"Check out what I like to do when I am not hard at work",label:"Hobbies",path:"/DigitalPortfolio/hobbies"}),Object(i.jsx)(x,{src:"images/img-work.jpg",text:"Find out all about my work history!",label:"Work History",path:"/DigitalPortfolio/work-history"}),Object(i.jsx)(x,{src:"images/img-contact.jpg",text:"Would not hurt to reach out to me!",label:"Contact Me",path:"/DigitalPortfolio/contact-me"})]})]})})]})};var f=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(O,{})]})};a(36);function k(){return Object(i.jsxs)("ul",{className:"about-container",children:[Object(i.jsx)("img",{src:"images/IMG-wedding.jpg",alt:"Profile",className:"about-image"}),Object(i.jsxs)("div",{className:"about-content",children:[Object(i.jsx)("h1",{className:"about-content-header",children:"About Me"}),Object(i.jsx)("p",{className:"about-content-body intro",children:"In 6th grade I had a general idea of what I wanted to have as a career. After thinking about what I am good at and what I liked to do I figured that I wanted to be a 3D Animator, a Software Engineer, or a Computer Engineer. Throughout middle school and high school I got the chance to learn 3D animation, to program my own applications, and to work directly with computer hardware. I quickly found that I thoroughly enjoyed working with code. While I did enjoy working with hardware, I realized I was not all that good at it. I also noticed that I'd get tired of animation very fast. So I happily focused on programming."}),Object(i.jsx)("p",{className:"about-content-body work",children:"While taking classes for programming and creating my own applications, I decided to try to keep the jobs I chose to work as close to my career goal as I could at the time. Starting in customer service I worked my way to technical support, where I now am attempting to move into development. In my spare time I would continue to work on software that kept me learning and working on code, improving where I can with projects I enjoy."}),Object(i.jsx)("p",{className:"about-content-body projects",children:"I have come to realize with each and every project that I really don't care what it is I'm making, as the challenge of creating something out of code really held my interest. Designing things from a simple notepad-esque application to procedurally generated mazes in a video game, writing in C# or using JavaScript, it didn't matter what I was making or what I was using, I was engaged and entertained. With this I was able to learn a multitude of languages in multiple Integrated Development Environments. I have learned to transition from one IDE to another with little confusion and from one language to another with little effort."}),Object(i.jsx)("p",{className:"about-content-body conclusion",children:"While I thoroughly enjoy working with code, I do get burnt out after vast amounts of time working on a project. With this there a several other things I enjoy doing, albeit less productive. In these times I would tend to sketch out an eyball, play a Japanese role playing game, or watch a comedy with my wife. All in all, I have found that I am perfectly content being locked in a dark room with my computer, only being fed on occasion, left to work on another application."})]})]})}function w(){return Object(i.jsxs)("div",{className:"cards",children:[Object(i.jsx)("h1",{children:"Sift through my Projects!"}),Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/img-TheLabyrinth.jpg",text:"Explore the labyrinth that is my first 3D game!",label:"The Labyrinth",path:"/DigitalPortfolio/projects/Labyrinth"}),Object(i.jsx)(x,{src:"images/img-models.png",text:"Take a look at an application I made to display my animated models!",label:"Models",path:"/DigitalPortfolio/projects/Models"}),Object(i.jsx)(x,{src:"images/img-checkers.jpg",text:"Experience the second React app I have made!",label:"Checkers",path:"/DigitalPortfolio/projects/Checkers"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/img-ProjectRTSS.jpg",text:"Journey through the unfinished group project of Project RTSS",label:"ProjectRTSS",path:"/DigitalPortfolio/projects/ProjectRTSS"}),Object(i.jsx)(x,{src:"images/img-salesforce.jpg",text:"Checkout the application I have made to make my job run more effecient!",label:"SalesForce",path:"/DigitalPortfolio/projects/SalesForce"}),Object(i.jsx)(x,{src:"images/img-sql-gui.jpg",text:"Go over the application I made that saved me time running common SQL querries!",label:"SQL-GUI",path:"/DigitalPortfolio/projects/SQL-GUI"}),Object(i.jsx)(x,{src:"images/img-tictactoe.jpg",text:"Enjoy the first React project I developed in its simplicity!",label:"TicTacToe",path:"/DigitalPortfolio/projects/TicTacToe"})]})]})})]})}function v(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Checkers"})]})}function N(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"The Labyrinth"})]})}function y(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"3D Models"})]})}function P(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Project RTSS"})]})}function I(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"SalesForce"})]})}function D(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"SQL GUI"})]})}function S(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Tic Tac Toe"})]})}function _(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects",exact:!0,component:w}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/Checkers",component:v}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/Labyrinth",component:N}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/Models",component:y}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/ProjectRTSS",component:P}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/SalesForce",component:I}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/SQL-GUI",component:D}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects/TicTacToe",component:S})]})})}a(37);var C=a.p+"static/media/Resume.c2956d0f.pdf";function T(){return Object(i.jsx)("div",{className:"Work",style:{backgroundImage:"url(./images/img-backgroundW.jpg)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(i.jsxs)("section",{className:"work-content",children:[Object(i.jsx)("h1",{className:"work-content-header",children:"Work History"}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Solera AutoPoint | South Jordan, UT | January 2017 - Present"}),Object(i.jsxs)("p",{className:"work-content-description",children:["L1 Application Support Team Lead",Object(i.jsx)("li",{children:"Provide phone, email, and chat support regarding the company's applications"}),Object(i.jsx)("li",{children:"Use SQL to pull and sometimes change data"}),Object(i.jsx)("li",{children:"Check each and every application to make sure they are function properly every morning"}),Object(i.jsx)("li",{children:"Case each phone call, email, and chat in SalesForce and escalate any issues that I cannot resolve via JIRA cases"}),Object(i.jsx)("li",{children:"Provide all communication between the Helpdesk and any other department"})]})]}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Unisys | Salt Lake City, UT | December 2015 - January 2017"}),Object(i.jsxs)("p",{className:"work-content-description",children:["L1 Technical Support",Object(i.jsx)("li",{children:"Provide over the phone technical and administrator support to the financial company Ameriprise"}),Object(i.jsx)("li",{children:"Case each contact via ServiceNow and escalate the ServiceNow tickets that could not be resolved over the phone to the respective team"})]})]}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Autoliv | Brigham City, UT | September 2015 - January 2016"}),Object(i.jsxs)("p",{className:"work-content-description",children:["Production Associate",Object(i.jsx)("li",{children:"Manning machines in an assembly line putting together explosives to be used in airbags"}),Object(i.jsx)("li",{children:"Monitor each machine used to ensure each piece is properly placed and welded"}),Object(i.jsx)("li",{children:"Ensure each piece is free of defects in each step of the process"}),Object(i.jsx)("li",{children:"Shut down ANY machine that is resulting in defects on the explosive for repair"})]})]}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Staples | West Valley, UT | May 2015 - August 2015"}),Object(i.jsxs)("p",{className:"work-content-description",children:["Copy/Print Associate",Object(i.jsx)("li",{children:"Manage registers when needed"}),Object(i.jsx)("li",{children:"Make customers prints appear the best we can for their specifications"}),Object(i.jsx)("li",{children:"Print, laminate, cut everything from business cards to large storefront banners"}),Object(i.jsx)("li",{children:"Ship packages via UPS"}),Object(i.jsx)("li",{children:"Send and recieve faxes"}),Object(i.jsx)("li",{children:"Copy images and send them to customers or print the copies"})]})]}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Game Pedler | West Valley, UT | October 2014 - August 2015"}),Object(i.jsxs)("p",{className:"work-content-description",children:["Sales Associate",Object(i.jsx)("li",{children:"Man the register for all their transactions"}),Object(i.jsx)("li",{children:"Keep the store clean, the counters wiped down, and the products displayed in a pleasing fassion"}),Object(i.jsx)("li",{children:"Interact with the customers with idle conversation, recommendations, and answering questions"}),Object(i.jsx)("li",{children:"Try to sale as much product as the customer is willing to get"})]})]}),Object(i.jsxs)("div",{className:"work-content-job",children:[Object(i.jsx)("h2",{className:"work-content-location",children:"Seven Peaks Waterpark | Salt Lake City, UT | May 2014 - September 2014"}),Object(i.jsxs)("p",{className:"work-content-description",children:["Guest Interactions Employee",Object(i.jsx)("li",{children:"Work the ticket both upselling packages and working the register"}),Object(i.jsx)("li",{children:"Manage the gift shop, manning the register while keeping the shack clean, organized, and stocked"}),Object(i.jsx)("li",{children:"Fill the inner tubes and rent them to the customers"}),Object(i.jsx)("li",{children:"Help customers in the office with their issues, coupons, or their season passes"})]})]}),Object(i.jsx)("div",{className:"work-resumeBtn",children:Object(i.jsx)("a",{href:C,target:"new",className:"work-btn",children:"Check Out My Resume!"})})]})})}a(38);function A(){return Object(i.jsxs)("section",{className:"contact",children:[Object(i.jsx)("h1",{className:"contactme",children:"Contact Me!"}),Object(i.jsx)("p",{className:"contact-heading",children:"Reach out to me! There's no harm in trying!"}),Object(i.jsx)("p",{className:"contact-text",children:"You can fill out this form"}),Object(i.jsx)("div",{className:"input-areas",children:Object(i.jsxs)("form",{children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"name",name:"name",placeholder:"Your Email*",className:"contact-input"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Your Name*",className:"contact-input"})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"subject",name:"subject",placeholder:"Subject*",className:"contact-input"})}),Object(i.jsx)("div",{children:Object(i.jsx)("textarea",{type:"body",name:"body",placeholder:"What would you like to say?",className:"contact-input"})}),Object(i.jsx)("div",{children:Object(i.jsx)(d,{buttonStyle:"btn--outline-dark",buttonSize:"btn--large",children:"Send Message"})})]})}),Object(i.jsx)("p",{className:"contact-text",children:"OR"}),Object(i.jsxs)("p",{className:"contact-text",children:["Directly email me at ",Object(i.jsx)("a",{className:"email-link",href:"mailto:gme97531@gmail.com",children:" gme97531@gmail.com"})]})]})}function M(){return Object(i.jsxs)("div",{className:"cards",children:[Object(i.jsx)("h1",{children:"Look through my Hobbies!"}),Object(i.jsx)("div",{className:"cards__container",children:Object(i.jsxs)("div",{className:"cards__wrapper",children:[Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/img-animation.jpg",text:"Checkout some animation!",label:"Animation",path:"/DigitalPortfolio/hobbies/Animation"}),Object(i.jsx)(x,{src:"images/img-programming.jpg",text:"Find out about my passion for programming!",label:"Programming",path:"/DigitalPortfolio/hobbies/Programming"})]}),Object(i.jsxs)("ul",{className:"cards__items",children:[Object(i.jsx)(x,{src:"images/img-hobbies.jpg",text:"I enjoy videogames. Take a look at my console collection!",label:"Collection",path:"/DigitalPortfolio/hobbies/Collection"}),Object(i.jsx)(x,{src:"images/drawings/img-drawing-anima.jpg",text:"Explore my drawings!",label:"Drawing",path:"/DigitalPortfolio/hobbies/Drawing"}),Object(i.jsx)(x,{src:"images/img-repairing.jpg",text:"Learn about my console and cartridge repair experience!",label:"Repairing",path:"/DigitalPortfolio/hobbies/Repairing"})]})]})})]})}function L(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Animation"})]})}function F(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Collecting"})]})}function E(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Drawing"})]})}function W(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Programming"}),Object(i.jsx)("p",{className:"body",children:"After figuring out that programming may be a good career path for me I sought out a way to try it out. I reached out to my father when I was 5 asking where to start. He handed me one of his college books on learning C++ and explained I should try it out. After going through the lessons and creating a simple calculator, my attention was turned away and I didn\u2019t get back to learning more for it. The following school year, I was offered to take a \u201ccomputer science\u201d class where they taught us HTML and how to create a simple website that belonged in the late 90\u2019s and early 00\u2019s \u2013 using a lot of cut and paste."}),Object(i.jsx)("p",{className:"body",children:"While the elementary school introduced me to code, I did not get a full taste of it until I started high school and was able to take an Intro to Programming class. There, I learned C# and gained my love of creating applications. I continued this throughout high school and learned JAVA, JavaScript, and some more C++."}),Object(i.jsx)("p",{className:"body",children:"Outside high school I started working on my own applications and learned how to work in more languages, such as Python and HTML 5. I worked with jsReact, learned how to work with XMLs, CSVs, YAML, and JSON. Picked up a couple IDEs and tried out Visual Studios, VS Code, NetBeans, Eclipse, Android studio, and learned how to create inside Unity and Unreal Engine."}),Object(i.jsx)("p",{className:"body",children:"I continue to learn and grow to this day, enjoying what I create and finding additional ways to accomplish what I want to do."})]})}function R(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",className:"nav-back",children:Object(i.jsxs)("div",{className:"nav-back-text",children:["<","Back"]})}),Object(i.jsx)("h1",{className:"header",children:"Repairing"})]})}a(39);function B(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies",exact:!0,component:M}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies/Animation",component:L}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies/Collection",component:F}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies/Drawing",component:E}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies/Programming",component:W}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies/Repairing",component:R})]})})}a(40);var U=function(){return Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsx)("div",{className:"footer-links",children:Object(i.jsx)("div",{className:"footer-link-wrapper",children:Object(i.jsxs)("div",{className:"footer-link-items",children:[Object(i.jsx)("h2",{children:"All About Me"}),Object(i.jsx)(r.b,{to:"/DigitalPortfolio/about",children:"About Me"}),Object(i.jsx)(r.b,{to:"/DigitalPortfolio/projects",children:"Projects"}),Object(i.jsx)(r.b,{to:"/DigitalPortfolio/work-history",children:"Work History"}),Object(i.jsx)(r.b,{to:"/DigitalPortfolio/hobbies",children:"Hobbies"})]})})}),Object(i.jsx)("section",{className:"social-media",children:Object(i.jsxs)("div",{className:"social-media-wrap",children:[Object(i.jsx)("div",{className:"footer-logo",children:Object(i.jsx)(r.b,{to:"/DigitalPortfolio/",className:"social-logo",children:"Garet Eyre"})}),Object(i.jsx)("small",{className:"website-rights",children:"\xa9 Copyright \xa92020 All rights reserved"}),Object(i.jsx)("small",{className:"website-credit",children:"This portfolio was made from scratch with \u2665 by Garet Eyre"}),Object(i.jsxs)("div",{className:"social-icons",children:[Object(i.jsx)(r.b,{className:"social-icon-link facebook",to:"//www.facebook.com/garet.eyre",target:"_blank","aria-label":"Facebook",children:Object(i.jsx)("i",{className:"fab fa-facebook-f"})}),Object(i.jsx)(r.b,{className:"social-icon-link linkedin",to:"//www.linkedin.com/in/garet-eyre-062a2870",target:"_blank","aria-label":"LinkedIn",children:Object(i.jsx)("i",{className:"fab fa-linkedin"})}),Object(i.jsx)(r.b,{className:"social-icon-link github",to:"//github.com/Excelsies",target:"_blank","aria-label":"GitHub",children:Object(i.jsx)("i",{className:"fab fa-github"})}),Object(i.jsx)("a",{className:"social-icon-link email",href:"mailto:gme97531@gmail.com","aria-label":"Email",children:Object(i.jsx)("i",{className:"far fa-envelope"})})]})]})})]})},H=a(20),G=a(22),J=a(21),z=function(e){Object(G.a)(a,e);var t=Object(J.a)(a);function a(){var e;Object(H.a)(this,a);for(var i=arguments.length,c=new Array(i),o=0;o<i;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){return window.scrollTo(0,0)},e.componentDidUpdate=function(t){e.props.location!==t.location&&window.scrollTo(0,0)},e.render=function(){return e.props.children},e}return a}(c.PureComponent),V=Object(m.f)(z);var Q=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(b,{}),Object(i.jsx)(V,{children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{path:"/DigitalPortfolio",exact:!0,component:f}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/about",component:k}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/projects",component:_}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/work-history",component:T}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/contact-me",component:A}),Object(i.jsx)(m.a,{path:"/DigitalPortfolio/hobbies",component:B})]})}),Object(i.jsx)(U,{})]})})};s.a.render(Object(i.jsx)(Q,{}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.e7393404.chunk.js.map