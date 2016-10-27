function( d )
{
	print( "-- [ S ] - member_session$checkSession__Expired__mid():uint----------" );

	print( "- d -" );
	printjson( d );

	var r = member_session$_findOne__mid( d.mid );
	print( "- r -" );
	printjson( r );
	if( !r )
	{
		//print( "-- [ E ] - member_session$checkSession__Expired__mid():uint----------if( !r ) return 0;" );
		//return 0;
		print( "-- [ E ] - member_session$checkSession__Expired__mid():uint----------if( !r ) destroySession__sid( d );" );
		member_session$destroySession__sid( d );
	}

	var rr = member_session$checkSession__Expired( d, r );
		print( "result : " + rr );
	print( "-- [ E ] - member_session$checkSession__Expired__mid():uint----------return rr;" );
	return rr;
}