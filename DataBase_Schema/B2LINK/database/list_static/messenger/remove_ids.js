function( ids )
{
	print( "-- [ S ] - messenger$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !messenger$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - messenger$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( messenger$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - messenger$remove_ids():{uint}----------" );
	return 1;
}
