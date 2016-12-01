function()
{
	var r = [];
	postalcode_kr$_findAll().forEach( function( doc ){
		postalcode_kr$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}