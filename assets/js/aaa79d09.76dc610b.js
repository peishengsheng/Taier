"use strict";(self.webpackChunktaier_website=self.webpackChunktaier_website||[]).push([[19],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=u(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1982:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Flink-standalone",sidebar_label:"Flink-standalone"},p=void 0,u={unversionedId:"functions/component/flink-standalone",id:"functions/component/flink-standalone",title:"Flink-standalone",description:"\u542f\u52a8Flink Standalone\u73af\u5883",source:"@site/docs/functions/component/flink-standalone.md",sourceDirName:"functions/component",slug:"/functions/component/flink-standalone",permalink:"/Taier/docs/functions/component/flink-standalone",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/component/flink-standalone.md",tags:[],version:"current",frontMatter:{title:"Flink-standalone",sidebar_label:"Flink-standalone"},sidebar:"docs",previous:{title:"Flink",permalink:"/Taier/docs/functions/component/flink"},next:{title:"Spark",permalink:"/Taier/docs/functions/component/spark"}},d=[{value:"\u542f\u52a8Flink Standalone\u73af\u5883",id:"\u542f\u52a8flink-standalone\u73af\u5883",children:[],level:2},{value:"Standalone \u63a7\u5236\u53f0\u53c2\u6570",id:"standalone-\u63a7\u5236\u53f0\u53c2\u6570",children:[],level:2},{value:"\u65b0\u589e\u96c6\u7fa4",id:"\u65b0\u589e\u96c6\u7fa4",children:[],level:2},{value:"\u7ed1\u5b9a\u96c6\u7fa4",id:"\u7ed1\u5b9a\u96c6\u7fa4",children:[],level:2}],m={toc:d};function k(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u542f\u52a8flink-standalone\u73af\u5883"},"\u542f\u52a8Flink Standalone\u73af\u5883"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1\u3001\u4e0b\u8f7d flink")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"flink\u5b98\u7f51\u4e0b\u8f7d ",(0,l.kt)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"release 1.12.7"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2\u3001chunjun\u7684\u63d2\u4ef6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u62c9\u53d6\u6700\u65b0\u7684chunjun ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/chunjun"},"master")," \u7248\u672c\u9879\u76ee\uff0c\u6253\u5305 mvn clean package -DskipTests, \u5c06\u751f\u6210\u7684chunjun-dist \u62f7\u8d1d\u81f3 $FLINK_HOME/lib")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"chunjun \u6709\u4e9b\u4f9d\u8d56\u5305\u4f9d\u8d56\u662fprovided\uff0c\u9700\u8981\u5c06\u7f3a\u7701\u7684jar\u653e\u5230$FLINK_HOME/lib\n\u4f8b\u5982\uff1a\u5728chunjun-core\u6700\u65b0\u7248\u672c\u4e2d\u5c06logback\u7684\u4f9d\u8d56\u6539\u4e3a\u4e86provided,  \u9700\u8981\u5c06\u4ee5\u4e0blogback\u5305\u653e\u5230$FLINK_HOME/lib"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"logback-core-1.2.11.jar\nlogback-classic-1.2.11.jar")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\u3001flink1.12 standalone\u670d\u52a1\u53c2\u6570"),"\n\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u7c7b\u52a0\u8f7d\u914d\u7f6e\nclassloader.resolve-order: parent-first\nclassloader.check-leaked-classloader: false\n\n# \u9ad8\u53ef\u7528\u914d\u7f6e(\u5355\u673a None)\nhigh-availability: zookeeper\nhigh-availability.zookeeper.quorum: kudu1:2181,kudu2:2181,kudu3:2181\nhigh-availability.zookeeper.path.root: /flink112\nhigh-availability.storageDir: hdfs://ns1/dtInsight/flink112/ha\nhigh-availability.cluster-id: /standalone_ha\n\n# \u6307\u6807\u914d\u7f6e\nmetrics.reporter.promgateway.class: org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter\nmetrics.reporter.promgateway.host: 172.16.23.25\nmetrics.reporter.promgateway.port: 9091\nmetrics.reporter.promgateway.jobName: flink112\nmetrics.reporter.promgateway.randomJobNameSuffix: true\nmetrics.reporter.promgateway.deleteOnShutdown: false\n")),(0,l.kt)("h2",{id:"standalone-\u63a7\u5236\u53f0\u53c2\u6570"},"Standalone \u63a7\u5236\u53f0\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b * \u4e3a\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clusterMode"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u90e8\u7f72\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"standalone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"flinkLibDir"),(0,l.kt)("td",{parentName:"tr",align:null},"flink libs\u7684\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/flink112_lib")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun \u63d2\u4ef6\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/chunjun/chunjun-dist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteChunjunDistDir"),(0,l.kt)("td",{parentName:"tr",align:null},"chunjun \u63d2\u4ef6\u8fdc\u7aef\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"/data/chunjun/chunjun-dist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pluginLoadMode"),(0,l.kt)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u6587\u4ef6\u7684\u65b9\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"classpath")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.rpc.address"),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager rpc\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager.rpc.port"),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager rpc\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rest.port"),(0,l.kt)("td",{parentName:"tr",align:null},"ui\u7aef\u53e3\u53f7"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8\u53ef\u7528\u670d\u52a1\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"NONE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.quorum"),(0,l.kt)("td",{parentName:"tr",align:null},"zookeeper\u96c6\u7fa4\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.zookeeper.path.root"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u5b58\u50a8\u72b6\u6001\u5728zookeeper\u7684\u6839\u8282\u70b9\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.storageDir"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u9ad8\u53ef\u7528\u6a21\u5f0f\u4e0b\u5b58\u50a8\u5143\u6570\u636e\u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84(URI)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"high-availability.cluster-id"),(0,l.kt)("td",{parentName:"tr",align:null},"flink\u96c6\u7fa4\u7684id\uff0c \u7528\u4e8e\u533a\u5206\u591a\u4e2aflink\u96c6\u7fa4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusHost"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheusPort"),(0,l.kt)("td",{parentName:"tr",align:null},"prometheus\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state.backend"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u540e\u7aef"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"jobmanager")))),(0,l.kt)("h2",{id:"\u65b0\u589e\u96c6\u7fa4"},"\u65b0\u589e\u96c6\u7fa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u63a7\u5236\u53f0 > 2. \u591a\u96c6\u7fa4\u7ba1\u7406 > 3. \u65b0\u589e\u96c6\u7fa4",(0,l.kt)("br",{parentName:"li"}),"\u914d\u7f6e\u96c6\u7fa4\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/Taier/docs/functions/multi-cluster"},"\u96c6\u7fa4\u914d\u7f6e"),(0,l.kt)("br",{parentName:"li"}),"\u914d\u7f6e\u7ec4\u4ef6\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/Taier/docs/functions/component/sftp"},"\u7ec4\u4ef6\u914d\u7f6e"))),(0,l.kt)("h2",{id:"\u7ed1\u5b9a\u96c6\u7fa4"},"\u7ed1\u5b9a\u96c6\u7fa4"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a7\u5236\u53f0>\u8d44\u6e90\u7ba1\u7406>\u7ed1\u5b9a\u65b0\u79df\u6237 \u4f1a\u521d\u59cb\u5316\u76f8\u5173\u76ee\u5f55\u3001schema\u3001\u9ed8\u8ba4\u6570\u636e\u6e90\u4fe1\u606f")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"bing-tenant",src:n(923).Z})))}k.isMDXComponent=!0},923:function(t,e,n){e.Z=n.p+"assets/images/bind-tenant-c482f049b6d30aca5f9dcb5d7ec197f3.png"}}]);