function( d )
{
	print( "-- [ S ] - bank_swift_cn$check__Overlap():{uint}----------" );

	printjson( d );

	bank_swift_cn$validation__Document( d );

	var r = bank_swift_cn$findOne( d );
		printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - bank_swift_cn$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - bank_swift_cn$check__Overlap():{uint}----------return 1;" );
	return 1;
}