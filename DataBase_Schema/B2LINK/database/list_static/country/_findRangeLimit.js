function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - country$_findRange():{Array}----------" );

	/*/
	var r = [];
	country$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			country$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - country$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - country$_findRange():{Array}----------" );

	return country$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}