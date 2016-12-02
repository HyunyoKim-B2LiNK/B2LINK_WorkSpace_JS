function()
{
	var r = [];
	zipcode_kr$_findAll().forEach( function( doc ){
		zipcode_kr$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}