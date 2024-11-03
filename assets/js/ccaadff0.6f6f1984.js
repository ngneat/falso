"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45],{5318:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(7378);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),i=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(p.Provider,{value:r},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?t.createElement(f,c(c({ref:r},u),{},{components:n})):t.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3509:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var t=n(5773),o=(n(7378),n(5318));const a={slug:"/comic book"},c="Comic book",l={unversionedId:"auto-generated/comic book",id:"auto-generated/comic book",title:"Comic book",description:"`randSuperhero`",source:"@site/docs/auto-generated/comic book.mdx",sourceDirName:"auto-generated",slug:"/comic book",permalink:"/falso/docs/comic book",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/comic book"},sidebar:"falso",previous:{title:"Colors",permalink:"/falso/docs/colors"},next:{title:"Commerce",permalink:"/falso/docs/commerce"}},p={},i=[{value:"<code>randSuperhero</code>",id:"randsuperhero",level:3},{value:"<code>randSuperheroName</code>",id:"randsuperheroname",level:3}],u={toc:i};function s(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comic-book"},"Comic book"),(0,o.kt)("h3",{id:"randsuperhero"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSuperhero")),(0,o.kt)("p",null,"Generate a random superhero."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSuperhero } from '@ngneat/falso';\n\nrandSuperhero()\nrandSuperhero({ company: 'Marvel' })\nrandSuperhero({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSuperhero()}/>;\n}\n")),(0,o.kt)("h3",{id:"randsuperheroname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSuperheroName")),(0,o.kt)("p",null,"Generate a random superhero name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSuperheroName } from '@ngneat/falso';\n\nrandSuperheroName()\nrandSuperhero({ company: 'Marvel' })\nrandSuperheroName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSuperheroName()}/>;\n}\n")))}s.isMDXComponent=!0}}]);