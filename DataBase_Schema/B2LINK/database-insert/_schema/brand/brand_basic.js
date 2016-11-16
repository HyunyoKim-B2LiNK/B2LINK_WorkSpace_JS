var d = {
	"_id" : "brand_basic"

	, "_id$member_public" : "uint"//{uint} - ;

	, "description" : "string"//{String} - description;

	, "nm_kr" : "string"//{String} - name_kr;
	, "nm_cn" : "string"//{String} - name_cn;
	, "nm_us" : "string"//{String} - name_us;

	//, "date_register" : "object"//{Object} - date_register - { "y" : 2016, "m" : 10, "d" : 27, "ho" : 12, "mi" : 20, "se" : 30 };
	, "date_register" : "array"//{Array} - date_register - [ 2016, 10, 27, 12, 20, 30 ];

	, "url" : "string"//{String} - url - www.b2link.co.kr;
	, "url_logo" : "string"//{String} - url_logo;
	, "url_trademark": "string"//{String} - url_trademark;
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).brand.insert( d );
