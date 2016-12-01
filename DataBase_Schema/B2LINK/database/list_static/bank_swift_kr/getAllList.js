function()
{
	var r = [];
	bank_swift_kr$_findAll().forEach( function( doc ){
		bank_swift_kr$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}