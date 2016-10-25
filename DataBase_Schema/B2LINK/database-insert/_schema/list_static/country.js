var d = {
	_id : "country"
	, cd_n : "number"
	, cd_us2 : "string_2"
	, cd_us3 : "string_3"
	, nm_cn : "string"
	, nm_kr : "string"
	, nm_us : "string"
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).list_static.insert( d );
