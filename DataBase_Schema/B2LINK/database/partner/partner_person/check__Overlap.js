function( d )
{
	print( "-- [ S ] - partner_person$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = partner_person$findOne({
		phone_cell : d.phone_cell
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - partner_person$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - partner_person$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
