//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/postalcode_cn/getCount.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/postalcode_cn/getCount
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - list_static/postalcode_cn/getCount():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "postalcode_cn$getCount" );

	global.Rh2Log.log( "- [ E ] - list_static/postalcode_cn/getCount():void----------" );
});