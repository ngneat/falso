"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[313],{5318:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>f});var t=n(7378);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(f,l(l({ref:r},d),{},{components:n})):t.createElement(f,l({ref:r},d))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2246:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(5773),a=(n(7378),n(5318));const o={slug:"/colors"},l="Colors",c={unversionedId:"auto-generated/colors",id:"auto-generated/colors",title:"Colors",description:"`randColor`",source:"@site/docs/auto-generated/colors.mdx",sourceDirName:"auto-generated",slug:"/colors",permalink:"/falso/docs/colors",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/colors"},sidebar:"falso",previous:{title:"Code",permalink:"/falso/docs/code"},next:{title:"Comic book",permalink:"/falso/docs/comic book"}},s={},i=[{value:"<code>randColor</code>",id:"randcolor",level:3},{value:"<code>randHex</code>",id:"randhex",level:3},{value:"<code>randHsl</code>",id:"randhsl",level:3},{value:"<code>randRgb</code>",id:"randrgb",level:3}],d={toc:i};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colors"},"Colors"),(0,a.kt)("h3",{id:"randcolor"},(0,a.kt)("inlineCode",{parentName:"h3"},"randColor")),(0,a.kt)("p",null,"Generate a random color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randColor } from '@ngneat/falso';\n\nrandColor()\nrandColor({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randColor()}/>;\n}\n")),(0,a.kt)("h3",{id:"randhex"},(0,a.kt)("inlineCode",{parentName:"h3"},"randHex")),(0,a.kt)("p",null,"Generate a random hex."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randHex } from '@ngneat/falso';\n\nrandHex()\nrandHex({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randHex()}/>;\n}\n")),(0,a.kt)("h3",{id:"randhsl"},(0,a.kt)("inlineCode",{parentName:"h3"},"randHsl")),(0,a.kt)("p",null,"Generate a random hsl color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randHsl } from '@ngneat/falso';\n\nrandHsl()\nrandHsl({ length: 3 })\nrandHsl({ alpha: true }) // default is false\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randHsl()}/>;\n}\n")),(0,a.kt)("h3",{id:"randrgb"},(0,a.kt)("inlineCode",{parentName:"h3"},"randRgb")),(0,a.kt)("p",null,"Generate a random rgb."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randRgb } from '@ngneat/falso';\n\nrandRgb()\nrandRgb({ alpha: true }) // default is false\nrandRgb({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randRgb()}/>;\n}\n")))}p.isMDXComponent=!0}}]);