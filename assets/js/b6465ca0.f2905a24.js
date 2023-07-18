"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88],{5318:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>h});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),u=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(o,".").concat(m)]||p[m]||s[m]||l;return r?t.createElement(h,c(c({ref:n},d),{},{components:r})):t.createElement(h,c({ref:n},d))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<l;u++)c[u]=r[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8897:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=r(5773),a=(r(7378),r(5318));const l={slug:"/vehicle"},c="Vehicle",i={unversionedId:"auto-generated/vehicle",id:"auto-generated/vehicle",title:"Vehicle",description:"`randVehicle`",source:"@site/docs/auto-generated/vehicle.mdx",sourceDirName:"auto-generated",slug:"/vehicle",permalink:"/falso/docs/vehicle",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/vehicle"},sidebar:"falso",previous:{title:"Util",permalink:"/falso/docs/util"}},o={},u=[{value:"<code>randVehicle</code>",id:"randvehicle",level:3},{value:"<code>randVehicleFuel</code>",id:"randvehiclefuel",level:3},{value:"<code>randVehicleManufacturer</code>",id:"randvehiclemanufacturer",level:3},{value:"<code>randVehicleModel</code>",id:"randvehiclemodel",level:3},{value:"<code>randVehicleType</code>",id:"randvehicletype",level:3}],d={toc:u};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vehicle"},"Vehicle"),(0,a.kt)("h3",{id:"randvehicle"},(0,a.kt)("inlineCode",{parentName:"h3"},"randVehicle")),(0,a.kt)("p",null,"Generate a random vehicle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVehicle } from '@ngneat/falso';\n\nrandVehicle()\nrandVehicle({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVehicle()}/>;\n}\n")),(0,a.kt)("h3",{id:"randvehiclefuel"},(0,a.kt)("inlineCode",{parentName:"h3"},"randVehicleFuel")),(0,a.kt)("p",null,"Generate a random vehicle fuel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVehicleFuel } from '@ngneat/falso';\n\nrandVehicleFuel()\nrandVehicleFuel({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVehicleFuel()}/>;\n}\n")),(0,a.kt)("h3",{id:"randvehiclemanufacturer"},(0,a.kt)("inlineCode",{parentName:"h3"},"randVehicleManufacturer")),(0,a.kt)("p",null,"Generate a random vehicle manufacturer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVehicleManufacturer } from '@ngneat/falso';\n\nrandVehicleManufacturer()\nrandVehicleManufacturer({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVehicleManufacturer()}/>;\n}\n")),(0,a.kt)("h3",{id:"randvehiclemodel"},(0,a.kt)("inlineCode",{parentName:"h3"},"randVehicleModel")),(0,a.kt)("p",null,"Generate a random vehicle model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVehicleModel } from '@ngneat/falso';\n\nrandVehicleModel()\nrandVehicleModel({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVehicleModel()}/>;\n}\n")),(0,a.kt)("h3",{id:"randvehicletype"},(0,a.kt)("inlineCode",{parentName:"h3"},"randVehicleType")),(0,a.kt)("p",null,"Generate a random vehicle type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVehicleType } from '@ngneat/falso';\n\nrandVehicleType()\nrandVehicleType({ length: 10 })\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVehicleType()}/>;\n}\n")))}p.isMDXComponent=!0}}]);