function convert__TJSONToJSON(t){global.TtwLog.timeStamp("-- [ S ] - convert__TJSONToJSON():{String}----------");var e=convert__TJSONToJSON,o=t.indexOf(e._k0),a=t.indexOf(e._k1);if(-1==o)return t;var l=t.slice(o+9,a),S=path_schema_include+l;global.TtwLog.timeStamp("convert_TJSONToJSON path : "+S);var _=e._k0+l+e._k1;global.TtwLog.timeStamp("문자열 : "+_);var r=f3(S).toString("utf8");return t=t.replace(_,r),global.TtwLog.timeStamp("-- [ S ] - convert__TJSONToJSON():{String}----------"),convert__TJSONToJSON(t)}function convert__TJSONPathToJSONPath(t){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("-- [ S ] - convert__TJSONPathToJSONPath():void----------"),global.TtwLog.timeStamp("path : "+t),convert__TJSONFolders(t);for(var e,o=f1(t,".tjson"),a=0,l=o.length;l>a;++a){e=o[a],global.TtwLog.timeStamp("\n");var S=t+e;global.TtwLog.timeStamp("convert__TJSONFilesToJSON path_tjson : "+S);var _=S.replace(path_schema_template,path_schema);_=_.replace(".tjson",".json"),global.TtwLog.timeStamp("convert__TJSONFilesToJSON path_json : "+_);var r=f3(S).toString("utf8");r=convert__TJSONToJSON(r),f4(_,r),global.TtwLog.timeStamp("[ Create File ] - "+_+" - JSON 미검증"),r=r.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g,"");var i=JSON.parse(r);f4(_,JSON.stringify(i,null,"	")),global.TtwLog.timeStamp("[ Create File ] - "+_+" - JSON 검증")}global.TtwLog.timeStamp("-- [ E ] - convert__TJSONPathToJSONPath():void----------")}function convert__TJSONFolders(t){global.TtwLog.timeStamp("-- [ S ] - convert__TJSONFolders():void----------");for(var e,o=f0(t),a=0,l=o.length;l>a;++a){e=o[a];var S=t+e+"/";convert__TJSONPathToJSONPath(S)}global.TtwLog.timeStamp("-- [ E ] - convert__TJSONFolders():void----------")}var fileNm="Schema__createJSON__FromTemplate.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var path_root="../database/",path_schema=path_root+"_schema/",path_schema_include=path_root+"_schema_include/",path_schema_template=path_root+"_schema_template/",f0=SUtilFsReadStream.getList_Directory,f1=SUtilFsReadStream.getList_File_Extension,f2=SUtilFsReadStream.checkWhetherFile,f3=SUtilFsReadStream.getFile,f4=SUtilFsWriteStream.writeFile_UTF8;convert__TJSONToJSON._k0="<include>",convert__TJSONToJSON._k1="</include>",convert__TJSONFolders(path_schema_template),global.process.exit(),console;