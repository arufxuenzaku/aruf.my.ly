/*<![CDATA[*/if("undefined"!=typeof xAo){

/*adSense*/ if(1==ARtb.adSense){var ad=document.createElement("script");ad.setAttribute("crossorigin","anonymous"),ad.async=!0,ad.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+ARtb.pubAdSense;var adp=document.getElementsByTagName("script")[0];adp.parentNode.insertBefore(ad,adp),ad.onerror=function(){adBLockD()}} 

/*analytics*/if(1==ARtb.googleAnalytics){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://www.googletagmanager.com/gtag/js?id="+ARtb.idAnalytics;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)} 

var mRw1=atob('aHR0cHM6Ly9yYXdjZG4uZ2l0aGFjay5jb20vYXJ1Znh1ZW56YWt1L2Jsb2dnZXIv'),mRw2=atob('L3RoZW1lL2FwbW9keS8='),rwBkm=mRw1+"e31e447480087a1febf2dc2698a407a65eba1ee2"+mRw2+"_bookmark_post.js",rwCfd=mRw1+"e31e447480087a1febf2dc2698a407a65eba1ee2"+mRw2+"_click_fraud.js",rwGts=mRw1+"9f447959d627c6543ca022123499d61d8ec85ca5"+mRw2+"translate.js";

/*bookmarkPost*/
if(1==ARtb.bookmarkPost){
	const c=document.createElement("script");c.type="text/javascript",c.async=!0,c.src=rwBkm,document.body.appendChild(c)
	ldJs(rwBkm, "bkm-js", !0, "body");
}

/*clickFraud*/
if(1==ARtb.clickFraudDetect){
	ldJs(rwCfd, "cfd-js", !0, "body");
}

/**googleTranslate**/
if(1==ARtb.googleTranslate){
	ldJs(rwGts, "gts-js", !1, "body", function() {
		null!=getclass("goog-te-gadget-simple")[0]&&addCt(getclass("goog-te-gadget-simple")[0],"tIc")
	})
}

}/*]]>*/