var a = [
	{
		"_id$member_public" : 0

		, "description" : ""
		, "description_cn" : ""
		, "description_kr" : ""
		, "description_us" : ""


		, "nm" : "파파레서피"

		, "nm_cn" : "爸爸的礼物"
		, "nm_kr" : "파파레서피"
		, "nm_us" : "papa recipe"

		//, "date_regist" : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 12, "mi" : 20, "se" : 30 }
		, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]

		, "url" : "http://paparecipe.com/"
		, "url_logo" : ""
		, "url_trademark" : ""
	}
	, {
		"_id$member_public" : 0

		, "description" : ""
		, "description_cn" : ""
		, "description_kr" : ""
		, "description_us" : ""

		, "nm" : "파파레서피"
		, "nm_cn" : "爸爸的礼物0"
		, "nm_kr" : "파파레서피0"
		, "nm_us" : "papa recipe0"

		//, "date_regist" : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 12, "mi" : 20, "se" : 30 }
		, "date_regist" : [ 2016, 10, 27, 12, 20, 30 ]

		, "url" : "http://paparecipe0.com/"
		, "url_logo" : ""
		, "url_trademark" : ""
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "brand" );
	db0.brand_basic.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "brand_basic$addDoc( " + JSON.stringify( io ) + " );" );
};