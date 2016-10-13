function( d )
{
	print( "-- [ S ] - member_basic$_check__nSignInFail():void----------" );

	var r = 0;
	if( 5 < d.nSignInFail ) r = 0;
	else r = 1;
	print( "d.nSignInFail : " + d.nSignInFail );

	print( "-- [ E ] - member_basic$_check__nSignInFail():void----------" );
	return r;
}