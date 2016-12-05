//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_list_static/window.b2link_url_list_static.zipcode_kr.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d zipcode_kr {}
 * @return {String}
 */
window.b2link_url_list_static.zipcode_kr.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_list_static.zipcode_kr.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_list_static.zipcode_kr.getParam():{String}----------" );

	return "&zip_code=" + d.zip_code
		+ "&addr=" + d.addr
		+ "&addr_kr=" + d.addr_kr
		+ "&addr_us=" + d.addr_us
		+ "&addr_cn=" + d.addr_cn;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;