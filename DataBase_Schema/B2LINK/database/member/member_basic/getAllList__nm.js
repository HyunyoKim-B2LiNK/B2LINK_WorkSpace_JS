function()
{
	var r = [];
	member_basic$_findAll().forEach( function( doc ){
		r.push( doc.nm );
	});
	return r;
}