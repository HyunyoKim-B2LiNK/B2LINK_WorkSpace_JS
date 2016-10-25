function()
{
	var r = [];
	email_detail$_findAll().forEach( function ( doc ){
		email_detail$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}