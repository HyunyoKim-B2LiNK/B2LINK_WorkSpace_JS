function( ids )
{
	print( "-- [ S ] - partner_delivery$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !partner_delivery$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - partner_delivery$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( partner_delivery$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - partner_delivery$remove_ids():{uint}----------" );
	return 1;
}
