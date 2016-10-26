//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/country/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getAllList
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - list_static/country/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "country$getAllList" );

	global.TtwLog.log( "- [ E ] - list_static/country/getAllList():void----------" );
});
