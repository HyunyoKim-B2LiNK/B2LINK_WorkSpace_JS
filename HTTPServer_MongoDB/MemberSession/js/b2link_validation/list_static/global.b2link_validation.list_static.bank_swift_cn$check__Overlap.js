//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.bank_swift_cn$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.bank_swift_cn$check__Overlap = function( t, d )
{
	global.Rh2Log.log( "---- [ S ] - global.b2link_validation.list_static.bank_swift_cn$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.nm ) t.nm = d.nm;
	if( d.nm_kr ) t.nm_kr = d.nm_kr;
	if( d.nm_cn ) t.nm_cn = d.nm_cn;
	if( d.nm_us ) t.nm_us = d.nm_us;
	if( d.city ) t.city = d.city;
	if( d.branch ) t.branch = d.branch;
	if( d.swift_code ) t.swift_code = d.swift_code;

	global.Rh2Log.log( "---- [ E ] - global.b2link_validation.list_static.bank_swift_cn$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;