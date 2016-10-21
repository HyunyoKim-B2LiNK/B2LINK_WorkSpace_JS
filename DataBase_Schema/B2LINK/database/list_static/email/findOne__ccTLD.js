function( ccTLD )
{
	print( "-- [ S ] - email$findOne__ccTLD():{Object}----------" );

	print( "ccTLD : " + ccTLD );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$findOne__ccTLD():{Object}----------" );
	return email$findOne( { ccTLD : ccTLD } );
}
