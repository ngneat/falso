"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45],{5318:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7378);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return n?t.createElement(f,c(c({ref:r},p),{},{components:n})):t.createElement(f,c({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3509:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=n(5773),o=n(808),a=(n(7378),n(5318)),c=["components"],u={slug:"/comic book"},i="Comic book",l={unversionedId:"auto-generated/comic book",id:"auto-generated/comic book",title:"Comic book",description:"`randSuperhero`",source:"@site/docs/auto-generated/comic book.mdx",sourceDirName:"auto-generated",slug:"/comic book",permalink:"/falso/docs/comic book",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/comic book.mdx",tags:[],version:"current",frontMatter:{slug:"/comic book"},sidebar:"falso",previous:{title:"Colors",permalink:"/falso/docs/colors"},next:{title:"Commerce",permalink:"/falso/docs/commerce"}},p=[{value:"<code>randSuperhero</code>",id:"randsuperhero",children:[],level:3},{value:"<code>randSuperheroName</code>",id:"randsuperheroname",children:[],level:3}],s={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comic-book"},"Comic book"),(0,a.kt)("h3",{id:"randsuperhero"},(0,a.kt)("inlineCode",{parentName:"h3"},"randSuperhero")),(0,a.kt)("p",null,"Generate a random superhero."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSuperhero } from '@ngneat/falso';\n\nrandSuperhero()\nrandSuperhero({ company: 'Marvel' })\nrandSuperhero({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSuperhero()}/>;\n}\n")),(0,a.kt)("h3",{id:"randsuperheroname"},(0,a.kt)("inlineCode",{parentName:"h3"},"randSuperheroName")),(0,a.kt)("p",null,"Generate a random superhero name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSuperheroName } from '@ngneat/falso';\n\nrandSuperheroName()\nrandSuperhero({ company: 'Marvel' })\nrandSuperheroName({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSuperheroName()}/>;\n}\n")))}m.isMDXComponent=!0}}]);