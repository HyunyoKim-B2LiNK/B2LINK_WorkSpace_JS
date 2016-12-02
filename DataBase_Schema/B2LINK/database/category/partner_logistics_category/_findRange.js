function( _id_gt, _id_lt )
{
	print( "-- [ S ] - partner_logistics_category$_findRange():{Array}----------" );

	/*/
	var r = [];
	partner_logistics_category$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			partner_logistics_category$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - partner_logistics_category$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - partner_logistics_category$_findRange():{Array}----------" );

	return partner_logistics_category$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
