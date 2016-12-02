function( d )
{
	print( "-- [ S ] - common_code$check__Overlap():{uint}----------" );

	printjson( d );

	common_code$validation__Document( d );

	var r = common_code$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - common_code$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - common_code$check__Overlap():{uint}----------return 1;" );
	return 1;
}