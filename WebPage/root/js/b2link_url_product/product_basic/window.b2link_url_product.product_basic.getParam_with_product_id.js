//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_url_brand/window.b2link_url_product.product_basic.getParam_with_product_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d product_basic {}
 * @return {String}
 */
window.b2link_url_product.product_basic.getParam_with_product_id = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link_url_product.product_basic.getParam():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_url_product.product_basic.getParam():{String}----------" );
	
	return "&id=" + d._id 
		+ "&nm_cn=" + d.nm_cn
		+ "&nm_kr=" + d.nm_kr
		+ "&nm_us=" + d.nm_us

		+ "&description=" + d.description

		+ "&url="  + d.url
		+ "&url_file_product="  + d.url_file_product
		+ "&url_file_barcode="  + d.url_file_barcode
		+ "&url_file_msds="  + d.url_file_msds

		+ "&weight="  + d.weight
		+ "&unit_weight="  + d.unit_weight


		+ "&product_category=" + d.product_category
		+ "&register=" + d.register

		+ "&date_register=" + d.date_register
		+ "&msds=" + d.msds
		+ "&barcode=" + d.barcode;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------a------------------------------------------------------;