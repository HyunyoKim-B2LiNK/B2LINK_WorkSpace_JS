//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getDocProperty__Name.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getDocProperty__Name
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_basic/getDocProperty__Name():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;

	global.b2link_router.member.req__value( req, res, q, "member_basic$getDocProperty__Name", q._id );

	global.TtwLog.log( "- [ E ] - member/member_basic/getDocProperty__Name():void----------" );
});
