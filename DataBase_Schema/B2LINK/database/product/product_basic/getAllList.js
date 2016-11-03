function()
{
	var r = [];
	product_basic$_findAll().forEach( function( doc ){
		//product_basic$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}
