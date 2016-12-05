function()
{
	print( "-- [ S ] - trade_terms$validation__update_id():{uint}----------" );
	if ( !d.hasOwnProperty( "_id" ) || !d.hasOwnProperty( "nm" )
		|| !d.hasOwnProperty( "nm_f") || !d.hasOwnProperty( "nm_f_cn") || !d.hasOwnProperty( "nm_f_kr") || !d.hasOwnProperty( "nm_f_us")
		|| !d.hasOwnProperty( "description" ) || !d.hasOwnProperty( "description_cn" ) || !d.hasOwnProperty( "description_kr" ) || !d.hasOwnProperty( "description_us" ) ))
	{
		print( "-- [ E ] - trade_terms$validation__update_id():{Object}----------return 0;" );
		return 0;
	}
	// type 비교 필요.
	d.nm = d.nm.toUpperCase();
	print( "-- [ E ] - trade_terms$validation__update_id():{uint}----------return 0;" );
	return 0;
}
