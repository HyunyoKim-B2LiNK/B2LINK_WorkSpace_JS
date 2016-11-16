var d = {

	  "_id" : "product_basic"
	, "_id$member_public" : "uint"//{uint} - , 해당 제품 등록자
	, "_id$brand_basic" : "uint"//{uint} - _id$brand_basic , 해당 제품의 브랜드 _id
	, "_id$product_category" : "uint"//{uint} - 제품 카테고리	제품 카탈로그 _ id

	, "barcode" : "string"//{String} barcode number	실제 바코드 넘버	제품 바코드 번호

	, "date_register" : "array"//{Array} - date_register - [ 2016, 10, 27, 12, 20, 30 ];	제품 등록 일자.

	, "description" : "string"//{String} - description;	 제품 명세

	, "nm_kr" : "string"//{String} - name_kr;	제품 한글명
	, "nm_cn" : "string"//{String} - name_cn;	제품 중문명
	, "nm_us" : "string"//{String} - name_us;	제품 msds(안전물질 data sheet )

	, "msds" : "Boolean"//{Boolean} - MSDS 포함 여부


	, "url" : "string"//{String} - url - 제품 소개 페이지(공식 홈);
	, "url_file_product" : "string"//{String} - url_product_img - 제품 이미지 ;
	, "url_file_barcode": "string"//{String} - url_barcode - 바코드 이미지;
	, "url_file_msds" : "string"//{String} - msds 이미지 파일

	, "unit_weight" : "string"//{String} / mg, ml,
	, "weight" : "number"//{Number} - 최소 단위
};

//----------------------------------------------------------------------------------------------------;

db.getSiblingDB( "_schema" ).product.insert( d );
