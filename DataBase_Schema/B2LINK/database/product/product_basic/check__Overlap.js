function( d )
{
	print( "-- [ S ] - product_basic$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = product_basic$findOne({
		nm_kr : d.nm_kr
		, nm_cn : d.nm_cn
		, nm_us : d.nm_us
		, url : d.url
		, barcode : d.barcode
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - product_basic$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - product_basic$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
