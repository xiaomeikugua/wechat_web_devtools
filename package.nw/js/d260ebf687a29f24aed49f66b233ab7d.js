'use strict';!function(require,directRequire){const a=require('./common/locales/index.js'),b=require('./949d8235c744ced2a80121e4dba34c28.js'),c=require('./551bb965e1f344281d555a429cd2140c.js'),d=require('./162bf2ee28b76d3b3d95b685cede4146.js'),e=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix;module.exports=async function(e,f){let g=`${f}.json`,h=await d(e),i=h.exists(g);if(!i)return{};let j=h.getFile(g);try{j=JSON.parse(j)}catch(c){let d=new Error(`${a.config.JSON_PARSE_ERROR.format(`${f}.json`)}  ${c}`);throw d.path=f,d.code=b.PAGES_JSON_PARSE_ERR,d}let k=await c(e);return k&&k.extPages&&k.extPages[f]&&(j=Object.assign({},j,k.extPages[f])),j}}(require('lazyload'),require);