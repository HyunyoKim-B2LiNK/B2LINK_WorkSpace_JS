function( d )
{
	print( "-- [ S ] - brand_basic$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = brand_basic$findOne({
		nm_kr : r.nm_kr
		, nm_cn : r.nm_cn
		, nm_us : r.nm_us
		, url : r.url
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - brand_basic$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - brand_basic$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}