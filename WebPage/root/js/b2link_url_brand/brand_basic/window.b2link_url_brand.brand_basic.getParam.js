
//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_brand/window.b2link_url_brand.brand_basic.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d email_detail {}
 * @return {String}
 */
window.b2link_url_brand.brand_basic.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_brand.brand_basic.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_brand.brand_basic.getParam():{String}----------" );

	return "&nm_cn=" + d.nm_cn
		+ "&nm_kr=" + d.nm_kr
		+ "&nm_us=" + d.nm_us
		+ "&description=" + d.description
		+ "&url="  + d.url
		+ "&url_logo=" + d.url_logo
		+ "&url_trademark=" + d.url_trademark
		+ "&register=" + d.register;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;