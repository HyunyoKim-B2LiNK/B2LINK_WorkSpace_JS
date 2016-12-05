function( d )
{
	print( "-- [ S ] - messenger$validation__addDoc():{Object}----------" );
	if ( !d.hasOwnProperty( "nm" ) || !d.hasOwnProperty( "description" ) )
	{
		print( "-- [ E ] - messenger$validation__addDoc():{Object}----------return 0;" );
		return 0;
	}
	d.nm = d.nm.toUpperCase();
	print( "-- [ E ] - messenger$validation__addDoc():{Object}----------" );
	return d;
}
