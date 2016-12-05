function( n )
{
	print( "-- [ S ] - partner_supplier_category$validation__remove_id():{uint}----------" );

	if( n > -1 )
	{
		print( "-- [ E ] - partner_supplier_category$validation__remove_id():{uint}----------return 1;" );
		return 1;
	}

	print( "-- [ E ] - partner_supplier_category$validation__remove_id():{uint}----------return 0;" );
	return 0;
}