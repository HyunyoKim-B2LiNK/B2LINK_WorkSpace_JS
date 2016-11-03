function( SLD )
{
	print( "-- [ S ] - email_detail$findOne__SLD():{Document}----------" );

	print( "SLD : " + SLD );
	//print( "email_detail$_getCol() - " + email_detail$_getCol() );

	print( "-- [ E ] - email_detail$findOne__SLD():{Document}----------" );
	return email_detail$findOne( { SLD : SLD } );
}