'use strict';!function(require,directRequire){function a(){nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/index.html')}function b(a){const b=global.contentWindow.document.activeElement;if('WEBVIEW'===b.tagName)'persist:editor'===b.getAttribute('partition')?c.sendMessage(A,B(a)):b.executeScript({code:`document.execCommand('${a}')`});else{var d;let b=z().window.mainWindow;if(b===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER){let a=global.windowMap.get('WEB_DEBUGGER');d=a&&a.window.document}else if(b===e.MAIN_WINDOW_TYPE.DEV){let a=global.windowMap.get('MAIN');d=a&&a.window.document}else d=global.contentWindow.document;d&&d.execCommand(a)}}const c=require('./ff946754202ecf377034d29daac7c8d9.js'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),h=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),i=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),j=require('./6ff091369f442a4678a2ed4a1f758495.js'),k=require('./a8c87029da0fa06e986298d447ab0fe2.js'),l=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),m=require('./fc137838572a83604db39acff8e909e0.js'),n=require('./e98c60a262d8d98e69e574a9d12a21df.js'),o=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),p=require('./db2217eb4cff896bdcbc50abe005058f.js'),q=require('./f171257bbcaef547a3cf27266ccb0db2.js'),r=require('./common/locales/index.js'),s=require('./15ba1827c7f6564a45df6bd44da3a977.js'),t=require('./7762da1c646ee434a13c84e0db9e8308.js'),u=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),v=require('./eadce02c750c875a10680bcfedadec88.js'),w=require('./c4190a2430506f3602ca550e1e75d620.js'),x=require('./84b183688a46c9e2626d3e6f83365e13.js'),y=d.dispatch.bind(d),z=d.getState.bind(d),A='EDITOR',B=(a)=>JSON.stringify({type:'COMMAND',command:a});module.exports={about:function(){nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')},checkUpdate:async function(){await t.cleanApplicationCache();const a=await u.refresh();t.checkNeedUpdate(a)?y(h.showError(r.config.APP_NEED_UPDATE.format(a.last_ide))):y(h.showConfirmPopup({id:r.config.APP_NEED_NOT_UPDATE,title:r.config.APP_NEED_NOT_UPDATE,showCancel:!1}))},helpAndFeedback:function(){a()},switchAccount:function(){y(i.loginExpired())},inspectApp:function(){chrome.developerPrivate.openDevTools({renderViewId:-1,renderProcessId:-1,extensionId:chrome.runtime.id})},inspectEditor:function(){for(const[a,b]of global.windowMap){const a=b.window.document.querySelector('webview[partition="persist:editor"]');a&&a.showDevTools(!0)}},Doc:a,BBS:async function(a,b=e.IDE_SCENE.MENU_BAR){try{const{resp:c,body:d}=await s({url:`${q.getBbsTicket}?idescene=${b}`,needToken:1});let e=d.open_ticket;e&&(a?nw.Shell.openExternal(`${a}&devcode=${e}`):nw.Shell.openExternal(`https://developers.weixin.qq.com/welogin?devcode=${e}`))}catch(a){nw.Shell.openExternal('https://developers.weixin.qq.com')}},exit:function(){x.quit()},newFile:function(){c.sendMessage(A,B('newFile'))},save:function(){c.sendMessage(A,B('save'))},saveAll:function(){c.sendMessage(A,B('saveAll'))},closeFile:function(){c.sendMessage(A,B('closeFile'))},newProject:function(){const a=z();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=p.get(e.WINDOW_REGISTRY.CREATE_PROJECT);b?b.focus():a.window.popup.createProject&&a.window.popup.createProject.show?(y(l.createProjectClose()),y(l.createProjectOpen())):y(l.createProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.SELECT_PROJECT)y(l.createProjectRequest());else;},viewProjects:function(){const a=z();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=p.get(e.WINDOW_REGISTRY.SELECT_PROJECT);b?b.focus():a.window.popup.selectProject&&a.window.popup.selectProject.show?(y(l.selectProjectClose()),y(l.selectProjectOpen())):y(l.selectProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.ENTRANCE)y(l.selectProjectRequest());else;},openProject:function(a){const b=z().project.current;if(b&&b.projectid===a)return;let c=a.split('_')[1];c=c&&decodeURIComponent(c)||'',y(h.setConfirmInfo({show:!0,title:r.config.CONFIRM_OPEN_IN_THIS_WINDOW_TITLE,content:r.config.CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT.format(c),callback:async(b)=>{if(b)try{y(h.setConfirmInfo({show:!1})),y(l.closeProject()),setTimeout(()=>{y(l.openProject(a))},50)}catch(a){}}}))},closeProject:function(){y(l.closeProject())},openAppearanceSettings:function(){y(n.openIDESettings('appearance'))},openEditSettings:function(){y(n.openIDESettings('edit'))},openProxySettings:function(){y(n.openIDESettings('proxy'))},openNotificationSettings:function(){y(n.openIDESettings('notification'))},openProjectSettings:function(){y(m.toggleClickKey(v.PROJECTINFO)),y(h.setProjectInfo({selected:'setting'}))},gotoFile:function(){c.sendMessage(A,B('gotoFile'))},gotoRecentFile:function(){c.sendMessage(A,B('gotoRencentFile'))},gotoPreviousEditor:function(){c.sendMessage(A,B('gotoPreviousEditor'))},gotoNextEditor:function(){c.sendMessage(A,B('gotoNextEditor'))},rebuild:function(){y(o.compile(e.COMPILE_ORIGIN.SHORT_CUT))},customRebuild:function(a){y(l.selectCompileCondiction(a)),y(o.compile(e.COMPILE_ORIGIN.SHORT_CUT))},openBuildSettings:function(){},toggleForegroundBackgroundStatus:function(){y(o.toggleBackground())},clearFileCache:function(){m.cleanFileCache()(y)},clearAuthCache:function(){m.clearAuth()(y)},clearStorageCache:function(){m.cleanStorageCache()(y)},preview:function(){y(m.togglePreviewCode())},upload:function(){y(m.toggleClickKey(v.NONE)),y(h.setUploadInfo({show:!0}))},customAnalysis:function(){y(j.openCustomAnalysis())},autoTest:function(){y(j.openMobileTest())},openProjectDetailInformation:function(){y(m.toggleClickKey(v.PROJECTINFO))},toggleFileTree:function(){c.sendMessage(A,B('toggleFileTree'))},focusDebugWindow:function(){},toggleSimulatorWindow:function(){y(k.toggleSimulatorWindow())},moveSimulatorLeft:function(){y(k.setSimulator({position:'left'}))},moveSimulatorRight:function(){y(k.setSimulator({position:'right'}))},toggleEditorWindow:function(){y(k.toggleEditorWindow())},undo:function(){b('undo')},redo:function(){b('redo')},copy:function(){b('copy')},cut:function(){b('cut')},paste:function(){b('paste')},unindent:function(){c.sendMessage(A,B('unindent'))},indent:function(){c.sendMessage(A,B('indent'))},format:function(){c.sendMessage(A,B('format'))},moveLineUp:function(){c.sendMessage(A,B('moveLinesUp'))},moveLineDown:function(){c.sendMessage(A,B('moveLinesDown'))},copyLineUp:function(){c.sendMessage(A,B('copyLinesUp'))},copyLineDown:function(){c.sendMessage(A,B('copyLinesDown'))},find:function(){c.sendMessage(A,B('find'))},findInFiles:function(){c.sendMessage(A,B('findInFiles'))},replace:function(){c.sendMessage(A,B('replace'))},toggleDebugWindow:function(){y(k.toggleDebugWindow())},createCustomCompile:function(a){y(k.setCustomCompile({show:a}))},switchToMiniProgramDev:function(){z().window.mainWindow===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER&&y(k.setMainWindow(e.MAIN_WINDOW_TYPE.SELECT_PROJECT))},switchToWebDev:function(){z().window.mainWindow===e.MAIN_WINDOW_TYPE.DEV&&(y(l.closeProject()),y(k.setMainWindow(e.MAIN_WINDOW_TYPE.WEB_DEBUGGER)))},back:function(){y(w.setActions('back'))},forward:function(){y(w.setActions('forward'))},focusAddress:function(){y(w.setActions('focusAddress'))},refresh:function(){y(w.setActions('reload'))},selectAll:function(){b('selectAll')},jumpQCloudPage:async function(a){try{const{body:b}=await s({url:q.gettmpcode,needToken:1,needAppID:1});a=0<a.indexOf('?')?`${a}&tmpcode=${b.tmp_code}`:`${a}?tmpcode=${b.tmp_code}`,nw.Shell.openExternal(a)}catch(b){nw.Shell.openExternal(a)}},toggleToolbar:function(){y(k.toggleToolbar())}}}(require('lazyload'),require);