function( d )
{
	print( "-- [ S ] - member_basic$sign_in():void----------" );
	printjson( d );

	var r = member_basic$findOne__uid( d.uid );
		//printjson( r );

	if( !r )
	{
		print( new Error( "계정이 존재하지 않습니다" ) );
		return 0;
	}

	if( 0 == member_basic$_check__nSignInFail( r ) )
	{
		print( new Error( "SignIn 시도가 5회 이상 실패 하였습니다." ) );
		//수정 - 20161012 - 송선우 - 테스트 - 로그인 횟수 제한; 
		//return 0;
	}

	if( 1 == member_basic$_check__Password( r, d.upw ) )//'upw'가 일치한다.;
	{
		member_basic$validation__sign_in( d );
		print( "-- [ E ] - member_basic$sign_in():void----------" );
		return 1;
	}
	else
	{
		//*/
		if( 0 == member_basic$_update__nSignInFail( r._id, ++r.nSignInFail ) )
		{
			return 0;
		}
		//*/
	}
	print( "-- [ E ] - member_basic$sign_in():void----------" );
	return 0;
}