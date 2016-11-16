function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - product_basic$_findRange():{Array}----------" );

	/*/
	var r = [];
	product_basic$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - product_basic$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - product_basic$_findRange():{Array}----------" );

	return product_basic$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}