function( d, r )
{
	print( "-- [ S ] - member_session$checkSession__Expired():int----------" );
	if( r )
	{
		var date_now = new Date();
		var date_expired = new Date( r.d_ex );
			print( "date_n : " + date_now + " - Date Now" );
			print( "date_e : " + date_expired + " - Date - Expired" );

		if( date_now < date_expired && d.sid == r.sid )
		{
			//Session Check Log;
			print( "-- [ E ] - member_session$checkSession__Expired():int----------if( date_now < date_expired && d.sid == r.sid )" );
			member_session_log$addDoc( d );
			return 1;
		}
		else
		{
			//Todo - 20160929 - Session 파괴 전 처리 로직 넣기;
			r.d_ex = null;
			r.sid = null;
			member_session$_update__Session( r );
			print( "-- [ E ] - member_session$checkSession__Expired():int----------member_session$_update__Session( r );" );
			return 0;
		}
	}
	else
	{
		print( "-- [ E ] - member_session$checkSession__Expired():int----------else" );
		return member_session$checkSession__Sign_In( d );
		///return member_session$checkSession__Sign_In( r );
	}
}