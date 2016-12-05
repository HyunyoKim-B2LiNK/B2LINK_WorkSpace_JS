//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/list_static/bank_swift/add.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/list_static/bank_swift/add
//*/
(function( req, res ){
	global.Rh2Log.log( "- [ S ] - bank_swift/add():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
	var co = q.co;

	var f_overlap = "bank_swift_" + co + "$check__Overlap";
	var f_addDoc = "bank_swift_" + co + "$addDoc";

	var d = {};
	global.b2link_validation.list_static[ f_overlap ]( d, q );

	global.b2link_router.list_static.req__json( req, res, q, f_addDoc, d );

	global.Rh2Log.log( "- [ E ] - bank_swift/add():void----------" );
});