function( c )
{
	print( "-- [ S ] - email$findOne__c():{Object}----------" );

	print( "c : " + c );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$findOne__c():{Object}----------" );
	return email$findOne( { c : c } );
}
