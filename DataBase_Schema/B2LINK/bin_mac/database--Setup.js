var fileNm="database--Setup.js";console,require("./_$TATIC_CONST_TtwApplicationCommon.js");var g=global;g.FILE_NM__DB_SYSTEM_JS_REMOVE="_db.system.js.remove.js",g.FILE_NM__CREATE_DB_AND_USER="_create_DB_And_User",g.PATH_BIN_ADMIN="./execute_mongoclient_js__admin.sh ",g.PATH_BIN_DATABASE="./execute_mongoclient_js__database.sh ",g.PASSWORD_R="_r_qlxnfldzmdkfEjqmffb!",g.PASSWORD_RW="_rw_qlxnfldzmdkfEjqmffb!",g.execute_mongoclient__AddProcedure=function(e,t){var a='"b2link_'+e+'_rw"',o='"b2link_'+e+g.PASSWORD_RW+'"',_=g.PATH_BIN_DATABASE+io+" "+a+" "+o+" "+t+" > "+t+".result";try{var i=STtwUtilCP.sExec(_),l=i.indexOf("error");l>-1&&(global.TtwLog.error(i),STtwUtilFsWriteStream.writeFile(t+".errorResult",i))}catch(r){}},g.execute_mongoclient__CreateDBAndUser=function(e,t){global.TtwLog.timeStamp("-- [ S ] - g.execute_mongoclient__CreateDBAndUser():void----------");var a=g.FILE_NM__CREATE_DB_AND_USER+".dbjs",o=t+a,_=g.PATH_BIN_ADMIN+o+" > "+o+".result";global.TtwLog.timeStamp("sExec : "+_);try{var i=STtwUtilCP.sExec(_);global.TtwLog.timeStamp("r : "+i);var l=i.indexOf("error");l>-1&&(global.TtwLog.error(i),SUtilFsWriteStream.writeFile(o+".errorResult",i))}catch(r){}global.TtwLog.timeStamp("-- [ E ] - g.execute_mongoclient__CreateDBAndUser():void----------")},g.execute_mongoclient__DB_JS_Remove=function(e,t){global.TtwLog.timeStamp("-- [ S ] - g.execute_mongoclient__DB_JS_Remove():void----------");var a='"b2link_'+e+'_rw"',o='"b2link_'+e+g.PASSWORD_RW+'"',_=g.PATH_BIN_DATABASE+e+" "+a+" "+o+" "+t+g.FILE_NM__DB_SYSTEM_JS_REMOVE+".dbjs > "+t+g.FILE_NM__DB_SYSTEM_JS_REMOVE+".dbjs.result";try{var i=STtwUtilCP.sExec(_);global.TtwLog.timeStamp("r : "+i)}catch(l){}global.TtwLog.timeStamp("-- [ E ] - g.execute_mongoclient__DB_JS_Remove():void----------")},g.fileSave__dbs=function(e,t){STtwUtilFsWriteStream.writeFile(e,t)},g.fileSave_dbjs_createDBAndUser=function(e,t){global.TtwLog.timeStamp("-- [ S ] - g.fileSave_dbjs_createDBAndUser():void----------");var a='"b2link_'+e+'_r"',o='"b2link_'+e+'_rw"',_='"b2link_'+e+g.PASSWORD_R+'"',i='"b2link_'+e+PASSWORD_RW+'"',l='\nvar db0 = db.getSiblingDB( "'+e+'" );\ndb0.createUser({ user : '+a+", pwd : "+_+', roles : [ "dbOwner", "read" ] });\ndb0.createUser({ user : '+o+", pwd : "+i+', roles : [ "dbOwner", "readWrite" ] });';global.TtwLog.timeStamp("s : "+l),STtwUtilFsWriteStream.writeFile(t+e+"/"+g.FILE_NM__CREATE_DB_AND_USER+".dbjs",l),global.TtwLog.timeStamp("-- [ S ] - g.fileSave_dbjs_createDBAndUser():void----------")},g.fileSave_dbjs_removeAllProcesure=function(e,t){global.TtwLog.timeStamp("-- [ S ] - g.fileSave_dbjs_removeAllProcesure():void----------");var a='try{ db.getSiblingDB( "'+e+'" ).system.js.remove({}); }\ncatch( er ){ print( er ); }';STtwUtilFsWriteStream.writeFile(t+e+"/"+g.FILE_NM__DB_SYSTEM_JS_REMOVE+".dbjs",a),global.TtwLog.timeStamp("-- [ E ] - g.fileSave_dbjs_removeAllProcesure():void----------")},g.getScript_DB=function(e,t,a,o){var _='db.getSiblingDB( "'+e+'" ).addJSFunc( "';return"_common_procedure"==t||(a=t+"$"+a),_=_+a+'", '+o+" );"};var path0="../database/",path1,path2,path3,path4,f0=STtwUtilFsReadStream.getList_File_Extension,f1=STtwUtilFsWriteStream.writeFile,f2=STtwUtilFsReadStream.getFile,aCPath0=STtwUtilFsReadStream.getList_Directory(path0);f1(path0+"__list.json",JSON.stringify(aCPath0,null,"	"));for(var aCPath1,a,io,i=0,iLen=aCPath0.length;iLen>i;++i){io=aCPath0[i],global.TtwLog.timeStamp("----------[ S ] - DataBase Name : "+i+" - "+io+"----------"),g.fileSave_dbjs_createDBAndUser(io,path0),g.fileSave_dbjs_removeAllProcesure(io,path0),path1=path0+io+"/",global.TtwLog.timeStamp("path1 : "+path1),g.execute_mongoclient__CreateDBAndUser(io,path1),g.execute_mongoclient__DB_JS_Remove(io,path1),aCPath1=STtwUtilFsReadStream.getList_Directory(path1),aCPath1.unshift(aCPath1.pop());for(var jo,j=0,jLen=aCPath1.length;jLen>j;++j){jo=aCPath1[j],global.TtwLog.timeStamp("--------------------[ S ] - Collection Name : "+j+" - "+jo+"--------------------"),path2=path1+jo+"/",global.TtwLog.timeStamp("path2 : "+path2);try{a=f0(path2,".js")}catch(er){continue}var ko,k=0,kLen=a.length;for(global.TtwLog.timeStamp("Procedure Length : "+kLen);kLen>k;++k){ko=a[k],global.TtwLog.timeStamp("------------------------------Procedure Name : "+k+" - "+ko+"------------------------------"),path3=path2+ko;var sJS=f2(path3).toString("utf8"),nExt_ko=ko.replace(".js",""),sJS=g.getScript_DB(io,jo,nExt_ko,sJS);path4=path3+".dbs",g.fileSave__dbs(path4,sJS),g.execute_mongoclient__AddProcedure(io,path4)}a.length=0,global.TtwLog.timeStamp("--------------------[ E ] - Collection Name : "+j+" - "+jo+"--------------------"),global.TtwLog.timeStamp(""),global.TtwLog.timeStamp(""),global.TtwLog.timeStamp("")}aCPath1.length=0,global.TtwLog.timeStamp("----------[ S ] - DataBase Name : "+i+" - "+io+"----------"),global.TtwLog.timeStamp(""),global.TtwLog.timeStamp(""),global.TtwLog.timeStamp("")}aCPath0.length=0,global.process.exit(),console;