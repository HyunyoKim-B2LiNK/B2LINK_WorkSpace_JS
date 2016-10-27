function( d )
{
	print( "-- [ S ] - member_session$checkSession__Expired__mid():uint----------" );

	print( "- d -" );
	printjson( d );

	var r = member_session$_findOne__mid( d.mid );

	print( "- r -" );
	printjson( r );

	print( "-- [ E ] - member_session$checkSession__Expired__mid():uint----------" );
	return member_session$checkSession__Expired( d, r );
}