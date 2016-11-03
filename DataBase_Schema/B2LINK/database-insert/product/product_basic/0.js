var a = [
	{
		"_id$brand_basic" : NumberInt( 0 )
		, "_id$product_category" : NumberInt( 0 )

		, "barcode" : "12345678"
		//, "barcode" : Number( 12345678 )
		, "date_register" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
		, "description" : "핸드크림", "msds" :  false
		, "nm_kr" : "시어버터 핸드크림_로즈", "nm_cn" : "护手霜_玫瑰", "nm_us" : "SHEA BUTTER HANDCREAM_ROSE"

		, "url" : "http://kr.loccitane.com/%EC%8B%9C%EC%96%B4-%EB%B2%84%ED%84%B0-%ED%95%B8%EB%93%9C-%ED%81%AC%EB%A6%BC,22,2,1133,198941.htm"
		, "url_file_product" : "", "url_file_barcode": "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
	}
	, {
		"_id$brand_basic" : NumberInt( 0 )
		, "_id$product_category" : NumberInt( 0 )

		, "barcode" : "82345679"
		//, "barcode" : Number( 82345679 )
		, "date_register" : [ NumberInt( 2015 ), NumberInt( 7 ), NumberInt( 6 ), NumberInt( 21 ), NumberInt( 9 ), NumberInt( 55 ) ]
		, "description" : "매직타올", "msds" :  false

		, "nm_kr" : "new 페이셜 매직타올", "nm_cn" : "温和洁面巾", "nm_us" : "NEW FACIAL MAGIC TOWEL"

		, "url" : "", "url_file_product" : "", "url_file_barcode": "", "url_file_msds" : "", "weight" : 0.0, "unit_weight" : "mg"
	}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "product" );
	db0.product_basic.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.product_basic.insert( io );
	//db0.exec( "product_basic$addDoc( " + JSON.stringify( io ) + " );" );
};