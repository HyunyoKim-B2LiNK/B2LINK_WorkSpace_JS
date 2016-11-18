function()
{
	var r = [];
	brand_basic$_findAll().forEach( function( doc ){

		delete doc.description;

		delete doc.date_regist;

		delete doc.url_logo;
		delete doc.url_trademark;

		r.push( doc );
	});
	return r;
}
