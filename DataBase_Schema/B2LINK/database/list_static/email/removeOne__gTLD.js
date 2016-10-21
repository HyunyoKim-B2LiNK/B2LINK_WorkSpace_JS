function( gTLD )
{
	print( "-- [ S ] - email$removeOne__gTLD( gTLD ):void----------" );

	print( "gTLD : " + gTLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne__gTLD( gTLD ):void----------" );
	email$getCol().remove( { gTLD : gTLD } , 1 );
}
