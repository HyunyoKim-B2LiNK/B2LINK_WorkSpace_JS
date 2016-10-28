function( d )
{
	print( "-- [ S ] - member_session$destroySession___id():void----------" );
	return member_session$_destroySession( member_session$_findOne___id( d._id ) );
	print( "-- [ E ] - member_session$destroySession___id():void----------" );
}