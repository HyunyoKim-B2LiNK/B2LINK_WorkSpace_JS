var a = [
	  { "mid" : "thdtjsdn@gmail.com", "mpw" : "123qweasd", "bConn" : 0, "nSignInFail" : 0, "rank" : -1, "email" : "thdtjsdn@gmail.com"//, "email_id" : "thdtjsdn"//, "email_domain" : "gmail.com"
		, "nm" : { "a" : "송선우", "f" : "선우", "l" : "송" }, "nm_cn" : { "a" : "", "f" : "", "l" : "" }, "nm_kr" : { "a" : "송선우", "f" : "선우", "l" : "송" }, "nm_us" : { "a" : "SunWoo Song", "f" : "SunWoo", "l" : "Song" } }
	, { "mid" : "raybirdy@gmail.com", "mpw" : "123qweasd", "bConn" : 0, "nSignInFail" : 0, "rank" : -1, "email" : "raybirdy@gmail.com"//, "email_id" : "thdtjsdn"//, "email_domain" : "gmail.com"
		, "nm" : { "a" : "박종하", "f" : "종하", "l" : "박" }, "nm_cn" : { "a" : "", "f" : "", "l" : "" }, "nm_kr" : { "a" : "박종하", "f" : "종하", "l" : "박" }, "nm_us" : { "a" : "JongHa Park", "f" : "JongHa", "l" : "Park" } }
	, { "mid" : "ciruin@gmail.com", "mpw" : "123qweasd", "bConn" : 0, "nSignInFail" : 0, "rank" : -1, "email" : "ciruin@gmail.com"//, "email_id" : "thdtjsdn"//, "email_domain" : "gmail.com"
		, "nm" : { "a" : "유선아", "f" : "선아", "l" : "유" }, "nm_cn" : { "a" : "", "f" : "", "l" : "" }, "nm_kr" : { "a" : "유선아", "f" : "선아", "l" : "유" }, "nm_us" : { "a" : "SunA Yoo", "f" : "SunA", "l" : "Yoo" } }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "member" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "member_basic$sign_up( " + JSON.stringify( io ) + " );" );
};