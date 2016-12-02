function( d )
{
	print( "-- [ S ] - currency$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = currency$findOne({
		cd_n : d.cd_n
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - currency$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - currency$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
