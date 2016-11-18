function()
{
	print( "---------- [ S ] - getAllList():{Array} ---------- ");
	var r = [];
	print( "---------- product_basic$_findAll ---------- ");
	product_basic$_findAll().forEach( function( doc ){
		//product_basic$_delete__getAllList( doc );
		// 20161106 박종하 개발하기
		r.push( doc );
	});
	print( "---------- [ E ] - getAllList():{Array} ---------- ");
	return r;
}
