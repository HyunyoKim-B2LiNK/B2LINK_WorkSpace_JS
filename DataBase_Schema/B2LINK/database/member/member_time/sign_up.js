function( d )
{
	print( "-- [ S ] - member_time$sign_up():void----------" );
	var doc = member_basic$findOne__mid( d.mid );
	if( doc )
	{
		var doc = member_time$findOne__mid( d.mid )
		if( doc )
		{
			print( "-- [ E ] - member_time$sign_up():void----------if( doc )" );
			return 0;
		}
		else
		{
			member_time$validation__sign_up( d );
			member_time$addDoc( d );
			return 1;
		}
	}
	else
	{
		member_time$validation__sign_up( d );
		member_time$addDoc( d );
		print( "-- [ E ] - member_time$sign_up():void----------" );
		return 1;
	}
	print( "-- [ E ] - member_time$sign_up():void----------" );
	return 0;
}