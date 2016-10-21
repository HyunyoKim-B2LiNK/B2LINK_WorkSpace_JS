function( SLD )
{
	print( "-- [ S ] - email$removeOne__SLD( SLD ):void----------" );


	print( "SLD : " + SLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne__SLD( SLD ):void----------" );
	email$getCol().remove( { SLD : SLD } , 1 );
}
