var a = [
	  { "cd_brand" : "" , "nm_kr" : "파파레서피", "nm_cn" : "爸爸的礼物", "nm_us" : "papa recipe", "url" : "http://paparecipe.com/", "logo_url" : "", "trademark_url" : "", "register_date" : "" , "register_person" : ""  , "description" : "" } ];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "brand" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.brand_basic.insert( io );
};