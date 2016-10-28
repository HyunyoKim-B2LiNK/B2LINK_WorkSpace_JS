function( sid )
{
	print( "-- [ S ] - member_session$_confirm__sessionID():{uint}----------" );

	print( "session id - sid : " + sid );
	if( "" == sid || null == sid || "null" == sid )
	{
		print( 'if( "" == sid || null == sid || "null" == sid )' );
		print( new Error( "Invalid session - sid : " + sid ) );
		print( new Error( "올바르지 않은 세션 - sid : " + sid ) );
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return -1;" );
		return -1;
	}

	var o = member_session$_findOne__sid( sid );
	if( o )
	{
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return o;" );
		return o;
	}
	else
	{
		print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_session$_confirm__sessionID():{uint}----------return 0;" );
	return 0;
}