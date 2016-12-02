var a = [
	{
		"cd_category" : "012345678901"
		, "description" : "해운사"
		, "description_cn" : "해운사"
		, "description_kr" : "해운사"
		, "description_us" : "해운사"
		, "nm" : "해운사"
		, "nm_kr" : "해운사"
		, "nm_cn" : "해운사"
		, "nm_us" : "해운사"
	}
	, {
		"cd_category" : "112345678901"
		, "description" : "항공사"
		, "description_cn" : "항공사"
		, "description_kr" : "항공사"
		, "description_us" : "항공사"
		, "nm" : "항공사"
		, "nm_kr" : "항공사"
		, "nm_cn" : "항공사"
		, "nm_us" : "항공사"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "category" );
	db0.partner_logistics_category.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.product_category.insert( io );
	db0.exec( "partner_logistics_category$addDoc( " + JSON.stringify( io ) + " );" );
};
