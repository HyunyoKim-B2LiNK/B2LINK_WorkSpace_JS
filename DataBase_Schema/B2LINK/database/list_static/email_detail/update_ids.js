function( d )
{
	print( "-- [ S ] - email_detail$update_ids():{uint}----------" );

	printjson( d );

	var io;
	var i=0, iLen=d.length;
	for( ; i<iLen; ++i )
	{
		io = d[ i ];
		print( "io._id :" + io._id );

		email_detail$_getCol().update(
			{ _id : NumberInt( io._id ) }//search Object;
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

	print( "-- [ S ] - email_detail$update_ids():{uint}---------- return 1" );
	return 1;
}
