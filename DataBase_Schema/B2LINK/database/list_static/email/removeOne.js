function( d )
{
	print( "-- [ S ] - email$removeOne():void----------" );

	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne():void----------" );
	email$getCol().remove( d , 1 );
}
