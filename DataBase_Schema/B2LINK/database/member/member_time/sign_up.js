function( d )
{
	print( "-- [ S ] - member_time$sign_up():{uint}----------" );
	printjson( d );

	var doc = member_basic$findOne__mid( d.mid );
		print( "- doc -" );
		printjson( doc );

	if( doc )
	{
		var doc = member_time$findOne__mid( d.mid );
		if( doc )
		{
			print( "-- [ E ] - member_time$sign_up():{uint}----------return 0 - if( doc )" );
			return 0;
		}
		else
		{
			print("- doc else d -");
			printjson( d );
			member_time$validation__sign_up( d );
			member_time$addDoc( d );
			return 1;
		}
	}
	else
	{
		print("- d -");
		printjson( d );
		member_time$validation__sign_up( d );
		member_time$addDoc( d );
		print( "-- [ E ] - member_time$sign_up():{uint}----------return 1;" );
		return 1;
	}
	print( "-- [ E ] - member_time$sign_up():{uint}----------return 0;" );
	return 0;
}