//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/brand/global.b2link_validation.brand.brand_basic$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.brand.brand_basic$check__Overlap = function( t, d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.brand.brand_basic$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.description ) t.description = d.description;

	if( d.nm_cn  ) t.nm_cn = d.nm_cn;
	if( d.nm_kr  ) t.nm_kr = d.nm_kr;
	if( d.nm_us  ) t.nm_us = d.nm_us;

	if( d.url ) t.url = d.url;
	if( d.url_log ) t.url_logo = d.url_logo;
	if( d.url_trademark ) t.url_trademark = d.url_trademark;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.brand.brand_basic$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
