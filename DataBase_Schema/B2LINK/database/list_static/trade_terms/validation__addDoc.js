function( d )
{
	print( "-- [ S ] - trade_terms$validation__addDoc():{Object}----------" );
	if ( !d.hasOwnProperty( "nm" ) || !d.hasOwnProperty( "nm_f" ) || !d.hasOwnProperty( "description" ) )
	{
		print( "-- [ E ] - trade_terms$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}
	d.nm = d.nm.toUpperCase();
	print( "-- [ E ] - trade_terms$validation__addDoc():{Object}----------" );
	return d;
}
