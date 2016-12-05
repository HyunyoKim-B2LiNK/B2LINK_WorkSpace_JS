var a = [
	{
		"cd_category" : "012345678901"
		, "description" : "재조판매업자"
		, "description_cn" : "재조판매업자"
		, "description_kr" : "재조판매업자"
		, "description_us" : "재조판매업자"
		, "nm" : "재조판매업자"
		, "nm_kr" : "재조판매업자"
		, "nm_cn" : "재조판매업자"
		, "nm_us" : "재조판매업자"
	}
	, {
		"cd_category" : "112345678901"
		, "description" : "총판"
		, "description_cn" : "총판"
		, "description_kr" : "총판"
		, "description_us" : "총판"
		, "nm" : "총판"
		, "nm_kr" : "총판"
		, "nm_cn" : "총판"
		, "nm_us" : "총판"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.partner_supplier_category.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.product_category.insert( io );
	db0.exec( "partner_supplier_category$addDoc( " + JSON.stringify( io ) + " );" );
};
