function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- product_category$_findAll ---------- ");
	product_category$_findAll().forEach( function( doc ){
		product_category$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - product_category():{Array} ---------- ");
	return r;
}
