function( _id_gt, _id_lt )
{
	print( "-- [ S ] - transaction_quote_sale_req$_findRange():{Array}----------" );

	/*/
	var r = [];
	transaction_quote_sale_req$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		})
		.forEach( function( doc ){
			transaction_quote_sale_req$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - transaction_quote_sale_req$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - transaction_quote_sale_req$_findRange():{Array}----------" );

	return transaction_quote_sale_req$_getCol()
		.find({
			_id : {
				$gt : NumberInt( _id_gt )
				, $lt : NumberInt( _id_lt )
			}
		});
	//*/
}
