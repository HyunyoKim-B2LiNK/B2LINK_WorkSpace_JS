function( n )
{
	print( "-- [ S ] - partner_logistics$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - partner_logistics$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - partner_logistics$validation__remove_id():{uint}----------return 0;" );
	return 0;
}