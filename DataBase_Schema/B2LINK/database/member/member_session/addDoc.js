function( d )
{
	print( "-- [ S ] - member_session$addDoc():void----------" );
	//printjson( d );
	if( 0 == member_basic$sign_in( d ) )
	{
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "Error : sign in fail" );
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "----------" );
		print( "-- [ E ] - member_session$addDoc():void----------if( 0 == member_basic$sign_in( d ) )" );
		return 0;
	}
	print(0)
	var len = member_basic$findOne__mid( d.mid )._id;
	print(1);
		print( "len : " + len );
	print(2);
	var r = member_session$validation__addDoc( d );
	if( 0 == r )
	{
		print( "-- [ E ] - member_session$addDoc():void----------if( 0 == r )" );
		return 0;
	}
	print(2);
	var o = member_session$_findOne___id( len );
	if( o )
	{
		member_session$_update__Session({
			_id : len
			, d_ex : r.d_ex//date_expire;
			, mid : r.mid//memberid;
			, sid : r.sid//sessionid;
		});
	}
	else
	{
		member_session$_getCol().insert({
			_id : NumberInt( len )
			, d_ex : r.d_ex//date_expire;
			, mid : r.mid//memberid;
			, sid : r.sid//sessionid;
		});
	}
	/*/

	//*/

	print( "-- [ E ] - member_session$addDoc():void----------" );
	return 1;
}