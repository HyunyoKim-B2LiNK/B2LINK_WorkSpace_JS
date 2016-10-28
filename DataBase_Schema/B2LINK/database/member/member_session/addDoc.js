function( d )
{
	print( "-- [ S ] - member_session$addDoc():{uint}----------" );

	print( "Input d : " );
	printjson( d );

	//--------------------------------------------------;

	//Confirm - member_basic.member id;
	var bo = member_basic$findOne__mid( d.mid );
	if( !bo )//bo == null;
	{
		print( "var r = member_basic$findOne__mid( d.mid );" );
		print( new Error( "[ Error ] - The account does not exist. - " + d.mid ) );
		print( new Error( "[ Error ] - 이 계정은 존재하지 않음. - " + d.mid ) );
		print( "-- [ E ] - member_session$addDoc():{uint}----------return 0;" );
		return 0;
	}

	//--------------------------------------------------;

	//Confirm - member_session.member id;
	var so = member_session$_findOne__mid( d.mid );
	if( so )//o == null;
	{
		print( "var so = member_session$_findOne__mid( d.mid );" );
		print( new Error( "[ Error ] - This account exists. - " + d.mid ) );
		print( new Error( "[ Error ] - 이 계정 존재함. - " + d.mid ) );
		member_session$_destroySession( so );
		print( "-- [ E ] - member_session$addDoc():{uint}----------return 0;" );
		return 0;
	}

	//--------------------------------------------------;

	var so = member_session$_findOne__sid( d.sid );
	if( so && so.mid != d.mid )
	{
		print( "var so = member_session$_findOne__sid( d.sid );" );
		print( new Error( "[ Error ] - This account exists. - " + d.mid ) );
		print( new Error( "[ Error ] - 이 계정 존재함. - " + d.mid ) );
		member_session$_destroySession( so );
		print( "-- [ E ] - member_session$addDoc():{uint}----------return 0;" );
		return 0;
	}
	else
	{
		member_session$_update__Session({
			_id : len
			, d_ex : r.d_ex//date_expire;
			, mid : r.mid//member id;
			, sid : r.sid//session id;
		});
	}

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	var n = member_session$validation__addDoc( d );
	if( 0 == n )
	{
		print( new Error( "[ Error ] - member_session$validation__addDoc" ) );
		print( "-- [ E ] - member_session$addDoc():{uint}----------return 0;" );
		return 0;
	}

	//--------------------------------------------------;


	var o = member_session$_findOne___id( bo._id );
	if( o )
	{
		print( "!!member_session$_update__Session({" );
		printjson( r );

	}
	else
	{
		print( "!!member_session$_getCol().insert({" );
		printjson( r );
		member_session$_getCol().insert({
			_id : NumberInt( len )
			, d_ex : r.d_ex//date_expire;
			//, d_ex : new Date()//date_expire;
			, mid : r.mid//member id;
			, sid : r.sid//session id;
		});
	}

	print( "-- [ E ] - member_session$addDoc():{uint}----------return 1;" );
	return 1;
}