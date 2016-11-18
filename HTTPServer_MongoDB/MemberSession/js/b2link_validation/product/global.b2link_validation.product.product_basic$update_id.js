//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.product.product_basic$update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.product.product_basic$update_id = function( d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.product.product_basic$update_id():void----------" );

	try
	{
		d._id = parseInt( d._id );
		d.date_regist = d.date_regist.split( "," );
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
	}

	// 20161118 박종하 수정하기
	if( d.nm_register ) d._id$member_public = d.nm_register ;

	if( d.barcode ) d.barcode = d.barcode;
	if( d.brand ) d._id$brand_basic = d.brand;

	if( d.description ) d.description = d.description;

	if( d.msds ) d.msds = d.msds;

	if( d.nm_cn ) d.nm_cn = d.nm_cn;
	if( d.nm_kr ) d.nm_kr = d.nm_kr;
	if( d.nm_us ) d.nm_us = d.nm_us;

	if( d.product_category ) d._id$product_category = d.product_category;

	if( d.url ) d.url = d.url;
	if( d.url_file_product ) d.url_file_product = d.url_file_product;
	if( d.url_file_barcode ) d.url_file_barcode = d.url_file_barcode;
	if( d.url_file_msds ) d.url_file_msds = d.url_file_msds;

	if( d.unit_weight ) d.unit_weight = d.unit_weight;

	if( d.weight ) d.weight = d.weight;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.product.product_basic$update_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;