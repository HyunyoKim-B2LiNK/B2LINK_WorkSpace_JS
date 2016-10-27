function( d )
{
	//print("");print("");print("");print("");print("");
	print( "\n-- [ S ] - member_session$checkSession__Expired__sid():uint----------" );

	printjson( d );

	var r = member_session$_findOne__sid( d.sid );//printjson( r );
	if( !r )
	{
		print( "-- [ E ] - member_session$checkSession__Expired__sid():uint----------if( !r ) return 0;" );
		return 0;
	}

	var rr = member_session$checkSession__Expired( d, r );

	print( "\n-- [ E ] - member_session$checkSession__Expired__sid():uint----------return rr;" );
	//print("");print("");print("");print("");print("");
	return rr;
}