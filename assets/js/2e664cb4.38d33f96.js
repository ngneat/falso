"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[858],{5318:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),p=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4251:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(5773),a=(r(7378),r(5318));const o={slug:"/code"},l="Code",i={unversionedId:"auto-generated/code",id:"auto-generated/code",title:"Code",description:"`randCodeSnippet`",source:"@site/docs/auto-generated/code.mdx",sourceDirName:"auto-generated",slug:"/code",permalink:"/falso/docs/code",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/code"},sidebar:"falso",previous:{title:"Aws",permalink:"/falso/docs/aws"},next:{title:"Colors",permalink:"/falso/docs/colors"}},d={},p=[{value:"<code>randCodeSnippet</code>",id:"randcodesnippet",level:3},{value:"<code>randFontFamily</code>",id:"randfontfamily",level:3},{value:"<code>randFontSize</code>",id:"randfontsize",level:3},{value:"<code>randProgrammingLanguage</code>",id:"randprogramminglanguage",level:3}],c={toc:p};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code"},"Code"),(0,a.kt)("h3",{id:"randcodesnippet"},(0,a.kt)("inlineCode",{parentName:"h3"},"randCodeSnippet")),(0,a.kt)("p",null,"Generate a random code snippet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCodeSnippet } from '@ngneat/falso';\n\nrandCodeSnippet()\nrandCodeSnippet({ length: 10 })\nrandCodeSnippet({ lang: 'html' }) // default is 'javascript'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCodeSnippet()}/>;\n}\n")),(0,a.kt)("h3",{id:"randfontfamily"},(0,a.kt)("inlineCode",{parentName:"h3"},"randFontFamily")),(0,a.kt)("p",null,"Generate a random font family."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFontFamily } from '@ngneat/falso';\n\nrandFontFamily()\nrandFontFamily({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFontFamily()}/>;\n}\n")),(0,a.kt)("h3",{id:"randfontsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"randFontSize")),(0,a.kt)("p",null,"Generate a random font size."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFontSize } from '@ngneat/falso';\n\nrandFontSize()\nrandFontSize({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFontSize()}/>;\n}\n")),(0,a.kt)("h3",{id:"randprogramminglanguage"},(0,a.kt)("inlineCode",{parentName:"h3"},"randProgrammingLanguage")),(0,a.kt)("p",null,"Generate a random programming language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProgrammingLanguage } from '@ngneat/falso';\n\nrandProgrammingLanguage()\nrandProgrammingLanguage({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProgrammingLanguage()}/>;\n}\n")))}s.isMDXComponent=!0}}]);