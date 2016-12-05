function()
{
	print( "-- [ S ] - partner_supplier_category$validation__update_id():{uint}----------" );
	if ( !d.hasOwnProperty( "_id" ) || !d.hasOwnProperty( "cd_category" )
		|| !d.hasOwnProperty( "description" ) || !d.hasOwnProperty( "description_cn" ) || !d.hasOwnProperty( "description_kr" ) || !d.hasOwnProperty( "description_us" )
		|| !d.hasOwnProperty( "nm" ) || !d.hasOwnProperty( "nm_cn" ) || !d.hasOwnProperty( "nm_kr" ) || !d.hasOwnProperty( "nm_us" ) ))
	{
		print( "-- [ E ] - partner_supplier_category$validation__update_id():{Object}----------return 0;" );
		return 0;
	}
	// type 비교 필요.

	print( "-- [ E ] - partner_supplier_category$validation__update_id():{uint}----------return 0;" );
	return 0;
}
