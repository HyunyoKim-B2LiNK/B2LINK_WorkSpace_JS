function( _id_gt, _id_lt )
{
	print( "-- [ S ] - product_category$_findRange():{Array}----------" );

	/*/
	var r = [];
	product_category$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			product_category$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - product_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - product_category$_findRange():{Array}----------" );

	return product_category$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
