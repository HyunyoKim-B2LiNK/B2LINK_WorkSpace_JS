function( _id_gt, _id_lt )
{
	print( "-- [ S ] - bank_swift_kr$_findRange():{Array}----------" );

	/*/
	var r = [];
	bank_swift_kr$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			bank_swift_kr$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - bank_swift_kr$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - bank_swift_kr$_findRange():{Array}----------" );

	return bank_swift_kr$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}