function()
{
	print( "---------- [ S ] - joinCol__getAllList():{Array} ---------- ");

	var r = [];

	var db_brand = db.getSiblingDB( "brand" );
	var db_member = db.getSiblingDB( "member" );

	var nm_brand , nm_member;

	product_basic$_findAll().forEach( function( doc ){
		//product_basic$_delete__getAllList( doc );
		//20161106 - 박종하 - 개발하기;
		//printjson( doc );

		nm_brand = db_brand.brand_basic.findOne( { _id : doc._id$brand_basic});
		doc.brand_name = nm_brand.nm_kr;
		delete doc._id$brand_basic;

		nm_member = db_member.member_public.findOne({ _id : doc._id$member_public });
		doc.nm_register = nm_member.nm.a;
		delete doc._id$member_public;

		r.push( doc );
	});

	print( "---------- [ E ] - joinCol__getAllList():{Array} ---------- ");
	return r;
}
