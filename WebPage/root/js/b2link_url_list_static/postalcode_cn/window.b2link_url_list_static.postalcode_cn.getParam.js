//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_list_static/window.b2link_url_list_static.postalcode_cn.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d postalcode_cn {}
 * @return {String}
 */
window.b2link_url_list_static.postalcode_cn.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_list_static.postalcode_cn.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_list_static.postalcode_cn.getParam():{String}----------" );

	return "&postal_code=" + d.postal_code
		+ "&addr0=" + d.addr0
		+ "&addr1=" + d.addr1
		+ "&addr2=" + d.addr2
		+ "&addr=" + d.addr;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;