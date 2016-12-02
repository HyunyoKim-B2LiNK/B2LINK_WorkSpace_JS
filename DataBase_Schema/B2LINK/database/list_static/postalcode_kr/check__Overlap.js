function( d )
{
	print( "-- [ S ] - postalcode_kr$check__Overlap():{uint}----------" );

	printjson( d );

	postalcode_kr$validation__Document( d );

	var r = postalcode_kr$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - postalcode_kr$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - postalcode_kr$check__Overlap():{uint}----------return 1;" );
	return 1;
}