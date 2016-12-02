function( d )
{
	print( "-- [ S ] - currency$addDoc():{uint}----------" );

	var col = currency$_getCol();
	var len = currency$_findAll().count();
	var r = currency$validation__addDoc( d );

	print( "r : " + r );
	printjson( r );

	if( 0 == r )
	{
		print( "-- [ E ] - currency$addDoc():{uint}----------return 0;" );
		return 0;
	}

	if( currency$check__Overlap( r ) )
	{
		print( "-- [ E ] - currency$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		col.insert({
			_id : NumberInt( len )
			, cd_n : NumberInt( r.cd_n )
			, cd_us3 : r.cd_us3
			, currency : r.currency
			, e : NumberInt( r.e )
			, locations : r.locations
		});

		print( "-- [ E ] - currency$addDoc():{uint}----------return 1;" );
		return 1;
	}
}
