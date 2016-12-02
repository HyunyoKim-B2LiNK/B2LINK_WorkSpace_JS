var a = [
	{
		"cd_category" : "012345678901"
		, "description" : "이커머스"
		, "description_cn" : "이커머스"
		, "description_kr" : "이커머스"
		, "description_us" : "e-commerce"
		, "nm" : "이커머스"
		, "nm_kr" : "이커머스"
		, "nm_cn" : "이커머스"
		, "nm_us" : "e-commerce"
	}
	, {
		"cd_category" : "112345678901"
		, "description" : "드럭스토어"
		, "description_cn" : "드럭스토어"
		, "description_kr" : "드럭스토어"
		, "description_us" : "DrugStore"
		, "nm" : "드럭스토어"
		, "nm_kr" : "드럭스토어"
		, "nm_cn" : "드럭스토어"
		, "nm_us" : "DrugStore"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.partner_buyer_category.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.product_category.insert( io );
	db0.exec( "partner_buyer_category$addDoc( " + JSON.stringify( io ) + " );" );
};
