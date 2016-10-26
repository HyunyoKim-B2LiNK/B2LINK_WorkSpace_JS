//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/email_detail/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/email_detail/add
//*/
(function( req, res ){
	global.RayLog.log( "- [ S ] - email_detail/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	var d = {};
	global.b2link_validation.list_static.email_detail$check__Overlap( d, q );

	global.b2link_router.list_static.req__json( req, res, q, "email_detail$addDoc", d );

	global.RayLog.log( "- [ E ] - email_detail/add():void----------" );
});
