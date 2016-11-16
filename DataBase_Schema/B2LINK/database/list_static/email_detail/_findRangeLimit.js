function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - email_detail$_findRange():{Array}----------" );

	/*/
	var r = [];
	email_detail$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			email_detail$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - email_detail$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - email_detail$_findRange():{Array}----------" );

	return email_detail$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}