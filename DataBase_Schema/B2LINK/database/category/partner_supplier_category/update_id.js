function( d )
{
	print( "-- [ S ] - partner_supplier_category$update_id():{uint}----------" );

	print( "d._id :" + d._id );
	printjson( d );

	var r = partner_supplier_category$validation__update_id( d );

	if ( 0 == r )
	{
		print( "-- [ S ] - partner_supplier_category$update_id():{uint}---------- return 0" );
		return 0;
	}

	partner_supplier_category$_getCol().update(
		{ _id : NumberInt( r._id ) }//search Object;
		, {
			$set : {
			   description : r.description
			   , description_cn : r.description_cn
			   , description_kr : r.description_kr
			   , description_us : r.description_us
			   , nm :  r.nm
			   , nm_f : r.nm_f
			   , nm_f_cn : r.nm_f_cn
			   , nm_f_kr : r.nm_f_kr
			   , nm_f_us : r.nm_f_us
			}
		}
	);

	print( "-- [ S ] - partner_supplier_category$update_id():{uint}---------- return 1" );
	return 1;
}
