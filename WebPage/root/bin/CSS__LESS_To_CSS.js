function lessToCSS(t,s){for(var a,e,r,S=f0(t,".less"),p=0,l=S.length;l>p;++p){r=S[p],a=r.replace(".less",""),e=a+".css",path1=t+r,path2=t+e,path3=t+"tmp__"+r;var i=f2(path1);f1(path3,sLESSImport+"\n\n"+i);try{var o="lessc "+path3+" > "+path2;STtwUtilCP.sExec(o),fs.unlinkSync(path3);var h=f2(path2).toString("utf8");f1(s+e,h)}catch(c){rError.push(c)}}}var fileNm="CSS__LESS_To_CSS.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var g=global,fs=require("fs"),path1,path2,path3,rError=[],f0=STtwUtilFsReadStream.getList_File_Extension,f1=STtwUtilFsWriteStream.writeFile,f2=STtwUtilFsReadStream.getFile,path0="../less/",path4="../css/",sLESSImport=f2(path0+"_const_variable.less.import.txt").toString("utf8");lessToCSS(path0,path4);var path0="../less_ui/",path4="../css_ui/";lessToCSS(path0,path4),STtwUtilCP.sExec("createJSON__CSS.bat"),global.process.exit(),console;