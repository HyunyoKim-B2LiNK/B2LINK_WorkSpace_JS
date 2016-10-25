function( SLD )
{
	print( "-- [ S ] - email_detail$findOne__SLD():void----------" );

	print( "SLD : " + SLD );
	print( "email_detail$_getCol() - " + email_detail$_getCol() );

	print( "-- [ E ] - email_detail$findOne__SLD():void----------" );
	return email_detail$findOne( { SLD : SLD } );
}