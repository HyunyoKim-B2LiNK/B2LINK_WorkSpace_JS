function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - partner_supplier_category$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_supplier_category$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			product_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_supplier_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_supplier_category$_findRange():{Array}----------" );

	return partner_supplier_category$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
