function( n )
{
	print( "-- [ S ] - email_detail$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - email_detail$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - email_detail$validation__remove_id():{uint}----------return 0;" );
	return 0;
}