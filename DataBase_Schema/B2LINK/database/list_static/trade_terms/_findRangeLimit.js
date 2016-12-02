function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - trade_terms$_findRange():{Array}----------" );

	/*/
	var r = [];
	trade_terms$_findRange()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] -trade_terms$_findRangeproduct_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - trade_terms$_findRange():{Array}----------" );

	return trade_terms$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
