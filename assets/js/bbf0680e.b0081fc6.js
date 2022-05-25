"use strict";(self.webpackChunkdisplay_advertising_docs=self.webpackChunkdisplay_advertising_docs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},s="Upload a preview",u={unversionedId:"getting-started/upload-a-preview",id:"getting-started/upload-a-preview",title:"Upload a preview",description:"Uploading your banners to a preview can be done in a number of ways.",source:"@site/docs/getting-started/upload-a-preview.md",sourceDirName:"getting-started",slug:"/getting-started/upload-a-preview",permalink:"/display-advertising-docs/docs/getting-started/upload-a-preview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/upload-a-preview.md",tags:[],version:"current",lastUpdatedBy:"Mirko",lastUpdatedAt:1652801835,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generate a build",permalink:"/display-advertising-docs/docs/getting-started/generate-a-build"},next:{title:"Configuration files",permalink:"/display-advertising-docs/docs/richmediarc"}},p={},d=[{value:"MediaMonks Preview",id:"mediamonks-preview",level:4}],c={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-a-preview"},"Upload a preview"),(0,o.kt)("p",null,"Uploading your banners to a preview can be done in a number of ways."),(0,o.kt)("p",null,"The easiest method is to use our tool called \u201cdisplay-upload\u201d, which you can start by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-terminal"},"npm run preview\n")),(0,o.kt)("p",null,"If it\u2019s the first time you run this command, you\u2019ll see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Welcome to Display-Upload\n? No .henkrc as added to the .gitignore, should i add it? (Y/n)\n")),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Y"),". You\u2019ll see the following options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Where do you want to upload? (Use arrow keys)\n> Mediamonks Preview\n  Amazon S3\n  SFTP (alpha)\n  - FTP (Disabled)\n  - Netflix Monet (Disabled)\n  - Google DoubleClick Studio (Disabled)\n")),(0,o.kt)("p",null,"Below are guides for uploading to an Amazon S3 bucket."),(0,o.kt)("p",null,"FYI MediaMonks Preview and Amazon S3 do practically the same thing."),(0,o.kt)("h4",{id:"mediamonks-preview"},"MediaMonks Preview"),(0,o.kt)("p",null,"This will upload the entire build folder to a S3 bucket. When you select this, you\u2019ll have to enter a few things:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What directory you want to upload?\n")),(0,o.kt)("p",null,"Just enter\n",(0,o.kt)("inlineCode",{parentName:"p"},"build"),"\nhere by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Please fill in the name for the S3 Bucket:\n? Please fill in the accessKeyId for the S3 Bucket:\n? Please fill in the secretAccessKey for the S3 Bucket:\n")),(0,o.kt)("p",null,"These values you can find in the pinned messages of our \u2018wfh-aas-dev\u2019 Slack channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? outputDir: (3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/)\n")),(0,o.kt)("p",null,"It will automatically generate a unique hash value as the directory name of the preview. Just press ",(0,o.kt)("strong",{parentName:"p"},"enter")," or add your\nown value and then press enter."),(0,o.kt)("p",null,"It will then upload the contents of the ./build/ directory and show you a link to the preview, which should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"http://richmedia-previews-s3bucket-khpmpnjb2dya.s3.amazonaws.com/3334d7e2-3d58-4c84-aec7-4b6d4f50c7f0/index.html\n")))}f.isMDXComponent=!0}}]);