function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - messenger$_findRange():{Array}----------" );

	/*/
	var r = [];
	messenger$_findRange()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] -messenger$_findRangeproduct_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - messenger$_findRange():{Array}----------" );

	return messenger$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
