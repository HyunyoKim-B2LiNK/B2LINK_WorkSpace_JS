function( TLD )
{
	print( "-- [ S ] - email$removeOne__TLD( TLD ):void----------" );

	print( "TLD : " + TLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne__TLD( TLD ):void----------" );
	email$getCol().remove( { TLD : TLD } , 1 );
}
