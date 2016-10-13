//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/member/member_basic/getAllList__email.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
http://localhost:49320/member_basic/getAllList__email
//*/
(function( req, res ){
	console.log( "- [ S ] - member/member_basic/getAllList__email():void----------" );

	var _server = global.server;

	var q = _server.getQueryFromURL( req.url );

	//use q;
	//...Custom parameter process;

	q.db = "member";
	q.q = "member_basic$getAllList__email()";

	_server.req_DB( req, res, q, function( error, result ){
		if( error )
		{
			console.error( q.q + " Error : " + error );
			_server.sendResponse_200_False( req, res );
			return;
		}
		_server.sendResponse_200_String( req, res, JSON.stringify( result ) );
	});

	console.log( "- [ E ] - member/member_basic/getAllList__email():void----------" );
});