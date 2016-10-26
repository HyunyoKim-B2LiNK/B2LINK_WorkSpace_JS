//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email_detail/getAllList.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email_detail/getAllList
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - list_static/email_detail/getAllList():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fNm( req, res, q, "email_detail$getAllList" );

	global.RayLog.log( "- [ E ] - list_static/email_detail/getAllList():void----------");
});
