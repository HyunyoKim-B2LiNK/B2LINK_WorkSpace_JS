function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_buyers$_findRange():{Array}----------" );

	/*/
	var r = [];
	product_cateogry$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			product_cateogry$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - product_cateogry$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_buyer$_findRange():{Array}----------" );

	return partner_buyers$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
