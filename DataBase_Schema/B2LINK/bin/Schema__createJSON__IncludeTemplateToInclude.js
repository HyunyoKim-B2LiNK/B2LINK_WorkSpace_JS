function convert__TJSONToJSON(t){var e=convert__TJSONToJSON,a=t.indexOf(e._k0),o=t.indexOf(e._k1);if(-1==a)return t;var _=t.slice(a+9,o),l=path_schema_include+_,i=e._k0+_+e._k1,r=f3(l).toString("utf8");return t=t.replace(i,r),convert__TJSONToJSON(t)}function convert__TJSONPathToJSONPath(t){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("-- [ S ] - convert__TJSONPathToJSONPath():void----------"),global.TtwLog.timeStamp("path : "+t);for(var e,a=f1(t,".tjson"),o=0,_=a.length;_>o;++o){e=a[o],global.TtwLog.timeStamp("\n");var l=t+e;global.TtwLog.timeStamp("convert__TJSONFilesToJSON path_tjson : "+l);var i=l.replace(path_schema_template,path_schema);i=i.replace(".tjson",".json"),global.TtwLog.timeStamp("convert__TJSONFilesToJSON path_json : "+i);var r=f3(l).toString("utf8");r=convert__TJSONToJSON(r),f4(i,r),global.TtwLog.timeStamp("[ Create File ] - "+i+" - JSON 미검증"),r=r.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g,"");var S=JSON.parse(r);f4(i,JSON.stringify(S,null,"	")),global.TtwLog.timeStamp("[ Create File ] - "+i+" - JSON 검증")}global.TtwLog.timeStamp("-- [ E ] - convert__TJSONPathToJSONPath():void----------")}var fileNm="Schema__createJSON__IncludeTemplateToInclude.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var path_root="../database/",path_schema=path_root+"_schema_include/",path_schema_include=path_root+"_schema_include/",path_schema_template=path_root+"_schema_include/",f0=SUtilFsReadStream.getList_Directory,f1=SUtilFsReadStream.getList_File_Extension,f2=SUtilFsReadStream.checkWhetherFile,f3=SUtilFsReadStream.getFile,f4=SUtilFsWriteStream.writeFile_UTF8;convert__TJSONToJSON._k0="<include>",convert__TJSONToJSON._k1="</include>",convert__TJSONPathToJSONPath(path_schema_template);for(var a0=f0(path_schema_template),io,i=0,iLen=a0.length;iLen>i;++i){io=a0[i];var path0=path_schema_template+io+"/";convert__TJSONPathToJSONPath(path0)}global.process.exit(),console;