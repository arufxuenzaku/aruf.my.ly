/*<![CDATA[*/
/**anti click fraud**/
if("undefined"!=typeof xAu){
var clsAd,clsiAd,mxcAd,rstAd,nmcAd,ntwAd;

clsAd=null==ARtb.classAds?".adsbygoogle, .adB":ARtb.classAds;
clsiAd=null==ARtb.iframeAds?".adsbygoogle iframe":ARtb.iframeAds;
mxcAd=null==ARtb.maxAdClick?3:ARtb.maxAdClick;
rstAd=null==ARtb.resetTimeAd?3600:ARtb.resetTimeAd;
nmcAd=null==ARtb.nameCksAd?"AD_Click":ARtb.nameCksAd;
ntwAd=null==ARtb.txAdClick?"<span>Please don't be naughty if you don't want to support us..</span>":ARtb.txAdClick;

function dsbAD(){var e=qSell(clsAd);if(e.length>0)for(var t=0;t<e.length;t++)e[t].style.pointerEvents="none"}

var clcAd=xAR.gC(nmcAd);null!=clcAd&&mxcAd==clcAd&&dsbAD();
qSell(clsAd).forEach((e=>{e.addEventListener("click",(e=>{if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{var d=Number(xAR.gC(nmcAd));if(d<mxcAd){var A=d+1;xAR.sC(nmcAd,A,{secure:!0,"max-age":rstAd}),A==mxcAd&&dsbAD()}else e.preventDefault(),getid("tNtf").innerHTML=ntwAd}}))}));
window.addEventListener("blur",(function(){setTimeout((function(){for(var e=qSell(clsiAd),n=0;n<e.length;n++)if(document.activeElement==e[n]){if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{var t=Number(xAR.gC(nmcAd));if(t<mxcAd){var d=t+1;xAR.sC(nmcAd,d,{secure:!0,"max-age":rstAd})}else dsbAD(),getid("tNtf").innerHTML=ntwAd}getid("searchIn").focus(),getid("searchIn").blur()}}))}));
}
/*]]>*/