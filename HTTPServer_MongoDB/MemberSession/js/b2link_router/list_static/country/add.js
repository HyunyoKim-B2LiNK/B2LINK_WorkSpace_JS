//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/country/add
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - country/add():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "country$addDoc(" + JSON.stringify( q ) + ")");

	global.RayLog.log( "- [ E ] - country/add():void----------" );
});
