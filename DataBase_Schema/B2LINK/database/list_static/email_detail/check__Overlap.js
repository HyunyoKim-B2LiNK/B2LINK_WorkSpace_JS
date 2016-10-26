function( d )
{
	print( "-- [ S ] - email_detail$check__Overlap():{uint}----------" );

	printjson( d );

	email_detail$validation__check__Overlap( d );

	var r = email_detail$findOne( d );
	printjson( r );

	if( null == r )
	{
		print( "-- [ E ] - email_detail$check__Overlap():{uint}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - email_detail$check__Overlap():{uint}----------return 1;" );
	return 1;
}