function( _id_gt, _id_lt )
{
	print( "-- [ S ] - currency$_findRange():{Array}----------" );

	/*/
	var r = [];
	currency$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			currency$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - currency$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - currency$_findRange():{Array}----------" );

	return currency$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
