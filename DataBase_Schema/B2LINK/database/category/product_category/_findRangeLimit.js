function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - product_category$_findRange():{Array}----------" );

	/*/
	var r = [];
	product_category$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - product_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - product_category$_findRange():{Array}----------" );

	return product_category$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
