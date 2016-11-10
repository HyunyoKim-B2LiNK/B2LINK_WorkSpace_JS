//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.brand.brand_basic$update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$update_id = function( d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$update_id():void----------" );

	try
	{
		d._id = parseInt( d._id );
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
	}

	d.nm_cn = d.nm_cn ? d.nm_cn : "";
	d.nm_kr = d.nm_kr ? d.nm_kr : "";
	d.nm_us = d.nm_us ? d.nm_us : "";

	d.url = d.url ? d.url : "";
	d.url_log = d.url_log ? d.url_log : "";
	d.url_trademark = d.url_trademark ? d.url_trademark : "";

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$update_id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;