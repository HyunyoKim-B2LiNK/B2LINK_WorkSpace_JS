var fileNm="createJSON__js_Package.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var g=global;global.TtwLog.timeStamp("---------- [ S ] - CREATE FILE - ..js/??/??/__list.json. ----------");var path0="../js/",f0=STtwUtilFsReadStream.getList_File_Extension,f1=STtwUtilFsWriteStream.writeFile,f2=STtwUtilFsReadStream.getFile,_fs=require("fs"),f3=function(a){try{return _fs.statSync(a)}catch(e){}return null},aCPath=STtwUtilFsReadStream.getList_Directory(path0);f1(path0+"__list.json",JSON.stringify(aCPath,null,"	"));for(var i=0,iLen=aCPath.length;iLen>i;++i){var sCPath=path0+aCPath[i]+"/",a=STtwUtilFsReadStream.getList_Directory(sCPath),sDefine=a.pop();f1(sCPath+"__define/__listPackage.json",JSON.stringify(a,null,"	")),a.unshift(sDefine),f1(sCPath+"__list.json",JSON.stringify(a,null,"	"));var aPath=a,path,packageNmC="global."+aCPath[i]+".",namespace="",j=0;for(jLen=aPath.length,j;jLen>j;++j){namespace=packageNmC+aPath[j]+".",global.TtwLog.timeStamp("namespace : "+namespace),path=sCPath+aPath[j]+"/";for(var b=f0(path,".js"),k=0,kLen=b.length;kLen>k;++k)b[k]=b[k].replace(namespace,"").replace(".js",""),global.TtwLog.timeStamp("JS File Name : "+b[k]);f1(path+"/__list.json",JSON.stringify(b,null,"	"))}}global.TtwLog.timeStamp("---------- [ E ] - CREATE FILE - ..js/??/??/__list.json. ----------"),global.TtwLog.timeStamp("---------- [ S ] - CREATE FILE - ..js/??/__define/200_define_global.??.?? ----------");for(var regExp0=/\<\!=name=\!\>/gi,regExp1=/\<\!=key=\!\>/gi,template=f2("createJS__js.namespace.__define.200_define__files.template").toString("utf8"),i=0,iLen=aCPath.length;iLen>i;++i){var sCPath=path0+aCPath[i]+"/__define/",a=JSON.parse(f2(sCPath+"__listPackage.json")),s0=template.replace(regExp0,aCPath[i]);f1(sCPath+"000_define_global."+aCPath[i]+".js",s0.replace(regExp1,"").replace("..","").replace(". "," ").replace(".;","").replace(".;",""));for(var j=0,jLen=a.length;jLen>j;++j){var s1=s0.replace(regExp1,a[j]);global.TtwLog.timeStamp("namespace : global."+aCPath[i]+"."+a[j]);var path1=sCPath+"200_define_global."+aCPath[i]+"."+a[j]+".js";f3(path1)||f1(path1,s1)}}global.TtwLog.timeStamp("---------- [ E ] - CREATE FILE - ..js/??/__define/200_define_global.??.?? ----------"),global.process.exit(),console;