function( d )
{
	print( "-- [ S ] - member_session$getSession():void----------" );
	//var r = member_session$_findOne__uid( d.uid );
	print( "-- [ E ] - member_session$getSession():void----------" );
	//return r;
	return member_session$_findOne__uid( d.uid );
}