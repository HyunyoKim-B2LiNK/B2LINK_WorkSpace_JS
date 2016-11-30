var a = [
	{
			{
			}
			,{
			}
			}
			]
	}
	, {
			{
			}
			,{
			}
			}
			]
	}
];

//----------------------------------------------------------------------------------------------------;

var db0 = db.getSiblingDB( "transaction_quote_sale" );
	db0.transaction_quote_sale_req.remove({});
var io;
var i=0, iLen=a.length;
for( ; i<iLen; ++i )
{
	var io = a[ i ];
		io._id = NumberInt( i );
	//db0.brand_basic.insert( io );
	db0.exec( "transaction_quote_sale_req$addDoc( " + JSON.stringify( io ) + " );" );
};
