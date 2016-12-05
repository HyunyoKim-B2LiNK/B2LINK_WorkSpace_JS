function()
{
	print( "-- [ S ] - messenger$validation__update_id():{uint}----------" );
	if ( !d.hasOwnProperty( "_id" ) || !d.hasOwnProperty( "nm" )
		|| !d.hasOwnProperty( "nm_cn" ) || !d.hasOwnProperty( "nm_kr" ) || !d.hasOwnProperty( "nm_us" )
		|| !d.hasOwnProperty( "description" ) || !d.hasOwnProperty( "description_cn" ) || !d.hasOwnProperty( "description_kr" ) || !d.hasOwnProperty( "description_us" ) ))
	{
		print( "-- [ E ] - messenger$validation__update_id():{Object}----------return 0;" );
		return 0;
	}

	print( "-- [ E ] - messenger$validation__update_id():{uint}----------return 0;" );
	return 0;
}
