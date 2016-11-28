var a = [
	{
		"_id$member" : NumberInt( 0 )
		, "_id$title" : NumberInt( 0 )
		, "date_regist" : [ NumberInt(2016), NumberInt(0), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]
		, "description" : "대표"
		, "description_kr" : "대표"
		, "description_cn" : "대표"
		, "description_us" : "대표"
		, "divison" : "구매부"
		, "email" : "b2link@b2link.co.kr"
		, "messenger" : { "_id$messenger_type" : NumberInt ( 0 ) , "id" : "b2link@b2link.co.kr" }
		, "nm" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_us" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee" , "m" : ""}
		, "phone_cell" : "111111111"
		, "phone_fax" : "111111111"
		, "phone_tel" : "111111111"
	}
	, {
		"_id$member" : NumberInt( 0 )
		, "_id$title" : NumberInt( 0 )
		, "date_regist" : [ NumberInt(2016), NumberInt(0), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]
		, "description" : "대표"
		, "description_kr" : "대표"
		, "description_cn" : "대표"
		, "description_us" : "대표"
		, "divison" : "구매부"
		, "email" : "b2link@b2link.co.kr"
		, "messenger" : { "_id$messenger_type" : NumberInt ( 0 ) , "id" : "b2link@b2link.co.kr" }
		, "nm" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_cn" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_kr" : { "a" : "이소형", "f" : "소형", "l" : "이"}
		, "nm_us" : { "a" : "leesohyung", "f" : "sohyung", "l" : "lee" , "m" : ""}
		, "phone_cell" : "111111121"
		, "phone_fax" : "111111111"
		, "phone_tel" : "111111111"
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "partner" );
	db0.partner_person.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "partner_person$addDoc( " + JSON.stringify( io ) + " );" );
};
