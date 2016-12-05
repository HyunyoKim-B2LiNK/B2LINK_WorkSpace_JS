function( d )
{
	print( "-- [ S ] - messenger$check__Overlap():{uint}----------" );

	//printjson( d );

	var r = messenger$findOne({
		nm : d.nm
	});
	//printjson( r );

	if( r )
	{
		print( "-- [ E ] - messenger$check__Overlap():{uint}----------return 1;" );
		return 1;
	}
	else
	{
		print( "-- [ E ] - messenger$check__Overlap():{uint}----------return 0;" );
		return 0;
	}
}
