function( c )
{
	print( "-- [ S ] - email$removeOne__c( c ):void----------" );

	print( "c : " + c );
	print( "email$_getCol() - " + email$_getCol() );

	print( "-- [ E ] - email$removeOne__c( c ):void----------" );
	email$getCol().remove( { c : c } , 1 );
}
