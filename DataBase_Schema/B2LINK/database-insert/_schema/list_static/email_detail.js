var d = {
	_id : "email_detail"

	, SLD : "string"
	, TLD : "string_2"
	, ccTLD : "string_2"
	, gTLD : "string"
	, c : "string_2"
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
