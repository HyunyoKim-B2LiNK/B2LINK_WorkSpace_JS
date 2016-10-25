//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url/window.b2link_url.member.member_session$getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d session { "sid" : "", "uid" : "" }
 * @return {String}
 */
window.b2link_url.member.member_session$getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url.member.member_session$getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url.member.member_session$getParam():{String}----------" );

	return "&sid=" + d.sid + "&uid=" + d.uid;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;