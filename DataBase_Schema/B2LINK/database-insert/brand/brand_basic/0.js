var a = [
	{
		"_id$member_basic" : NumberInt( 0 )

		, "nm_cn" : "爸爸的礼物"
		, "nm_kr" : "파파레서피"
		, "nm_us" : "papa recipe"

		//, "date_register" : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 12, "mi" : 20, "se" : 30 }
		, "date_register" : [ NumberInt(2016), NumberInt(10), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]

		, "description" : ""

		, "url" : "http://paparecipe.com/"
		, "url_logo" : ""
		, "url_trademark" : ""
	}
	, {
		"_id$member_basic" : NumberInt( 0 )

		, "nm_cn" : "爸爸的礼物0"
		, "nm_kr" : "파파레서피0"
		, "nm_us" : "papa recipe0"

		//, "date_register" : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 12, "mi" : 20, "se" : 30 }
		, "date_register" : [ NumberInt(2016), NumberInt(10), NumberInt(27), NumberInt(12), NumberInt(20), NumberInt(30) ]

		, "description" : ""

		, "url" : "http://paparecipe0.com/"
		, "url_logo" : ""
		, "url_trademark" : ""
	}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "brand" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "brand_basic$addDoc( " + JSON.stringify( io ) + " );" );
};
