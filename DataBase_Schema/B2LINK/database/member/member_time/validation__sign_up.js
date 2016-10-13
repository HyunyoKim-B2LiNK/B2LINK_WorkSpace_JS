function( d )
{
	print( "-- [ S ] - member_time$validation__sign_up():void----------" );
	try
	{
		d.d_l_si = {};
		d.d_su = {};
		d.d_sec = {};

		setDate__YMD_HoMiSe( d.d_l_si );
		setDate__YMD_HoMiSe( d.d_su );
		setDate__YMD_HoMiSe( d.d_sec );

		d.rank = NumberInt( -1 );
	}
	catch( er )
	{
		print( "member_time$validation__sign_up Error : " + er );
		print( "-- [ E ] - member_time$validation__sign_up():void----------" );
		return 0;
	}
	print( "-- [ E ] - member_time$validation__sign_up():void----------" );
	return 1;
}