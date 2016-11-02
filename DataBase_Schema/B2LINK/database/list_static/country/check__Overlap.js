function( d )
{
	print( "-- [ S ] - country$check__Overlap():{uint}----------" );

	printjson( d );

	country$validation__Document( d );

	var r = country$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - country$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - country$check__Overlap():{uint}----------return 1;" );
	return 1;
}