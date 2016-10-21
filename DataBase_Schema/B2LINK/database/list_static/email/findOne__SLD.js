function( sld )
{
	print( "-- [ S ] - email$findOne__SLD():void----------" );
	print( "SLD : " + sld );
	print( "email$_getCol() - " + email$_getCol() );
	print( "-- [ E ] - email$findOne__SLD():void----------" );
	return email$findOne( { SLD : sld } );
}
