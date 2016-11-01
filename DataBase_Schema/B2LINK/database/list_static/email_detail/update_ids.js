function( d )
{
	print( "-- [ S ] - email_detail$update_ids():{Object}----------" );
	var i = 0; iLen = d.length;
	var io;
	for ( ; i < iLen ; ++i )
	{
		io = d[i];
		print( "_id :" + io._id );
		var _id = NumberInt( io._id );
		email_detail$_getCol().update(
			{ _id : _id }//search Object;
			, {
				$set : {
					SLD : io.SLD
					, TLD : io.TLD
					, ccTLD : io.ccTLD
					, gTLD : io.gTLD
					, c : io.c
				}
			}
		);
	}


	print( "-- [ S ] - email_detail$update_ids():{Object}---------- return 1" );
	return 1;
}
