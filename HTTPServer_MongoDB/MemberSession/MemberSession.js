//----------------------------------------------------------------------------------------------------;
var fileNm = "MemberSession.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );

SUtilMongoDB.mongodb = require( "mongodb" );
SUtilMongoDBMongoClient.mongodb = require( "mongodb" );

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

var g = global;





//*/
global._$TATIC_CONST_DEBUG = true;
/*/
global._$TATIC_CONST_DEBUG = false;
//*/

//----------------------------------------------------------------------------------------------------;

global.RayLog = console;

//----------------------------------------------------------------------------------------------------;

(function(){

	//----------Initlaize Server;
	var _server = new global.Lib.Ttw.CLASS.HTTPAPIServer.MongoDB({
		instanceKey : "global.Lib.Ttw.httpAPIServer_MongoDB"
		, mongodb : { host : "localhost", port : 59320 }
		, server : { host : null, port : 49320 }
	});
	global.server = _server;

	var f = _server.addRouter;

	//http://localhost:49320/member_basic/getAllList__email?a=1&b=1
	f( "/member_basic/getAllList__email", function( req, res ){
		var _server = global.server;
		var q = _server.getQueryFromURL( req.url );

		//use q;
		//...Custom parameter process;

		q.db = "member";
		q.q = "member_basic$getAllList__email()";

		_server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				console.error( q.q + " Error : " + error );
				_server.sendResponse_200_False( req, res );
				return;
			}

			//...;

			_server.sendResponse_200_String( req, res, JSON.stringify( result ) );
		});
	});

	//--------------------------------------------------;

	//var mongodb = require( "mongodb" );
	//console.logObjectInformation( mongodb, "mongodb" );
	//console.log( global.process.cwd() );
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
