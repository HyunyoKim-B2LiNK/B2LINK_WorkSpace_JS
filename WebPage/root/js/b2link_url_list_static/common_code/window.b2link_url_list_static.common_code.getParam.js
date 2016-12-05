//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_list_static/window.b2link_url_list_static.common_code.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d common_code {}
 * @return {String}
 */
window.b2link_url_list_static.common_code.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_list_static.common_code.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_list_static.common_code.getParam():{String}----------" );

	return "&code0=" + d.code0
		+ "&code1=" + d.code1
		+ "&code2=" + d.code2
		+ "&code=" + d.code
		+ "&description=" + d.description
		+ "&bUse=" + d.bUse;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;