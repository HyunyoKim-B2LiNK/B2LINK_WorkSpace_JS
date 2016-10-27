function( d )
{
	print( "-- [ S ] - member_basic$sign_in():uint----------" );
	printjson( d );

	var r = member_basic$findOne__mid( d.mid );
		//printjson( r );

	if( !r )
	{
		print( new Error( "계정이 존재하지 않습니다" ) );
		print( "-- [ E ] - member_basic$sign_in():uint----------if( !r ) return 0;" );
		return 0;
	}

	if( 0 == member_basic$_check__nSignInFail( r ) )
	{
		print( new Error( "SignIn 시도가 5회 이상 실패 하였습니다." ) );
		//수정 - 20161012 - 송선우 - 테스트 - 로그인 횟수 제한;
		//print( "-- [ E ] - member_basic$sign_in():uint----------if( 0 == member_basic$_check__nSignInFail( r ) ) return 0;" );
		//return 0;
	}

	if( 1 == member_basic$_check__Password( r, d.mpw ) )//'mpw'가 일치한다.;
	{
		member_basic$validation__sign_in( d );
		print( "-- [ E ] - member_basic$sign_in():uint----------return 1;" );
		return 1;
	}
	else
	{
		//*/
		if( 0 == member_basic$_update__nSignInFail( r._id, ++r.nSignInFail ) )
		{
			print( "-- [ E ] - member_basic$sign_in():uint----------if( 0 == member_basic$_update__nSignInFail( r._id, ++r.nSignInFail ) ) return 0;" );
			return 0;
		}
		//*/
	}
	print( "-- [ E ] - member_basic$sign_in():uint----------return 0;" );
	return 0;
}