var a = [
	{
		"_id" : NumberInt( 0 )
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
			"y" : 0//{uint} date_secession_year;
			, "m" : 0//{uint} date_secession_month;
			, "d" : 0//{uint} date_secession_day;
			, "ho" : 0//{uint} date_secession_hour;
			, "mi" : 0//{uint} date_secession_minute;
			, "se" : 0//{uint} date_secession_second;
		}

		, "mid" : "thdtjsdn@gmail.com"//{String};
	}
	, {
		"_id" : NumberInt( 1 )

		, "d_l_si" : {
			"y" : 2016//{uint} date_last_signin_year;
			, "m" : 10//{uint} date_last_signin_month;
			, "d" : 27//{uint} date_last_signin_day;
			, "ho" : 13//{uint} date_last_signin_hour;
			, "mi" : 2//{uint} date_last_signin_minute;
			, "se" : 0//{uint} date_last_signin_second;
		}

		, "d_su" : {
			"y" : 2016//{uint} date_signUp_year;
			, "m" : 10//{uint} date_signUp_month;
			, "d" : 27//{uint} date_signUp_day;
			, "ho" : 15//{uint} date_signUp_hour;
			, "mi" : 35//{uint} date_signUp_minute;
			, "se" : 0//{uint} date_signUp_second;
		}

		, "d_sec" : {
			"y" : 0//{uint} date_secession_year;
			, "m" : 0//{uint} date_secession_month;
			, "d" : 0//{uint} date_secession_day;
			, "ho" : 0//{uint} date_secession_hour;
			, "mi" : 0//{uint} date_secession_minute;
			, "se" : 0//{uint} date_secession_second;
		}

		, "mid" : "raybirdy@gmail.com"//{String};
	}
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