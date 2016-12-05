//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_list_static/window.b2link_url_list_static.bank_swift_us.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d bank_swift_us {}
 * @return {String}
 */
window.b2link_url_list_static.bank_swift_us.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_list_static.bank_swift_us.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_list_static.bank_swift_us.getParam():{String}----------" );

	return "&nm=" + d.nm
		+ "&nm_cn=" + d.nm_cn
		+ "&nm_kr=" + d.nm_kr
		+ "&nm_us=" + d.nm_us
		+ "&city=" + d.city
		+ "&branch=" + d.branch
		+ "&swift_code=" + d.swift_code;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;