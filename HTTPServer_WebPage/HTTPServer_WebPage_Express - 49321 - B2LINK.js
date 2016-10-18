console.log(1);STtwUtilBuffer.iconv=require("iconv-lite"),STtwUtilWeb_Express=Lib.Ttw.fnWeb_Express,STtwUtilWeb_Express.express=require("express"),STtwUtilWeb_Express.compression=require("compression"),STtwUtilWeb_Express.request=require("request"),STtwUtilWeb_Express.url=require("url");
global._$TATIC_CONST_SERVER_HTTP_EXPRESS__HOST = null;
global._$TATIC_CONST_SERVER_HTTP_EXPRESS__PORT = 49321;
//global._$TATIC_CONST_SERVER_HTTP_EXPRESS__ROOT = global.process.cwd() + "__root";
global._$TATIC_CONST_SERVER_HTTP_EXPRESS__ROOT = "../WebPage/root";

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
	bmp : "image/bmp"
	//, css : "text/css";
	//, html : "text/html"
	//, js : "application/javascript"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	//, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"
	, txt : "text/plain"
	, xml : "text/xml"
};

STtwUtilR.rTtwBaJS("eNoV,kk2P,q2QA,hX8Q,J+Gr,faEL,F9DS,Flro,AKW0,7KBA,aYG2,wPDR,/pt7,1zea,STRO,rjOd,m2g0,Gleu,TNy5,1UR3,Jq6s,v+A8,5zzn,0xff,/HW7,3X69,3Z5+,f/n3,7cPT,88sv,L7+9,PL39,+eUf,z58/,//T2,/vXj,27vX,j1/9,/d2P,n37+,/p8f,vv36,3euH,yChC,pBVb,QmGU,DbqK,1rC+,KhWm,iaoj,7ekx,Noq6,gB8U,GUrb,CVCd,GhZG,ep2A,5awO,4SWo,sEzK,Earj,QMeD,tc1w,kpMC,D7ti,htPx,cIE2,PVxR,FBKP,1tOv,4G3W,ANNL,QnBb,vcaC,ohtE,ocAj,j+MU,nF/F,EOmj,CJFv,KdCH,coBm,ufOx,JH6M,c0bl,6Ilr,Hv2B,mGN5,2cYY,p4Mc,Xa8Z,gYsn,cxw5,OsKR,70RQ,VBOC,9KMp,KmJc,4Jr+,AXtd,NxEu,eQsn,S4iw,vTYb,pM7D,Ftys,CWDk,ZIhu,tFEg,d/IO,Yk8m,SLaH,eyPf,3qJd,MRus,zGsL,itdS,dMpa,h1RI,9n0/,bQhW,jmSU,xoXg,1Cc9,uCrj,IfO7,NXYT,1UFf,WHhI,TcZH,W3MB,3P8J,9nma,w+bX,F8SE,eFia,KwHn,sSCA,1Zwa,Alc2,SBp5,gEtC,VTBs,gYU1,3JVI,UlpA,NB2O,sN34,HkSV,t1GV,DUF7,TVvY,6+AR,Z3vs,osfQ,ATgn,DaFL,kYeD,MuPw,IJcc,yO7B,g3Tp,h+iC,/R2c,EBtc,cq7h,bTQd,x325,Bznm,d/Gr,2Rqe,smLg,becO,9Dyv,UQuG,g924,u4JU,/QV2,7C5A,TWwK,dZhy,YNdy,CEO0,HAyj,ZIHV,kZuA,GSkx,Bq2u,ouX4,KXzb,naFQ,AwqT,R5NC,OJVm,IIvB,HILq,nuBI,jofV,VWEg,lqmN,4ck2,MbfP,AoZZ,4eHs,KiyC,TbyB,19QR,ONv3,odbB,ANmZ,3M86,9zIs,rNKF,4ppD,uGwg,YGxY,5V3t,PchT,Zzzm,ceXA,O3OP,kNyY,wErn,Y1h0,tsUy,Zzvw,7eKM,vkVy,WL3V,Holh,FkhE,dXRH,y2pI,VnaE,ZW4K,rLJJ,hWKq,efDX,6R6N,KiUw,tVjD,o55I,YOl1,h4XJ,ylBV,jQbj,hmNc,+Pt9,VmzT,QR6k,Q4hn,57P/,AL12,M/E=");

global.Instance.webExpressHTTPServer.add_Get( "/a", function( req, res, next ){
	var q = STtwUtilHttpServer.getQueryFromURL( req.url );

	STtwUtilHttpServerResponse.responseWrite_200_String( res, (parseFloat( q.a ) + parseFloat( q.b )).toString() );
});