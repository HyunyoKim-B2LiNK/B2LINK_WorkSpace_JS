function( _id_gt, _id_lt, nLimit )
{
	print( "-- [ S ] - transaction_quote_sale_res$_findRange():{Array}----------" );

	/*/
	var r = [];
	transaction_quote_sale_res$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit )
		.forEach( function( doc ){
			transaction_quote_sale_res$_delete__getAllList( doc );
			r.push( doc );
		}
	);

	print( "-- [ E ] - transaction_quote_sale_res$_findRange():{Array}----------" );

	return r;
	/*/

	print( "-- [ E ] - transaction_quote_sale_res$_findRange():{Array}----------" );

	return transaction_quote_sale_res$_getCol()
		.find({ _id : { $gt : _id_gt, $lt : _id_lt } })
		.limit( nLimit );
	//*/
}
