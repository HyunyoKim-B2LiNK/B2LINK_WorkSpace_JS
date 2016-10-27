function( d )
{
	print( "-- [ S ] - member_session$destroySession__sid():void----------" );

	print( "-- [ E ] - member_session$destroySession__sid():void----------" );

	return member_session$_destroySession( member_session$_findOne__sid( d.sid ) );
}