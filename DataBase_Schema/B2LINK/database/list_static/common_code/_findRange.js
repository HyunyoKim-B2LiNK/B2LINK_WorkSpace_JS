function( _id_gt, _id_lt )
{
	print( "-- [ S ] - common_code$_findRange():{Array}----------" );

	/*/
	var r = [];
	common_code$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			common_code$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - common_code$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - common_code$_findRange():{Array}----------" );

	return common_code$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}