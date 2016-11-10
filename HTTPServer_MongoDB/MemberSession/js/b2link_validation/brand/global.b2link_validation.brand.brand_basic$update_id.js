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
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$update_id():{Object}----------" );

	try
	{
		d._id = parseInt( d._id );
	}
	catch( e )
	{
		global.RayLog.error( "Error : " + e );
	}

	if( d.nm_cn  ) d.nm_cn = d.nm_cn;	else d.nm_cn = "";
	if( d.nm_kr  ) d.nm_kr = d.nm_kr;	else d.nm_kr = "";
	if( d.nm_us  ) d.nm_us = d.nm_us;	else d.nm_us = "";
	if( d.url ) d.url = d.url;	else d.url = "";
	if( d.url_log ) d.url_logo = d.url_logo;	else d.url_logo = "";
	if( d.url_trademark ) d.url_trademark = d.url_trademark;	else d.url_trademark = "";

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$update_id():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
