function( d )
{
	print( "-- [ S ] - partner_buyer_category$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = partner_buyer_category$findOne({
		cd_category : d.cd_category
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - product_basic$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - product_basic$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
