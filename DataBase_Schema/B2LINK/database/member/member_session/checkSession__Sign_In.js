function( d )
{
	print( "-- [ S ] - member_session$checkSession__Sign_In():void----------" );

	var r = member_basic$findOne__uid( d.uid );
	if( 0 == member_basic$_check__PasswordAndUpdate_nSignInFail( r, d.upw ) ) return 0;//Password가 틀림;

	var r = member_session$_findOne__uid( d.uid );
	printjson( r );
	if( r )
	{
		//if( 0 == member_basic$_check__Password( r, d.upw ) ) return 0;//Password가 틀림;
		//if( 0 == member_basic$_check__Password( r, d.upw ) ) return new Error( "Password가 틀림" );//Password가 틀림;
		if( 0 == member_basic$sign_in( d ) ) return 0;//Password가 틀림;
		if( r.d_ex )
		{
			print( "-- [ E ] - member_session$checkSession__Sign_In():void----------if( r.d_ex )" );
			return member_session$checkSession__Expired( d, r );
		}
	}
	var n = member_session$addDoc( d );
	print( "-- [ E ] - member_session$checkSession__Sign_In():void----------var n = member_session$addDoc( d );" );
	return n;
}