function( d )
{
	print( "-- [ S ] - brand_basic$update_ids():{uint}----------" );

	printjson( d );

	var io;
	var i=0, iLen=d.length;
	for( ; i<iLen; ++i )
	{
		io = d[ i ];
		print( "io._id :" + io._id );

		brand_basic$_getCol().update(
			{ _id : NumberInt( io._id ) }//search Object;
			, {
				$set : {
					 description : io.description

					, nm_cn : io.nm_cn
					, nm_kr : io.nm_kr
					, nm_us : io.nm_us

					, url : io.url
					, url_logo : io.url_logo
					, url_trademark : io.url_trademark
				}
			}
		);
	}

	print( "-- [ S ] - brand_basic$update_ids():{uint}---------- return 1;" );
	return 1;
}