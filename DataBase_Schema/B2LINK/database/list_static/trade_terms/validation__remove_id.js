function( n )
{
	print( "-- [ S ] - trade_terms$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - trade_terms$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - trade_terms$validation__remove_id():{uint}----------return 0;" );
	return 0;
}