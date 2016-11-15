//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_brand/window.b2link_url_brand.brand_basic.getParam_with_brand_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * @return {String}
 */
window.b2link_url_brand.brand_basic.getParam_with_brand_id = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_brand.brand_basic.getParam_with_brand_id():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_brand.brand_basic.getParam_with_brand_id():{String}----------" );

	return "&_id=" + d._id

		+ "&description=" + d.description

		+ "&nm_cn=" + d.nm_cn
		+ "&nm_kr=" + d.nm_kr
		+ "&nm_us=" + d.nm_us

		+ "&url="  + d.url
		+ "&url_logo=" + d.url_logo
		+ "&url_trademark=" + d.url_trademark;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;