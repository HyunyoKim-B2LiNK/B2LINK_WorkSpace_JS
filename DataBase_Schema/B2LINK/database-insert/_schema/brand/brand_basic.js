var d = {
	 "cd_brand" : "string"
	, "nm_kr" : "string"
	, "nm_cn" : "string"
	, "nm_us" : "string"
	, "url" : "string"
	, "logo_url" : "string"
	, "trademark_url": "string"
	, "register_date" : "string"
	, "register_person" : "string"
	, "description" : "string"
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).brand.brand_basic.insert( d );
