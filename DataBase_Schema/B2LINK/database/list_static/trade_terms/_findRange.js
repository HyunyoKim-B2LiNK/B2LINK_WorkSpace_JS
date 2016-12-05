function( _id_gt, _id_lt )
{
	print( "-- [ S ] - trade_terms$_findRange():{Array}----------" );

	/*/
	var r = [];
	trade_terms$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			trade_terms$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - trade_terms$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - trade_terms$_findRange():{Array}----------" );

	return trade_terms$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
