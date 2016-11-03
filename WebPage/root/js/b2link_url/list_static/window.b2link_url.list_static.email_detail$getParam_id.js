//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url/list_static/window.b2link_url.list_static.email_detail$getParam_id_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url.list_static.email_detail$getParam_id_id = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url.list_static.email_detail$getParam_id():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url.list_static.email_detail$getParam_id():{String}----------" );

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