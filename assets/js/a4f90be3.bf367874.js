"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[171],{5318:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>g});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return r?t.createElement(g,s(s({ref:n},d),{},{components:r})):t.createElement(g,s({ref:n},d))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7498:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(5773),a=(r(7378),r(5318));const o={slug:"/aws"},s="Aws",l={unversionedId:"auto-generated/aws",id:"auto-generated/aws",title:"Aws",description:"randArn",source:"@site/docs/auto-generated/aws.mdx",sourceDirName:"auto-generated",slug:"/aws",permalink:"/falso/docs/aws",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/aws"},sidebar:"falso",previous:{title:"Animals",permalink:"/falso/docs/animals"},next:{title:"Code",permalink:"/falso/docs/code"}},i={},c=[{value:"<code>randArn</code>",id:"randarn",level:3},{value:"<code>randAwsRegion</code>",id:"randawsregion",level:3},{value:"<code>randAwsRequestId</code>",id:"randawsrequestid",level:3},{value:"<code>randAwsService</code>",id:"randawsservice",level:3}],d={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws"},"Aws"),(0,a.kt)("h3",{id:"randarn"},(0,a.kt)("inlineCode",{parentName:"h3"},"randArn")),(0,a.kt)("p",null,"Generate a random ARN."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randArn } from '@ngneat/falso';\n\nrandArn()\nrandArn({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randArn()} />;\n}\n")),(0,a.kt)("h3",{id:"randawsregion"},(0,a.kt)("inlineCode",{parentName:"h3"},"randAwsRegion")),(0,a.kt)("p",null,"Generate a random AWS region."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAwsRegion } from '@ngneat/falso';\n\nrandAwsRegion()\nrandAwsRegion({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAwsRegion()} />;\n}\n")),(0,a.kt)("h3",{id:"randawsrequestid"},(0,a.kt)("inlineCode",{parentName:"h3"},"randAwsRequestId")),(0,a.kt)("p",null,"Generate a random AWS request id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAwsRequestId } from '@ngneat/falso';\n\nrandAwsRequestId()\nrandAwsRequestId({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAwsRequestId()} />;\n}\n")),(0,a.kt)("h3",{id:"randawsservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"randAwsService")),(0,a.kt)("p",null,"Generate a random AWS service name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAwsService } from '@ngneat/falso';\n\nrandAwsService()\nrandAwsService({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAwsService()} />;\n}\n")))}u.isMDXComponent=!0}}]);