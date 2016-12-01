function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - bank_swift_cn$_findRange():{Array}----------" );

	/*/
	var r = [];
	bank_swift_cn$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			bank_swift_cn$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - bank_swift_cn$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - bank_swift_cn$_findRange():{Array}----------" );

	return bank_swift_cn$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}