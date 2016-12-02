function( d )
{
	print( "-- [ S ] - zipcode_kr$check__Overlap():{uint}----------" );

	printjson( d );

	zipcode_kr$validation__Document( d );

	var r = zipcode_kr$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - zipcode_kr$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - zipcode_kr$check__Overlap():{uint}----------return 1;" );
	return 1;
}