var d = {
	"_id" : "member_session"

	, "sid" : "string"//session id;
	, "mid" : "string_email"//member id;

	, "d_ex" : "string"//date_expire;
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).member.insert( d );
