function( d )
{
	print( "-- [ S ] - member_basic$validation__sign_up():void----------" );
	try
	{
		member_basic$validation__email( d );
	}
	catch( er )
	{
		print( colNm + "validation__sign_up Error : " + er );
		print( "-- [ E ] - member_basic$validation__sign_up():void----------return 0;" );
		return 0;
	}

	//sign up하면 무조건 rank(등급)은 -1;
	//추후 관리자가 등급 상향 시키기;
	d.rank = -1;

	print( "-- [ E ] - member_basic$validation__sign_up():void----------return 1;" );
	return 1;
}