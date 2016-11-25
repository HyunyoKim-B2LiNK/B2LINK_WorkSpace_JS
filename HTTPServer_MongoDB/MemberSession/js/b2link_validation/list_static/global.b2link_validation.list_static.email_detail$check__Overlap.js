//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.email_detail$check__Overlap.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$check__Overlap = function( t, d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.email_detail$check__Overlap():{Object}----------" );

	console.logObjectInformation( d, "d" );

	if( d.SLD	) t.SLD = d.SLD.toLowerCase();
	if( d.TLD	) t.TLD = d.TLD.toLowerCase();
	if( d.ccTLD	) t.ccTLD = d.ccTLD.toLowerCase();
	if( d.gTLD	) t.gTLD = d.gTLD.toLowerCase();
	if( d.c		) t.c = d.c.toLowerCase();

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.email_detail$check__Overlap():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
