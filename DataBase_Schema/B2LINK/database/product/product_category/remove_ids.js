function( ids )
{
	print( "-- [ S ] - product_cateogry$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !product_cateogry$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - product_cateogry$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( product_cateogry$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - product_cateogry$remove_ids():{uint}----------" );
	return 1;
}
