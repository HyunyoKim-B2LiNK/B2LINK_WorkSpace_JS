//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_validation/list_static/global.b2link_validation.list_static.email_detail$update_ids.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} t target
 * @param {Object} d data
 */
global.b2link_validation.list_static.email_detail$update_ids = function( t, d )
{
	global.RayLog.log( "---- [ S ] - global.b2link_validation.list_static.email_detail$update_ids():{Object}----------" );

	console.logObjectInformation( d, "d" );
	console.log( d.ids );

	var _t = [];
	var _d = JSON.parse( d.ids );
	var i=0; iLen=_d.length;
		console.log(_d.length);
	var io;
	for ( ; i<iLen; ++i )
	{

		io = _d[i];
		var to = {};
		try
		{
			to._id = parseInt(io._id);
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

		_t.push(to);
	}
	t.ids = _t;

	global.RayLog.log( "---- [ E ] - global.b2link_validation.list_static.email_detail$update_id():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;