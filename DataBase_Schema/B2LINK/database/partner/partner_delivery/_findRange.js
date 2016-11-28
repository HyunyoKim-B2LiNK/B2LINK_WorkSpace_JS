function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_delivery$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_delivery$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			partner_delivery$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_delivery$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_delivery$_findRange():{Array}----------" );

	return partner_delivery$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
