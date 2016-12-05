function( _id_gt, _id_lt )
{
	print( "-- [ S ] - messenger$_findRange():{Array}----------" );

	/*/
	var r = [];
	messenger$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			messenger$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - messenger$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - messenger$_findRange():{Array}----------" );

	return messenger$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
