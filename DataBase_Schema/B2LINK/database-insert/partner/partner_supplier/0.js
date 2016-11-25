var a = [
	{
		"_id$country" : NumberInt( 0 )
		, "_ids$member" : { "manager" : NumberInt( 0 ) , "register" : NumberInt( 0 )}
	    , "_id$member_public__register" : NumberInt( 0 )
		, "_id$member_public__manager" : NumberInt( 0 )

	    , "address" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_kr" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_cn" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_us" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"

	    , "company_registration_number" : "1234586789"

	    , "date_regist" : [ NumberInt(2016), NumberInt(0), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]
	    , "description" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_kr" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_cn" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_us" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"

	    , "email" : "b2lin@b2link.co.kr"

	    , "nm" : "비투링크"
	    , "nm_cn" : "비투링크"
	    , "nm_kr" : "비투링크"
	    , "nm_us" : "b2link"
	    , "nm_ceo" : { "a" : "이소형", "f" : "소형", "l" : "이"}
	    , "nm_ceo_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
	    , "nm_ceo_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
	    , "nm_ceo_us" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee" , "m" : ""}

	    , "phone_fax" : "+82-2-1588-3366"
	    , "phone_tel" : "+82-2-1588-3366"

	    , "url" : "www.b2link.co.kr"
	}
	, {
		"_id$country" : NumberInt( 0 )
	    , "_ids$member" : { "manager" : NumberInt( 0 ) , "register" : NumberInt( 0 )}
	    , "_id$partner_person": NumberInt( 0 )

	    , "address" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_kr" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_cn" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"
	    , "address_us" : "서울시 강남구 테헤란로 4길 14 (역삼동, 미림타워)"

	    , "company_registration_number" : "1234582389"

	    , "date_regist" : [ NumberInt(2016), NumberInt(0), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]

	    , "description" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_kr" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_cn" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"
	    , "description_us" : "비투링크는 아시아 Kbeauty시장에서 가장영향력 있는 IT 회사"

	    , "email" : "b2lin@b2link.co.kr"

	    , "nm" : "비투링크"
	    , "nm_cn" : "비투링크"
	    , "nm_kr" : "비투링크"
	    , "nm_us" : "b2link"
	    , "nm_ceo" : { "a" : "이소형", "f" : "소형", "l" : "이" }
	    , "nm_ceo_cn" : { "a" : "이소형", "f" : "소형", "l" : "이" }
	    , "nm_ceo_kr" : { "a" : "이소형", "f" : "소형", "l" : "이" }
	    , "nm_ceo_us" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee" , "m" : "" }

	    , "phone_fax" : "+82-2-1588-3366"
	    , "phone_tel" : "+82-2-1588-3366"

	    , "url" : "www.b2link.co.kr"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "partner" );
	db0.partner_supplier.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "partner_supplier$addDoc( " + JSON.stringify( io ) + " );" );
};
