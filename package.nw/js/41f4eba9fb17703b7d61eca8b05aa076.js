'use strict';!function(require,directRequire){const a=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=a.getState.bind(a),d=()=>{try{return!!c().project.current}catch(a){return!1}},e=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.WEB_DEBUGGER}catch(a){return!1}},f=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.DEV}catch(a){return!1}},g=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.LOGIN}catch(a){return!1}},h=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.SELECT_PROJECT}catch(a){return!1}},i=()=>{try{return c().window.simulator.show}catch(a){return!1}},j=()=>{try{return c().window.editor.show}catch(a){return!1}},k=()=>{try{return c().window.toolbar.show}catch(a){return!1}},l=()=>{try{return c().window.editor.fileTreeShow}catch(a){return!1}},m=()=>{try{return c().window.debug.show}catch(a){return!1}},n=()=>{try{return'left'===c().window.simulator.position}catch(a){return!1}},o=()=>{try{return c().window.focus===b.WINDOW_FOCUS.DEVTOOLS}catch(a){return!1}},p=()=>{try{return c().window.focus===b.WINDOW_FOCUS.EDITOR}catch(a){return!1}},q=()=>{try{return c().project.current.appid===b.TOURIST_APPID}catch(a){return!1}},r=()=>{try{return c().project.current.attr.userbanded}catch(a){return!0}},s=(a)=>{return eval(a.replace(/userbanded|isEditorFocused|isMiniProgramDev|isWebDev|inMainWindow|inLoginWindow|isSimulatorVisible|isEditorVisible|isFileTreeVisible|isDevtoolsVisible|isToolbarVisible|isSimulatorLeft|isDevtoolsFocused|isTourist|inSelectProjectWindow/g,(a)=>t[a]&&t[a]()))},t={isMiniProgramDev:d,isWebDev:e,inMainWindow:f,inLoginWindow:g,inSelectProjectWindow:h,isSimulatorVisible:i,isEditorVisible:j,isFileTreeVisible:l,isDevtoolsVisible:m,isToolbarVisible:k,isSimulatorLeft:n,isDevtoolsFocused:o,isTourist:q,userbanded:r,isEditorFocused:p};module.exports={predicates:t,evaluate:s}}(require('lazyload'),require);