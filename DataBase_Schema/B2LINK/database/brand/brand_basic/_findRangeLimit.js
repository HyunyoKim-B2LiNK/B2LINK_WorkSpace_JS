function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - brand_basic$_findRange():{Array}----------" );

	/*/
	var r = [];
	brand_basic$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			brand_basic$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - brand_basic$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - brand_basic$_findRange():{Array}----------" );

	return brand_basic$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}