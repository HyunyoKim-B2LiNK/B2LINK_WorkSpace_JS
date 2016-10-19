/*/
{
	TLD : "com"//Top Level Domain;
	, ccTLD : ""//Country Code Top Level Domain - kr, us, jp;
	, gTLD : "com"//Generic Top Level Domain - com, net, org;
	, SLD : "gmail"//Second Level Domain;
}
//*/
var a = [
	  { SLD : "daum" , TLD : "net", ccTLD : "", gTLD : "net" }
	, { SLD : "gmail", TLD : "com", ccTLD : "", gTLD : "com" }
	, { SLD : "naver", TLD : "com", ccTLD : "", gTLD : "com" }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "list_static" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.email.insert( io );
};