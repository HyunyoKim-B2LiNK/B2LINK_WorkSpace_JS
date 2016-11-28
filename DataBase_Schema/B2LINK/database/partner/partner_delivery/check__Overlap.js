function( d )
{
	print( "-- [ S ] - partner_delivery$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = partner_delivery$findOne({
		company_registration_number : d.company_registration_number
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - partner_delivery$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - partner_delivery$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
