var a = [
	{
		, "_id$product_category" : -1//{uint} - 제품 상위 카테고리	제품 카테고리 _ id
		, "description" : "생활용품"//{String} - description;	 카테고리 명세
		, "nm_kr" : "생활용품"//{String} - name_kr;	카테고리명 한글
		, "nm_cn" : "생활용품"//{String} - name_cn;	카테고리명 중문
		, "nm_us" : "생활용품"//{String} - name_us;	카테고리명 영문
	}
	, {
		, "_id$product_category" : -1//{uint} - 제품 상위 카테고리	제품 카테고리 _ id
		, "description" : "화장품"//{String} - description;	 카테고리 명세
		, "nm_kr" : "화장품"//{String} - name_kr;	카테고리명 한글
		, "nm_cn" : "화장품"//{String} - name_cn;	카테고리명 중문
		, "nm_us" : "cosmetic"//{String} - name_us;	카테고리명 영문
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "product" );
	db0.product_basic.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	db0.product_category.insert( io );
	//db0.exec( "product_basic$addDoc( " + JSON.stringify( io ) + " );" );
};