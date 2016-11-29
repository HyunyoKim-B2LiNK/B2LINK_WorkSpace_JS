//----------------------------------------------------------------------------------------------------;
var fileNm = "database-insert--Insert_Data.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST_TtwApplicationCommon.js" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;

//----------------------------------------------------------------------------------------------------;

//g.PATH_BIN = "E:/WorkSpace_B2LINK/DataBase_Schema/B2LINK/bin/";//Folder;
g.PATH_BIN_ADMIN = "execute_mongoclient_js__admin ";//BAT File;

g.PASSWORD_R = "_r_qlxnfldzmdkfEjqmffb!";
g.PASSWORD_RW = "_rw_qlxnfldzmdkfEjqmffb!";

//----------------------------------------------------------------------------------------------------;

g.execute_mongoclient = function( dbNm, filePath )
{
	//////////console.log( "-- [ S ] - g.execute_mongoclient():void----------" );
	var sExec = g.PATH_BIN_ADMIN + filePath + " > " + filePath + ".result";console.log( "sExec : " + sExec );
	var r = STtwUtilCP.sExec( sExec );//console.log( "r : " + r );
	var idError = r.indexOf( "error" );//console.log( "idError : " + idError );

	if( idError > -1 )
	{
		console.error( r );
		STtwUtilFsWriteStream.writeFile( filePath + ".errorResult", r );
	}
	//////////console.log( "-- [ E ] - g.execute_mongoclient():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

var path0 = "../database-insert/";
var path1;
var path2;
var path3;
var path4;

var f0 = STtwUtilFsReadStream.getList_File_Extension;
var f1 = STtwUtilFsWriteStream.writeFile;
var f2 = STtwUtilFsReadStream.getFile;

var aCPath0 = STtwUtilFsReadStream.getList_Directory( path0 );
f1( path0 + "__list.json", JSON.stringify( aCPath0, null, "\t" ) );
var aCPath1;
var a;

var io;
var i=0, iLen=aCPath0.length;
for( ; i<iLen; ++i )
{
	io = aCPath0[ i ];
	console.log( "----------[ S ] - DataBase Name : " + i + " - " + io + "----------" );

	//g.fileSave_dbjs_createDBAndUser( io, path0 );
	//g.fileSave_dbjs_removeAllProcesure( io, path0 );

	path1 = path0 + io + "/";
	console.log( "path1 : " + path1 );

	//g.execute_mongoclient__CreateDBAndUser( io, path1 );
	//g.execute_mongoclient__DB_JS_Remove( io, path1 );

	aCPath1 = STtwUtilFsReadStream.getList_Directory( path1 );
	//aCPath1.unshift( aCPath1.pop() );

	//*/
	var jo;
	var j=0, jLen=aCPath1.length;
	for( ; j<jLen; ++j )
	{
		jo = aCPath1[ j ];
		console.log( "--------------------[ S ] - Collection Name : " + j + " - " + jo + "--------------------" );
		path2 = path1 + jo + "/";
		console.log( "path2 : " + path2 );

		try{ a = f0( path2, ".js" ); }
		catch( er )
		{
			console.error( "er : " + er );
			continue;
		}

		var ko;
		var k=0, kLen=a.length;console.log( "Procesure Length : " + kLen );
		for( ; k<kLen; ++k )
		{
			ko = a[ k ];
			console.log( "------------------------------Procedure Name : " + k + " - " + ko + "------------------------------" );
			//console.log( "------------------------------[ S ] - Procedure Name : " + ko + "------------------------------" );
			//console.log( "------------------------------[ E ] - Procedure Name : " + ko + "------------------------------" );
			path3 = path2 + ko;
			//var sJS = f2( path3 ).toString( "utf8" );

			//var nExt_ko = ko.replace( ".js", "" );
			//var sJS = g.getScript_DB( io, jo, nExt_ko, sJS );

			//path4 = path3 + ".dbs";
			//g.fileSave__dbs( path4, sJS );
			//g.execute_mongoclient__AddProcedure( io, ( path4 ) );
			try
			{
				g.execute_mongoclient( io, path3 );
			}
			catch( er )
			{
				//console.error( er );
				//console.log( er );
				//console.logObjectInformation( er );
				//f1( path3 + ".errorResult", er );
			}
		}
		a.length = 0;
		console.log( "--------------------[ E ] - Collection Name : " + j + " - " + jo + "--------------------" );
		console.log( "" );console.log( "" );console.log( "" );
	}
	aCPath1.length = 0;
	console.log( "----------[ S ] - DataBase Name : " + i + " - " + io + "----------" );
	console.log( "" );console.log( "" );console.log( "" );
	//*/
}
aCPath0.length = 0;

//----------------------------------------------------------------------------------------------------;

global.process.exit();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;