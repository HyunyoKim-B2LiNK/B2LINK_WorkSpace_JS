var d = {
	"_id" : "member_session_log"

	, "sid" : "string"//session id;
	, "mid" : "string_email"//member id;

	, "date" : new Date()

	, "d_ex" : {//date_expire;
		"y" : "uint"
		, "m" : "uint"
		, "d" : "uint"
		, "ho" : "uint"
		, "se" : "uint"
		, "mi" : "uint"
	}
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );