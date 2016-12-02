function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - currency$_findRange():{Array}----------" );

	/*/
	var r = [];
	currency$_findRange()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] -currency$_findRangeproduct_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - currency$_findRange():{Array}----------" );

	return currency$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
