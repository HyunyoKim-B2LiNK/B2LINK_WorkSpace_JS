function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - zipcode_kr$_findRange():{Array}----------" );

	/*/
	var r = [];
	zipcode_kr$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			zipcode_kr$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - zipcode_kr$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - zipcode_kr$_findRange():{Array}----------" );

	return zipcode_kr$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}