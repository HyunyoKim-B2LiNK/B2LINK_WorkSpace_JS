var a = [
	{ "_id" : NumberInt( 0 ), "mid" : "thdtjsdn@gmail.com"
		, "d_l_si": { "y" : 2016, "m" :  9, "d" : 21, "ho" : 13, "mi" :  2, "se" : 0 }
		, "d_su"  : { "y" : 2016, "m" :  9, "d" : 21, "ho" : 13, "mi" :  2, "se" : 0 }
		, "d_sec" : { "y" : 0   , "m" :  0, "d" :  0, "ho" :  0, "mi" :  0, "se" : 0 } }
	, { "_id" : NumberInt( 1 ), "mid" : "raybirdy@gmail.com"
		, "d_l_si": { "y" : 2016, "m" : 10, "d" : 27, "ho" : 13, "mi" :  2, "se" : 0 }
		, "d_su"  : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 15, "mi" : 35, "se" : 0 }
		, "d_sec" : { "y" : 0   , "m" :  0, "d" :  0, "ho" :  0, "mi" :  0, "se" : 0 } }
	, { "_id" : NumberInt( 2 ), "mid" : "ciruin@gmail.com"
		, "d_l_si": { "y" : 2016, "m" : 10, "d" : 27, "ho" : 13, "mi" :  2, "se" : 0 }
		, "d_su"  : { "y" : 2016, "m" : 10, "d" : 27, "ho" : 15, "mi" : 35, "se" : 0 }
		, "d_sec" : { "y" : 0   , "m" :  0, "d" :  0, "ho" :  0, "mi" :  0, "se" : 0 } }
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "member" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "member_time$sign_up( " + JSON.stringify( io ) + " );" );
};