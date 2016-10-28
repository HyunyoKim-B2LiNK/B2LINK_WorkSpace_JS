function( d, r )
{
	print( "-- [ S ] - member_session$checkSession__Expired():uint----------" );
	//if( r )
	if( r && r.sid )
	//if( r && r.sid && r.d_ex )
	{
		var date_now = new Date();
		var date_expired = new Date( r.d_ex );
			print( "r.d_ex : " + r.d_ex );
			print( "date_n : " + date_now + " - Date Now" );
			print( "date_e : " + date_expired + " - Date - Expired" );

		if( date_now < date_expired && d.sid == r.sid )
		{
			member_session_log$addDoc( d );
			//Session Check Log;
			print( "-- [ E ] - member_session$checkSession__Expired():uint----------if( date_now < date_expired && d.sid == r.sid ) return 1;" );
			return 1;
		}
		else
		{
			//Todo - 20160929 - Session 파괴 전 처리 로직 넣기;
			r.d_ex = null;
			r.sid = null;
			member_session$_update__Session( r );
			print( "-- [ E ] - member_session$checkSession__Expired():uint----------else member_session$_update__Session( r ); return 0;" );
			return 0;
		}
	}

	/*/
	else
	{
		var rr = member_session$checkSession__Sign_In( d );
			print( "result : " + rr );
		print( "-- [ E ] - member_session$checkSession__Expired():uint----------else return rr;" );
		return rr;
		///return member_session$checkSession__Sign_In( r );
	}
	//*/
}