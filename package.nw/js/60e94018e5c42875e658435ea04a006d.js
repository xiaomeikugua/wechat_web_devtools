'use strict';!function(require,directRequire){const a=require('path'),b=require('./d62fc37d7aa6416d5dcc240ba94175cd.js');class c{constructor(b,c){this.projectPath=b.dirPath,this.srcPath=c.replace(/\\/g,'/')||this.projectPath,this.relativePath=`${a.posix.relative(this.projectPath,this.srcPath)}`,this.relativePath&&(this.relativePath+='/'),this.watcher=b,this._handles=[]}getAllFile(){return this.watcher.getAllFile(this.relativePath)}getAllWXMLFiles(){return this.watcher.getFilesByExtName('.wxml',this.relativePath)}getAllWXSFiles(){return this.watcher.getFilesByExtName('.wxs',this.relativePath)}getAllJSFiles(){return this.watcher.getFilesByExtName('.js',this.relativePath)}getAllWXSSFiles(){return this.watcher.getFilesByExtName('.wxss',this.relativePath)}getAllFileInfo(){return this.watcher.getAllFileInfo(this.relativePath)}exists(b){return this.watcher.exists(a.posix.join(this.relativePath,b))}getFile(b,c='utf8'){return this.watcher.getFile(a.posix.join(this.relativePath,b),c)}watch(a){this._handles.push(a),this._lazyWatch()}unWatch(a){this._handles=this._handles.filter((b)=>{return b!=a})}_lazyWatch(){this._lazyWatched||(this.watcher.on('all',(b,c,d)=>{0==c.indexOf(this.srcPath)&&this._handles.forEach((e)=>{e(b,a.posix.relative(this.srcPath,c),d)})}),this._lazyWatched=!0)}}var d={};global.projectFileUtils=d,module.exports=async function(a,e){if(!d[e]){let f=await b(a);d[e]=new c(f,e)}return d[e]}}(require('lazyload'),require);