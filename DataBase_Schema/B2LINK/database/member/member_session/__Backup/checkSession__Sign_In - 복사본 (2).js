function( d )
{
	print( "-- [ S ] - member_session$checkSession__Sign_In():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	//--------------------------------------------------;

	//Confirm - member_basic.member id;
	var o = member_basic$findOne__mid( d.mid );
	if( !o )//o == null;
	{
		print( "var r = member_basic$findOne__mid( d.mid );" );
		print( new Error( "The account does not exist. - " + d.mid ) );
		print( new Error( "이 계정은 존재하지 않음. - " + d.mid ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}

	//Confirm - member_basic.member password;
	var n = member_basic$_confirm__Password___update__nSignInFail( o, d.mpw );
	if( !n )//n == 0;
	{
		print( "var n = member_basic$_confirm__Password___update__nSignInFail( r, d.mpw );" );
		print( new Error( "It exceeded the number of failed authentication account. - " + d.mid + " - Count : " + n ) );
		print( new Error( "이 계정의 인증 실패 횟수 초과. - " + d.mid + " - Count : " + n ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}

	//--------------------------------------------------;

	//Confirm - member_session.session id;
	var n = member_session$_confirm__sessionID( d.sid );
	if( -1 == n )
	{
		print( "var n = member_session$_confirm__sessionID( d.sid );" );
		print( new Error( "Session Error. - sid : " + d.sid ) );
		print( new Error( "세션 오류. - sid : " + d.sid ) );
		print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 0;" );
		return 0;
	}
	else if( 0 == n )//세션 문서가 없음;
	{
		var r = member_session$_findOne__mid( d.mid );
		if( r )
		{
			print( "Update Session Document. - sid : " + d.sid );
			print( "세션 문서 업데이트. - sid : " + d.sid );
			d._id = o._id;
			member_session$_update__Session( d );
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 1;" );
			return 1;
		}
		else
		{
			print( "Create Session Document. - sid : " + d.sid );
			print( "세션 문서 생성. - sid : " + d.sid );
			member_session$_getCol().insert({
				_id : NumberInt( o._id )
				, d_ex : d.d_ex//date_expire;
				, mid : d.mid//member id;
				, sid : d.sid//session id;
			});
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------return 1;" );
			return 1;
		}
	}
	else//동일한 세션 문서가 있음;
	{
		if( n._id == d._id )
		{
			return 1;
		}
		else
		{
			member_session$_destroySession( o );
			print( new Error( "Do the same session connection - Remove Session. - mid : " + n.mid + "\n sid : " + n.sid ) );
			print( new Error( "동일한 세션이 접속 - 세션 제거. - mid : " + n.mid + "\n sid : " + n.sid ) );
			return 0;
		}
	}

	//--------------------------------------------------;

	//Confirm - member_session.member id;
	var r = member_session$_findOne__mid( d.mid );
	if( r )//세션 문서 존재;
	{
		if( r.sid == d.sid )
		{
			return 1;
		}
	}
	else//세션 문서 없음;
	{
		print( new Error( "Create Session Document. - sid : " + d.sid ) );
		print( new Error( "세션 문서 생성. - sid : " + d.sid ) );
		member_session$_getCol().insert({
			_id : NumberInt( o._id )
			, d_ex : r.d_ex//date_expire;
			, mid : r.mid//member id;
			, sid : r.sid//session id;
		});
	}



	//Confirm - member_session.member id;
	var r = member_session$_findOne__mid( d.mid );
	if( !r )
	{

	}

	if( r )
	{
		print( "- r -" );
		printjson( r );
		//if( 0 == member_basic$_check__Password( r, d.mpw ) ) return 0;//Password가 틀림;
		//if( 0 == member_basic$_check__Password( r, d.mpw ) ) return new Error( "Password가 틀림" );//Password가 틀림;
		if( 0 == member_basic$sign_in( d ) )
		{
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------if( 0 == member_basic$sign_in( d ) ) return;" );
			return 0;//Password가 틀림;
		}

		print( "r.d_ex : " + r.d_ex );
		if( r.d_ex )
		{
			print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------if( r.d_ex ) return member_session$checkSession__Expired( d, r );" );
			return member_session$checkSession__Expired( d, r );
		}
	}
	else
	{
	}

	var n = member_session$addDoc( d );
	print( "-- [ E ] - member_session$checkSession__Sign_In():{uint}----------var n = member_session$addDoc( d );" );
	return n;
}