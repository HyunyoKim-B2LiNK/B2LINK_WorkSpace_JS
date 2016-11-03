//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url/member/window.b2link_url.member.member_basic$getParam_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url.member.member_basic$getParam_id = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url.member.member_basic$getParam_id():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url.member.member_basic$getParam_id():{String}----------" );

	return "&_id=" + d._id
		+ "&SLD=" + d.SLD
		+ "&TLD=" + d.TLD
		+ "&ccTLD=" + d.ccTLD
		+ "&gTLD=" + d.gTLD
		+ "&c=" + d.c;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;