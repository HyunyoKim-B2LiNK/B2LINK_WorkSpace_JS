var a = [
	{
		"_id$brand_basic" : NumberInt(0), "_id$product_category" : NumberInt(0), "barcode" : "12345678", "description" : "핸드크림"

		, "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"
		, "msds" :  false
		, "date_register" : [2015, 07, 06, 21, 09, 55]

		, "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
		, "url_file_product" : ""
		, "url_file_barcode": ""
		, "url_file_msds" : ""
		, "weight" : 0.0,"unit_weight" : "mg"
	}
	, {
		"_id$brand_basic" : NumberInt(0), "_id$product_category" : NumberInt(0)	, "barcode" : "12345678", "description" : "매직타올"

		, "nm_kr" : "new 페이셜 매직타올"
		, "nm_cn" : "温和洁面巾"
		, "nm_us" : "NEW FACIAL MAGIC TOWEL"
		, "msds" :  false
		, "date_register" : [2015, 7, 6, 21, 9, 55]

		, "url" : ""
		, "url_file_product" : ""
		, "url_file_barcode": ""
		, "url_file_msds" : ""
		, "weight" : 0.0
		, "unit_weight" : "mg"
	}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "product" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.product_basic.insert( io );
	//db0.exec( "product_basic$addDoc( " + JSON.stringify( io ) + " );" );
};
