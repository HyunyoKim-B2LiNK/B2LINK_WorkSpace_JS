function( d )
{
	print( "-- [ S ] - partner_buyer$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = partner_buyer$findOne({
		company_registration_number : d.company_registration_number
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - partner_buyer$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - partner_buyer$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
