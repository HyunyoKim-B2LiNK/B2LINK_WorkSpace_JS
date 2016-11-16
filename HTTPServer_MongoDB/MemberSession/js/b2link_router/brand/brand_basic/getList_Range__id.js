//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/brand/brand_basic/getList_Range__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/brand/brand_basic/getList_Range__id
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - brand/brand_basic/getList_Range__id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.list_static.req__fn( req, res, q
		, "email_detail$getList_Range__id(" + q._id_gt + "," + q._id_lt + ")" );

	global.TtwLog.log( "- [ E ] - brand/brand_basic/getList_Range__id():void----------" );
});