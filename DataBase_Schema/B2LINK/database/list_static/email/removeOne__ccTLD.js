function( ccTLD )
{
	print( "-- [ S ] - email$removeOne__ccTLD( ccTLD ):void----------" );

	print( "ccTLD : " + ccTLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne__ccTLD( ccTLD ):void----------" );
	email$getCol().remove( { ccTLD : ccTLD } , 1 );
}
