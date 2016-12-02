function( ids )
{
	print( "-- [ S ] - currency$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !currency$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - currency$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( currency$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - currency$remove_ids():{uint}----------" );
	return 1;
}
