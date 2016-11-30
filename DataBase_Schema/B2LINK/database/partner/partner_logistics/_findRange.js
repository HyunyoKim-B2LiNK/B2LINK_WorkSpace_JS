function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_logistics$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_logistics$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			partner_logistics$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_logistics$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_logistics$_findRange():{Array}----------" );

	return partner_logistics$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
