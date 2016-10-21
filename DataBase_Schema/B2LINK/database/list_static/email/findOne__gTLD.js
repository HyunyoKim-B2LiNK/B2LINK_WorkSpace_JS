function( gTLD )
{
	print( "-- [ S ] - email$findOne__gTLD():{Object}----------" );

	print( "gTLD : " + gTLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$findOne__gTLD():{Object}----------" );
	return email$findOne( { gTLD : gTLD } );
}
