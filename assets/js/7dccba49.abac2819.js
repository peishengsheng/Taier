"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[4457],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,k=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6382:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"\u96c6\u7fa4\u4f9d\u8d56",sidebar_label:"\u96c6\u7fa4\u4f9d\u8d56"},c="\u96c6\u7fa4\u90e8\u7f72",p={unversionedId:"quickstart/deploy/hadoop",id:"quickstart/deploy/hadoop",title:"\u96c6\u7fa4\u4f9d\u8d56",description:"spark thrift",source:"@site/docs/quickstart/deploy/hadoop.md",sourceDirName:"quickstart/deploy",slug:"/quickstart/deploy/hadoop",permalink:"/taier/docs/quickstart/deploy/hadoop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/deploy/hadoop.md",tags:[],version:"current",frontMatter:{title:"\u96c6\u7fa4\u4f9d\u8d56",sidebar_label:"\u96c6\u7fa4\u4f9d\u8d56"},sidebar:"docs",previous:{title:"\u524d\u7aef\u90e8\u7f72",permalink:"/taier/docs/quickstart/deploy/web"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/taier/docs/quickstart/deploy"}},s=[{value:"spark thrift",id:"spark-thrift",children:[],level:2},{value:"flinkx",id:"flinkx",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u96c6\u7fa4\u90e8\u7f72"},"\u96c6\u7fa4\u90e8\u7f72"),(0,o.kt)("h2",{id:"spark-thrift"},"spark thrift"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d",(0,o.kt)("inlineCode",{parentName:"li"},"spark"),"\u5b89\u88c5\u5305\uff0c\u6211\u4eec\u9009\u62e9\u7684\u662f",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/spark/spark-2.1.3/spark-2.1.3-bin-hadoop2.7.tgz"},"spark2.1.3b")),(0,o.kt)("li",{parentName:"ol"},"\u89e3\u538bspark-2.1.3-bin-hadoop2.7.tgz"),(0,o.kt)("li",{parentName:"ol"},"\u5c06core-site.xml\u3001hdfs-site.xml\u3001yarn-site.xml\u3001hive-site.xml\u62f7\u8d1d\u5230${SPARK_HOME}/conf\u76ee\u5f55\u4e0b"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8spark thriftserver:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$   cd ${SPARK_HOME}/sbin && sh start-thriftserver.sh\n")),(0,o.kt)("h2",{id:"flinkx"},"flinkx"),(0,o.kt)("p",null,"\u4f9d\u8d56",(0,o.kt)("inlineCode",{parentName:"p"},"flinkx")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/flinkx/releases/tag/1.10.5"},"1.10")," \u7248\u672c\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/flinkx/blob/master/docs/quickstart.md"},"flink\u6e90\u7801\u7f16\u8bd1")))}f.isMDXComponent=!0}}]);