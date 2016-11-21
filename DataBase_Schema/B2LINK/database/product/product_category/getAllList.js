function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- product_cateogry$_findAll ---------- ");
	product_cateogry$_findAll().forEach( function( doc ){
		product_cateogry$_delete__getAllList( doc );
		r.push( doc );
	});
	print( "---------- [ E ] - product_cateogry():{Array} ---------- ");
	return r;
}
