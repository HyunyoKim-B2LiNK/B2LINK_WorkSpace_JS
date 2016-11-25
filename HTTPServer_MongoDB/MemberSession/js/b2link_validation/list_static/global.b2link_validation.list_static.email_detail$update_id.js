//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.email_detail$update_id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$update_id = function( t, d )
{
	global.TtwLog.log( "---- [ S ] - global.b2link_validation.list_static.email_detail$update_id():{Object}----------" );

	console.logObjectInformation( d, "d" );
	try
	{
		t._id = parseInt(d._id);
	}
	catch( e )
	{
		global.TtwLog.error( "Error : " + e );
		throw e;
	}

	t.SLD = d.SLD ? d.SLD.toLowerCase() : "";
	t.TLD = d.TLD ? d.TLD.toLowerCase() : "";
	t.ccTLD = d.ccTLD ? d.ccTLD.toLowerCase() : "";
	t.gTLD = d.gTLD ? d.gTLD.toLowerCase() : "";
	t.c = d.c ? d.c.toLowerCase() : "";

	global.TtwLog.log( "---- [ E ] - global.b2link_validation.list_static.email_detail$update_id():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
