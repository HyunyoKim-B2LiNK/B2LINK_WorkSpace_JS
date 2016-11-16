function( _id_gt, _id_lt )
{
	print( "-- [ S ] - brand_basic$_findRange():{Array}----------" );

	/*/
	var r = [];
	brand_basic$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
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
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}