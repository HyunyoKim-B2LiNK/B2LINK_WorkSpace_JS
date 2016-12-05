//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.zipcode_kr$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.zipcode_kr$check__Overlap = function( t, d )
{
	global.Rh2Log.log( "---- [ S ] - global.b2link_validation.list_static.zipcode_kr$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.zip_code ) t.zip_code = d.zip_code;
	if( d.addr ) t.addr = d.addr;
	if( d.addr_kr ) t.addr_kr = d.addr_kr;
	if( d.addr_cn ) t.addr_cn = d.addr_cn;
	if( d.addr_us ) t.addr_us = d.addr_us;

	global.Rh2Log.log( "---- [ E ] - global.b2link_validation.list_static.zipcode_kr$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;