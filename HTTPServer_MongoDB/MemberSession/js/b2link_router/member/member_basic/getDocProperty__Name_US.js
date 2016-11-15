//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getDocProperty__Name_US.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member/member_basic/getDocProperty__Name_US
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - member/member_basic/getDocProperty__Name_US():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//Query;
		//console.log( "q.sid : " + q.sid );

	global.b2link_router.member.req__string( req, res, q, "member_basic$getDocProperty__Name_US", q.sid );

	global.TtwLog.log( "- [ E ] - member/member_basic/getDocProperty__Name_US():void----------" );
});