function()
{
	var r = [];
	postalcode_cn$_findAll().forEach( function( doc ){
		postalcode_cn$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}