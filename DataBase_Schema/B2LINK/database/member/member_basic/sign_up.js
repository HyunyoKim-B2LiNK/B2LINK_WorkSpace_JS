function( d )
{
	print( "-- [ S ] - member_basic$sign_up():void----------" );
	member_basic$validation__sign_up( d );
	var n = member_time$sign_up( d );
	if( n )
	{
		member_basic$addDoc( d );
		print( "-- [ E ] - member_basic$sign_up():void----------" );
		return 1;
	}
	print( "-- [ E ] - member_basic$sign_up():void----------" );
	return 0;
}