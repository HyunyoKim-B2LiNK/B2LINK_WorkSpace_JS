function( ids )
{
	print( "-- [ S ] - member_basic$remove_ids__AllCols():{uint}----------" );
	print( "ids : " + ids );

	var r = member_basic$remove_ids( ids );
		print( "member_basic result : " );
		printjson( r );

	var r = member_session$remove_ids( ids );
		print( "member_session result : " );
		printjson( r );

	var r = member_time$remove_ids( ids );
		print( "member_time result : " );
		printjson( r );

	print( "-- [ E ] - member_basic$remove_ids__AllCols():{uint}----------" );
	return 1;
}