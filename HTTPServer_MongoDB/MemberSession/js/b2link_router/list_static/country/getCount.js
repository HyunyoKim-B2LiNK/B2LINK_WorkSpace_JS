//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/getCount.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getCount
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - list_static/country/getCount():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "country$getCount" );

	global.TtwLog.log( "- [ E ] - list_static/country/getCount():void----------" );
});