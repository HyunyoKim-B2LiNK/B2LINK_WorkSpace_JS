function( d )
{
	print( "-- [ S ] - currency$validation__addDoc():{Object}----------" );
	if ( !d.hasOwnProperty( "cd_n" ) || !d.hasOwnProperty( "cd_us3" || !d.hasOwnProperty( "e" ) ))
	{
		print( "-- [ E ] - currency$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}

	if ( !d.hasOwnProperty( "locations") )
	{
		var i = 0, iLen = d.locations.length;
		for ( ; i < iLen ; ++i ) d.locations[i] = NumberInt( d.locations[i] );
	}
	print( "-- [ E ] - currency$validation__addDoc():{Object}----------" );
	return d;
}
