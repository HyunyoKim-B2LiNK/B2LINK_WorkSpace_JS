//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.common_code$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.common_code$check__Overlap = function( t, d )
{
	global.Rh2Log.log( "---- [ S ] - global.b2link_validation.list_static.common_code$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.code0 ) t.code0 = parseInt( d.code0 );
	if( d.code1 ) t.code1 = parseInt( d.code1 );
	if( d.code2 ) t.code2 = parseInt( d.code2 );
	if( d.code ) t.code = d.code;
	if( d.description ) t.description = d.description;
	if( d.bUse ) t.bUse = d.bUse;

	global.Rh2Log.log( "---- [ E ] - global.b2link_validation.list_static.common_code$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;