"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[130],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9507:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:4},l="Generate a build",c={unversionedId:"getting-started/generate-a-build",id:"getting-started/generate-a-build",title:"Generate a build",description:"To run the build script, you can run \u201cnpm run build\u201d in your terminal or console.",source:"@site/docs/getting-started/generate-a-build.md",sourceDirName:"getting-started",slug:"/getting-started/generate-a-build",permalink:"/docs/getting-started/generate-a-build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/generate-a-build.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start the server",permalink:"/docs/getting-started/start-the-server"},next:{title:"Upload a preview",permalink:"/docs/getting-started/upload-a-preview"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generate-a-build"},"Generate a build"),(0,a.kt)("p",null,"To run the build script, you can run \u201cnpm run build\u201d in your terminal or console.\n\u201cbuild\u201d is actually a script which is found in package.json, which in turn runs the command rds-build. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project.  You\u2019ll see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build\n")),(0,a.kt)("p",null,"\u201cbuild\u201d is actually a script which is found in package.json, which in turn runs the command rds-build. After you execute this script, it will start searching for .richmediarc files in all the directories and subdirectories of your project. You\u2019ll see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Please choose the current build to start. (Press <space> to select, <a> to toggle all, <i> to invert selection)\n>( ) all\n( ) ./src/300x250/.richmediarc\n( ) ./src/300x600/.richmediarc\n( ) ./src/728x90/.richmediarc\n( ) ./src/970x250/.richmediarc\n")),(0,a.kt)("p",null,"Here, you can select which units you wish to build. Navigate with arrow keys and select (it\u2019s possible to select multiple values) with spacebar, then press enter to confirm your selection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? save this as a separate command in package.json (y/N)\n")),(0,a.kt)("p",null,"Use this option to save your selection as a separate command. If you select ",(0,a.kt)("strong",{parentName:"p"},"y"),", you\u2019ll see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? please provide a name for your command. You will type something like npm run build:__NAME__\n")),(0,a.kt)("p",null,"No special chars, spaces, dashes just a single word."),(0,a.kt)("p",null,"You\u2019ll have to give it a unique name, for example \u201cselection\u201d. Now you will be able to run a dev server with the same selection simply by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run build:selection\n")),(0,a.kt)("p",null,"It will now compile the banners you selected and then move these files to the ./build directory, along with zipped files which you can use for delivering files or uploading to certain previews."))}m.isMDXComponent=!0}}]);