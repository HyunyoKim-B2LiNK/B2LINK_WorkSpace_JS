function( d )
{
	print( "-- [ S ] - member_session$checkSession__Sign_In():uint----------" );

	printjson( d );

	var r = member_basic$findOne__mid( d.mid );
	if( 0 == member_basic$_check__PasswordAndUpdate_nSignInFail( r, d.mpw ) )
	{
		print( "-- [ E ] - member_session$checkSession__Sign_In():uint----------if( 0 == member_basic$_check__PasswordAndUpdate_nSignInFail( r, d.mpw ) ) return 0;" );
		return 0;//Password가 틀림;
	}

	var r = member_session$_findOne__mid( d.mid );
		print( "- r -" );
		printjson( r );

	if( r )
	{
		//if( 0 == member_basic$_check__Password( r, d.mpw ) ) return 0;//Password가 틀림;
		//if( 0 == member_basic$_check__Password( r, d.mpw ) ) return new Error( "Password가 틀림" );//Password가 틀림;
		if( 0 == member_basic$sign_in( d ) )
		{
			print( "-- [ E ] - member_session$checkSession__Sign_In():uint----------if( 0 == member_basic$sign_in( d ) ) return;" );
			return 0;//Password가 틀림;
		}

		print( "r.d_ex : " + r.d_ex );
		if( r.d_ex )
		{
			print( "-- [ E ] - member_session$checkSession__Sign_In():uint----------if( r.d_ex ) return member_session$checkSession__Expired( d, r );" );
			return member_session$checkSession__Expired( d, r );
		}
	}

	var n = member_session$addDoc( d );
	print( "-- [ E ] - member_session$checkSession__Sign_In():uint----------var n = member_session$addDoc( d );" );
	return n;
}