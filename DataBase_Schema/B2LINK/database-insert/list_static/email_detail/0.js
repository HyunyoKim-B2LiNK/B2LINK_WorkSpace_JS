/*/
{
	TLD : "com"//Top Level Domain;
	, ccTLD : ""//Country Code Top Level Domain - kr, us, jp;
	, gTLD : "com"//Generic Top Level Domain - com, net, org;
	, SLD : "gmail"//Second Level Domain;
	, c : "us"//Country;
}
//*/
var a = [
	  { SLD : "b2link", TLD : "co.kr", ccTLD : "kr", gTLD : "com", c : "kr" }
	, { SLD : "daum" , TLD : "net", ccTLD : "", gTLD : "net", c : "kr" }
	, { SLD : "gmail", TLD : "com", ccTLD : "", gTLD : "com", c : "us" }
	, { SLD : "naver", TLD : "com", ccTLD : "", gTLD : "com", c : "kr" }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
	db0.email_detail.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.email_detail.insert( io );
};