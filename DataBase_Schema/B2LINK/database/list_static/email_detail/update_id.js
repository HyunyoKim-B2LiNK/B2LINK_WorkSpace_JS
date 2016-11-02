function( d )
{
	print( "-- [ S ] - email_detail$update_id():{uint}----------" );

	print( "d._id :" + d._id );
	printjson( d );

	email_detail$_getCol().update(
		{ _id : NumberInt( d._id ) }//search Object;
		, {
			$set : {
				SLD : d.SLD
				, TLD : d.TLD
				, ccTLD : d.ccTLD
				, gTLD : d.gTLD
				, c : d.c
			}
		}
	);

	print( "-- [ S ] - email_detail$update_id():{uint}---------- return 1" );
	return 1;
}
