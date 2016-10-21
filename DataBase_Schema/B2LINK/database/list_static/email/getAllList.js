function()
{
	var r = [];
	email$_findAll().forEach( function ( doc ){
		email$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}