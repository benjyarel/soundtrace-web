(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1141:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1142);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1142:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1143:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(366).configure)([__webpack_require__(1144),__webpack_require__(1145)],module,!1)}).call(this,__webpack_require__(103)(module))},1144:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1150};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1144},1145:function(module,exports,__webpack_require__){var map={"./atoms/TestButton/TestButton.stories.jsx":1152};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1145},1150:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(8),blocks=__webpack_require__(211),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(esm.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.mdx)("div",{className:"subheading"},"Configure"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.mdx)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.mdx)("img",{src:stackalt,alt:"Build"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.mdx)("img",{src:colors,alt:"colors"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.mdx)("img",{src:flow,alt:"flow"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.mdx)("div",{className:"subheading"},"Learn"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.mdx)("img",{src:repo,alt:"repo"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(esm.mdx)("img",{src:direction,alt:"direction"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.mdx)("img",{src:code_brackets,alt:"code"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.mdx)("img",{src:comments,alt:"comments"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.mdx)("div",{className:"tip-wrapper"},Object(esm.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},1152:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(323),jsx_runtime=(__webpack_require__(0),__webpack_require__(212)),TestButton_TestButton=function TestButton(_ref){var text=_ref.text;return Object(jsx_runtime.jsx)("button",{children:text})};TestButton_TestButton.__docgenInfo={description:"",methods:[],displayName:"TestButton",props:{text:{type:{name:"string"},required:!0,description:""}}};var atoms_TestButton=TestButton_TestButton;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/TestButton/index.jsx"]={name:"TestButton",docgenInfo:TestButton_TestButton.__docgenInfo,path:"src/components/atoms/TestButton/index.jsx"});var Default=function Template(args){return Object(jsx_runtime.jsx)(atoms_TestButton,Object(objectSpread2.a)({},args))}.bind({});Default.args={text:"Click Me"};__webpack_exports__.default={title:"atoms/TestButton",component:Default};Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TestButton {...args} />"}},Default.parameters)},492:function(module,exports,__webpack_require__){__webpack_require__(493),__webpack_require__(651),__webpack_require__(652),__webpack_require__(860),__webpack_require__(1079),__webpack_require__(1112),__webpack_require__(1120),__webpack_require__(1132),__webpack_require__(1134),__webpack_require__(1139),__webpack_require__(1141),module.exports=__webpack_require__(1143)},560:function(module,exports){},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(366)}},[[492,1,2]]]);
//# sourceMappingURL=main.ab06424875e3af7945fa.bundle.js.map