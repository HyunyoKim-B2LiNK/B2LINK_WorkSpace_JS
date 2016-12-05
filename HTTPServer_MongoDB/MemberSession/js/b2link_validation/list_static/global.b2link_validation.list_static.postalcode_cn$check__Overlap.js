//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.postalcode_cn$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.postalcode_cn$check__Overlap = function( t, d )
{
	global.Rh2Log.log( "---- [ S ] - global.b2link_validation.list_static.postalcode_cn$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.postal_code ) t.postal_code = d.postal_code;
	if( d.addr0 ) t.addr0 = d.addr0;
	if( d.addr1 ) t.addr1 = d.addr1;
	if( d.addr2 ) t.addr2 = d.addr2;
	if( d.addr ) t.addr = d.addr;

	global.Rh2Log.log( "---- [ E ] - global.b2link_validation.list_static.postalcode_cn$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;