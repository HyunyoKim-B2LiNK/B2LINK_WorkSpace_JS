function( o, mpw )
{
	print( "-- [ S ] - member_basic$_check__PasswordAndUpdate_nSignInFail():void----------" );
	if( 0 == member_basic$_check__Password( o, mpw ) )
	{
		print( "o.nSignInFail : " + o.nSignInFail );
		member_basic$_update__nSignInFail( o._id, ++o.nSignInFail );
		print( "++o.nSignInFail : " + o.nSignInFail );

		print( "-- [ E ] - member_basic$_check__PasswordAndUpdate_nSignInFail():void----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - member_basic$_check__PasswordAndUpdate_nSignInFail():void----------return 1;" );
	return 1;
}