function( _id_gt, _id_lt )
{
	print( "-- [ S ] - postalcode_cn$_findRange():{Array}----------" );

	/*/
	var r = [];
	postalcode_cn$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			postalcode_cn$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - postalcode_cn$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - postalcode_cn$_findRange():{Array}----------" );

	return postalcode_cn$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}