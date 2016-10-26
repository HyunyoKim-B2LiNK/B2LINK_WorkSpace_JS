//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.country$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.country$check__Overlap = function( t, d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.country$check__Overlap():{Object}----------" );

	if( d.cd_n   ) t.cd_n = parseInt( d.cd_n );
	if( d.cd_us2 ) t.cd_us2 = d.cd_us2.toUpperCase();
	if( d.cd_us3 ) t.cd_us3 = d.cd_us3.toUpperCase();
	//if( d.nm_cn  ) t.nm_cn = d.nm_cn;
	//if( d.nm_kr  ) t.nm_kr = d.nm_kr;
	//if( d.nm_us  ) t.nm_us = d.nm_us;

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.country$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
