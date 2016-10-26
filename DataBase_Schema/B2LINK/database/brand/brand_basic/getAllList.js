function()
{
	var r = [];
	brand_basic$_findAll().forEach( function( doc ){
		brand_basic$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}
