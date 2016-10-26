function()
{
	var r = [];
	brand_basic$_findAll().forEach( function( doc ){
		r.push( doc.nm_cn );
	});
	return r;
}
