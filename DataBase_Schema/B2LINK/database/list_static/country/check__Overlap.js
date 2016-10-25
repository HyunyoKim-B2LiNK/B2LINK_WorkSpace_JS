function( d )
{
	print( "-- [ S ] - country$check__Overlap():{uint}----------" );

	printjson( d );

	var o = {
		cd_n : NumberInt( d.cd_n )
		, cd_us2 : d.cd_us2.toUpperCase()
		, cd_us3 : d.cd_us3.toUpperCase()
		, nm_cn : d.nm_cn
		, nm_kr : d.nm_kr
		, nm_us : d.nm_us
	};

	var r = country$findOne( o );
	printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - country$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - country$check__Overlap():{uint}----------return 1;" );
	return 1;
}