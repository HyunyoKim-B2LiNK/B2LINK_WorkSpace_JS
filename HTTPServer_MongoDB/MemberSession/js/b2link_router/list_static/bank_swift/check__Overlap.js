//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift/check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_staic/bank_swift/checkcountry_Overlap
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - bank_swift/check__Overlap():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var co = q.co;

	var f_check__Overlap = "bank_swift_" + co + "$check__Overlap";

	var d = {};
	global.b2link_validation.list_static[ f_check__Overlap ]( d, q );

	global.b2link_router.list_static.req__json( req, res, q, f_check__Overlap, d );

	global.Rh2Log.log( "- [ E ] - bank_swift/check__Overlap():void----------" );
});