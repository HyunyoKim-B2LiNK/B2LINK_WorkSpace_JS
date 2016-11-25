function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_supplier$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_supplier$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			partner_supplier$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_supplier$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_supplier$_findRange():{Array}----------" );

	return partner_supplier$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
