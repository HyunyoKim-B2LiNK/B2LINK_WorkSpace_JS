function( d )
{
	print( "-- [ S ] - messenger$update_id():{uint}----------" );

	print( "d._id :" + d._id );
	printjson( d );

	var r = messenger$validation__update_id( d );

	if ( 0 == r )
	{
		print( "-- [ S ] - messenger$update_id():{uint}---------- return 0" );
		return 0;
	}

	messenger$_getCol().update(
		{ _id : NumberInt( r._id ) }//search Object;
		, {
			$set : {
			   description : r.description
			   , description_cn : r.description_cn
			   , description_kr : r.description_kr
			   , description_us : r.description_us
			   , nm :  r.nm
			   , nm_f_cn : r.nm_cn
			   , nm_f_kr : r.nm_kr
			   , nm_f_us : r.nm_us
			}
		}
	);

	print( "-- [ S ] - messenger$update_id():{uint}---------- return 1" );
	return 1;
}
