//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/country/getAllList
//*/
(function( req, res ){
	console.log( "- [ S ] - list_static/country/getAllList():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	//use q;
	//...Custom parameter process;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static", "country$getAllList()" );

	console.log( "- [ E ] - list_static/country/getAllList():void----------" );
});
