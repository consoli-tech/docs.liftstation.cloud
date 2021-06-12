(self.webpackChunkdocs_liftstation_cloud=self.webpackChunkdocs_liftstation_cloud||[]).push([[5],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7924:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(2122),o=t(9756),l=(t(7294),t(3905)),a=["components"],i={},s={unversionedId:"intro",id:"version-1.0.0/intro",isDocsHomePage:!1,title:"CLI Documentation",description:"Overview",source:"@site/cli_versioned_docs/version-1.0.0/intro.md",sourceDirName:".",slug:"/intro",permalink:"/cli/intro",version:"1.0.0",frontMatter:{},sidebar:"version-1.0.0/tutorialOperator",next:{title:"config",permalink:"/cli/config"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Windows Installation",id:"windows-installation",children:[]},{value:"Mac Installation",id:"mac-installation",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The LiftStation.cloud CLI is used to enter well and lift station data through a command line interface. This may\nbe preferred to sending API requests."),(0,l.kt)("p",null,"The CLI is written with Node.js. You will need to install Node.js and the NPM package manager to install this program\non your computer."),(0,l.kt)("h2",{id:"windows-installation"},"Windows Installation"),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js Download")," to download Node.js. Ensure that the Node.js version is\n12 or greater. "),(0,l.kt)("p",null,"Once you have completed the installation process, run the following command to ensure that they are installed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\conutils node -v\nv14.17.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\conutils npm -v\n6.14.13\n")),(0,l.kt)("p",null,"Now that they are installed open a Powershell Window and run ",(0,l.kt)("inlineCode",{parentName:"p"},"npm i -g lscloud")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\conutils npm i -g lscloud\n")),(0,l.kt)("p",null,"Run command ",(0,l.kt)("inlineCode",{parentName:"p"},"lscloud")," to ensure installation was successful"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\Users\\conutils lscloud\nlscloud\n\nCommands:\n  lscloud config             Enter your API Credentials\n  lscloud get wells          Retrieve a list of wells. Used to retrieve the ID\n                             of a well to push readings to the cloud.\n  lscloud push well reading  Push a well reading to the cloud.\n\nOptions:\n  --help     Show help                                                 [boolean]\n  --version  Show version number                                       [boolean]\n")),(0,l.kt)("h2",{id:"mac-installation"},"Mac Installation"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"homebrew")," is not installed go ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"here"),"."),(0,l.kt)("p",null,"Open a terminal Window and enter ",(0,l.kt)("inlineCode",{parentName:"p"},"brew install node@12"),". "),(0,l.kt)("p",null,"Once you have completed the installation process verify that Node and NPM have been installed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ node -v\nv14.17.0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm -v\n6.14.13\n")),(0,l.kt)("p",null,"Run the command ",(0,l.kt)("inlineCode",{parentName:"p"},"npm i -g lscloud")))}p.isMDXComponent=!0}}]);