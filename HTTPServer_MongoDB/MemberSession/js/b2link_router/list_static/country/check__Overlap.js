//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/country/checkcountry_Overlap
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - country/check__Overlap():void----------" );

	var t = global.server;//HTTP Server;
	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.country$check__Overlap( d, q );

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB( req, res, q, "list_static" , "country$check__Overlap(" + JSON.stringify( d ) + ")");

	global.RayLog.log( "- [ E ] - country/check__Overlap():void----------" );
});
