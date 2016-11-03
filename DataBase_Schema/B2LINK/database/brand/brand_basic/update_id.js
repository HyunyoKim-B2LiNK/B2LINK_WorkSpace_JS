function( d )
{
	print( "-- [ S ] - brand_basic$update_id():{uint}----------" );

	print( "d._id :" + d._id );
	printjson( d );


	brand_basic$_getCol().update(
		{ _id : NumberInt( d._id ) }//search Object;
		, {
			$set : {
				 description : d.description

				, nm_cn : d.nm_cn
				, nm_kr : d.nm_kr
				, nm_us : d.nm_us

				, url : d.url
				, url_logo : d.url_logo
				, url_trademark : d.url_trademark
			}
		}
	);

	print( "-- [ S ] - brand_basic$update_id():{uint}---------- return 1" );
	return 1;
}
