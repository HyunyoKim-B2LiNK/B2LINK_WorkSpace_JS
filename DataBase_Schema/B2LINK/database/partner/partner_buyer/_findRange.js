function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_buyer$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_buyer$_findRange()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			partner_buyer$_findRange( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_buyer$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_buyer$_findRange():{Array}----------" );

	return partner_buyer$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
