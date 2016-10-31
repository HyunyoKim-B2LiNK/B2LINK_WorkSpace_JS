function( d )
{
	print( "-- [ S ] - email_detail$update_id():{Object}----------" );
	print( "_id :" + d._id );

	var _id = NumberInt( d._id );
	delete d._id;

	email_detail$_getCol().update(
		{ _id : _id }//search Object;
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

	print( "-- [ S ] - email_detail$update_id():{Object}---------- return 1" );
	return 1;
}
