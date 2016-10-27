var a = [
	{
		"_id" : 0

		, "d_l_si" : {
			"y" : 2016//{uint} date_last_signin_year;
			, "m" : 9//{uint} date_last_signin_month;
			, "d" : 21//{uint} date_last_signin_day;
			, "ho" : 13//{uint} date_last_signin_hour;
			, "mi" : 2//{uint} date_last_signin_minute;
			, "se" : 0//{uint} date_last_signin_second;
		}

		, "d_su" : {
			"y" : 2016//{uint} date_signUp_year;
			, "m" : 9//{uint} date_signUp_month;
			, "d" : 21//{uint} date_signUp_day;
			, "ho" : 13//{uint} date_signUp_hour;
			, "mi" : 2//{uint} date_signUp_minute;
			, "se" : 0//{uint} date_signUp_second;
		}

		, "d_sec" : {
			"y" : ""//{uint} date_secession_year;
			, "m" : ""//{uint} date_secession_month;
			, "d" : ""//{uint} date_secession_day;
			, "ho" : ""//{uint} date_secession_hour;
			, "mi" : ""//{uint} date_secession_minute;
			, "se" : ""//{uint} date_secession_second;
		}

		, "mid" : "thdtjsdn@gmail.com"//{String};
	}
];
//----------------------------------------------------------------------------------------------------;
var db0 = db.getSiblingDB( "member" );
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i ){
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.exec( "member_time$sign_up( " + oDoc + " );" );
};