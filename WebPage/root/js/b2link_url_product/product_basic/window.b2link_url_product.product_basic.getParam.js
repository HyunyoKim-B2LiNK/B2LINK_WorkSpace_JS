//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_brand/window.b2link_url_product.product_basic.getParam.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d product_basic {}
 * @return {String}
 */
window.b2link_url_product.product_basic.getParam = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_product.product_basic.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_product.product_basic.getParam():{String}----------" );

	return "&nm_cn=" + d.nm_cn
		+ "&nm_kr=" + d.nm_kr
		+ "&nm_us=" + d.nm_us

		+ "&barcode=" + d.barcode

		+ "&date_register=" + d.date_register
		+ "&description=" + d.description

		+ "&msds=" + d.msds

		+ "&product_category=" + d.product_category

		+ "&url=" + d.url
		+ "&url_file_barcode=" + d.url_file_barcode
		+ "&url_file_msds=" + d.url_file_msds
		+ "&url_file_product=" + d.url_file_product

		+ "&unit_weight=" + d.unit_weight
		+ "&weight=" + d.weight

		+ "&register=" + d.register;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;