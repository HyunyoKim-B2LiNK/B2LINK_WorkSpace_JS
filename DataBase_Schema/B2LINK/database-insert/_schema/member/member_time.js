var d = {
	"_id" : "member_time"

	, "d_l_si" : {
		"y" : "uint"//{uint} date_last_signin_year;
		, "m" : "uint"//{uint} date_last_signin_month;
		, "d" : "uint"//{uint} date_last_signin_day;
		, "ho" : "uint"//{uint} date_last_signin_hour;
		, "mi" : "uint"//{uint} date_last_signin_minute;
		, "se" : "uint"//{uint} date_last_signin_second;
	}

	, "d_su" : {
		"y" : "uint"//{uint} date_signUp_year;
		, "m" : "uint"//{uint} date_signUp_month;
		, "d" : "uint"//{uint} date_signUp_day;
		, "ho" : "uint"//{uint} date_signUp_hour;
		, "mi" : "uint"//{uint} date_signUp_minute;
		, "se" : "uint"//{uint} date_signUp_second;
	}

	, "d_sec" : {
		"y" : "uint"//{uint} date_secession_year;
		, "m" : "uint"//{uint} date_secession_month;
		, "d" : "uint"//{uint} date_secession_day;
		, "ho" : "uint"//{uint} date_secession_hour;
		, "mi" : "uint"//{uint} date_secession_minute;
		, "se" : "uint"//{uint} date_secession_second;
	}

	, "mid" : "string_email"//{String};
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );