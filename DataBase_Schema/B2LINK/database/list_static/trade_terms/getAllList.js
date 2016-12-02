function()
{
	print( "---------- [ S ] - trade_terms():{Array} ---------- ");
	var r = [];
	print( "---------- trade_terms$_findAll ---------- ");
	trade_terms$_findAll().forEach( function( doc ){
		trade_terms$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - trade_terms():{Array} ---------- ");
	return r;
}
