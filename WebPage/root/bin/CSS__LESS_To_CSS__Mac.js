function lessToCSS(t,a){for(var e,o,s,r=f0(t,".less"),p=0,S=r.length;S>p;++p){s=r[p],e=s.replace(".less",""),o=e+".css",path1=t+s,path2=t+o,path3=t+"tmp__"+s;var l=f2(path1);f1(path3,sLESSImport+"\n\n"+l);try{var h=pathRoot+"node_modules/less/bin/lessc "+path3+" > "+path2;STtwUtilCP.sExec(h),fs.unlinkSync(path3);var i=f2(path2).toString("utf8");f1(a+o,i)}catch(n){rError.push(n)}}}function getDIRAndRun(t){global.TtwLog.timeStamp("- [ S ] - "+t),lessToCSS(t,t),global.TtwLog.timeStamp("- [ E ] - "+t);for(var a=f3(t),e=0,o=a.length;o>e;++e)getDIRAndRun(t+a[e]+"/")}var fileNm="CSS__LESS_To_CSS.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var g=global,pathRoot="/Users/chanmi/Documents/WorkSpace/HTTPServer/__root/",fs=require("fs"),path1,path2,path3,rError=[],f0=STtwUtilFsReadStream.getList_File_Extension,f1=STtwUtilFsWriteStream.writeFile,f2=STtwUtilFsReadStream.getFile,f3=STtwUtilFsReadStream.getList_Directory,path0=pathRoot+"less/",path4=pathRoot+"css/",sLESSImport=f2(path0+"_const_variable.less.import.txt").toString("utf8");lessToCSS(path0,path4);var path0=pathRoot+"less_ui/",path4=pathRoot+"css_ui/";lessToCSS(path0,path4),getDIRAndRun(pathRoot+"ui/");try{STtwUtilCP.sExec(pathRoot+"ui/createJSON__CSS.sh.command")}catch(er){}global.process.exit(),console;