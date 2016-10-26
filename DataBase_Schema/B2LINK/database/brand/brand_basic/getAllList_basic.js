function()
{
	var r = [];
	brand_basic$_findAll().forEach( function( doc ){
		delete doc.cd_brand;
		delete doc.logo_url;
		delete doc.trademark_url;
		delete doc.register_date;
		delete doc.register_person
		delete doc.description;
		r.push( doc );
	});
	return r;
}
