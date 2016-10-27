var d = {
	"_id" : 0

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

db.getSiblingDB( "_schema" ).list_static.insert( d );