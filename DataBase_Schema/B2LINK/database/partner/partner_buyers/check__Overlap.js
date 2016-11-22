function( d )
{
	print( "-- [ S ] - partner_buyers$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = partner_buyers$findOne({
		code_registration : d.code_registration
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - partner_buyers$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - partner_buyers$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
