function()
{
	var r = [];
	bank_swift_us$_findAll().forEach( function( doc ){
		bank_swift_us$_delete__getAllList( doc );
		r.push( doc );
	});
	return r;
}