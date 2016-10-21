function( TLD )
{
	print( "-- [ S ] - email$findOne__TLD():{Object}----------" );

	print( "TLD : " + TLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$findOne__TLD():{Object}----------" );
	return email$findOne( { TLD : TLD } );
}
