function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - partner_buyer$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_buyer$_findRange()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] -partner_buyer$_findRangeproduct_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_buyer$_findRange():{Array}----------" );

	return partner_buyer$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
