function( ids )
{
	print( "-- [ S ] - partner_supplier_category$remove_ids():{uint}----------" );

	print( "ids : " + ids );

	var r = [];
	var p = { _id : null };
	var i=0, iLen=ids.length;
	for( ; i<iLen; ++i )
	{
		p._id = NumberInt( ids[ i ] );
		if( !partner_supplier_category$validation__remove_id( p._id ) )
		{
			print( "-- [ E ] - partner_supplier_category$remove_id():{uint}---------- fail;" );
			continue;
		}
		r.push( partner_supplier_category$_getCol().remove( p, 1 ) );
	}

	print( "result : " );
	printjson( r );

	print( "-- [ E ] - partner_supplier_category$remove_ids():{uint}----------" );
	return 1;
}
