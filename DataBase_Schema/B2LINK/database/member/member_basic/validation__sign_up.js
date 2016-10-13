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
		print( "-- [ E ] - member_basic$validation__sign_up():void----------" );
		return 0;
	}
	print( "-- [ E ] - member_basic$validation__sign_up():void----------" );
	return 1;
}