"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[963],{5318:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),i=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(r),u=t,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,l(l({ref:n},s),{},{components:r})):a.createElement(f,l({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[d]="string"==typeof e?e:t,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9334:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(5773),t=(r(7378),r(5318));const o={slug:"/company"},l="Company",c={unversionedId:"auto-generated/company",id:"auto-generated/company",title:"Company",description:"`randBrand`",source:"@site/docs/auto-generated/company.mdx",sourceDirName:"auto-generated",slug:"/company",permalink:"/falso/docs/company",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/company"},sidebar:"falso",previous:{title:"Commerce",permalink:"/falso/docs/commerce"},next:{title:"Database",permalink:"/falso/docs/database"}},p={},i=[{value:"<code>randBrand</code>",id:"randbrand",level:3},{value:"<code>randCompanyName</code>",id:"randcompanyname",level:3},{value:"<code>randSubscriptionPlan</code>",id:"randsubscriptionplan",level:3}],s={toc:i};function d(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"company"},"Company"),(0,t.kt)("h3",{id:"randbrand"},(0,t.kt)("inlineCode",{parentName:"h3"},"randBrand")),(0,t.kt)("p",null,"Generate a random brand."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBrand } from '@ngneat/falso';\n\nrandBrand()\nrandBrand({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBrand()}/>;\n}\n")),(0,t.kt)("h3",{id:"randcompanyname"},(0,t.kt)("inlineCode",{parentName:"h3"},"randCompanyName")),(0,t.kt)("p",null,"Generate a random company name."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCompanyName } from '@ngneat/falso';\n\nrandCompanyName()\nrandCompanyName({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCompanyName()}/>;\n}\n")),(0,t.kt)("h3",{id:"randsubscriptionplan"},(0,t.kt)("inlineCode",{parentName:"h3"},"randSubscriptionPlan")),(0,t.kt)("p",null,"Generate a random subscription plan."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSubscriptionPlan } from '@ngneat/falso';\n\nrandSubscriptionPlan()\nrandSubscriptionPlan({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSubscriptionPlan()}/>;\n}\n")))}d.isMDXComponent=!0}}]);