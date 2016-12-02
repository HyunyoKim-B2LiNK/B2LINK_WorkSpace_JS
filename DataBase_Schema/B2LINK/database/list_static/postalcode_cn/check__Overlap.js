function( d )
{
	print( "-- [ S ] - postalcode_cn$check__Overlap():{uint}----------" );

	printjson( d );

	postalcode_cn$validation__Document( d );

	var r = postalcode_cn$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - postalcode_cn$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - postalcode_cn$check__Overlap():{uint}----------return 1;" );
	return 1;
}