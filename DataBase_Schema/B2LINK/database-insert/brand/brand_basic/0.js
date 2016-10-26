var a = [{
	"nm_cn" : "爸爸的礼物",
	"description" : "",
	"nm_kr" : "파파레서피",
	"logo_url" : "",
	"url" : "http://paparecipe.com/",
	"register_date" : "",
	"trademark_url" : "",
	"cd_brand" : "",
	"nm_us" : "papa recipe",
	"register_person" : ""
}];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "brand" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.brand_basic.insert( io );
};