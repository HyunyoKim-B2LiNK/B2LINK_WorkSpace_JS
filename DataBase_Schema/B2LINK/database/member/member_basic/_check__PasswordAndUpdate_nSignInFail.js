function( o, upw )
{
	print( "-- [ S ] - member_basic$_check__PasswordAndUpdate_nSignInFail():void----------" );
	if( 0 == member_basic$_check__Password( o, upw ) )
	{
		print( "o.nSignInFail : " + o.nSignInFail );
		member_basic$_update__nSignInFail( o._id, ++o.nSignInFail );
		print( "++o.nSignInFail : " + o.nSignInFail );
		return 0;
	}
	return 1;
	print( "-- [ E ] - member_basic$_check__PasswordAndUpdate_nSignInFail():void----------" );
}