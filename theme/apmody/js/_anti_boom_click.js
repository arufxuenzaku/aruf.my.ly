/*<![CDATA[*/
/**anti boom click**/
if("undefined"!=typeof xAu){
var clsAd,clsiAd,mxcAd,rstAd,nmcAd,ntwAd;

clsAd=null==ARtb.antiBoomAd.classAd?".adsbygoogle, .adB":ARtb.antiBoomAd.classAd;
clsiAd=null==ARtb.antiBoomAd.iframeAd?".adsbygoogle iframe":ARtb.antiBoomAd.iframeAd;
mxcAd=null==ARtb.antiBoomAd.maxClick?3:ARtb.antiBoomAd.maxClick;
rstAd=null==ARtb.antiBoomAd.resetTime?3600:ARtb.antiBoomAd.resetTime;
nmcAd=null==ARtb.antiBoomAd.name?"AD_Click":ARtb.antiBoomAd.name;
ntwAd=null==ARtb.antiBoomAd.msg?"Please don't be naughty if you don't want to support us..":ARtb.antiBoomAd.msg;

function dsbAD(){getid("tNtf").innerHTML="<span>"+ntwAd+"</span>";var n=qSell(clsAd);if(n.length>0)for(var t=0;t<n.length;t++)n[t].style.pointerEvents="none"}

var clcAd=xAR.gC(nmcAd);null!=clcAd&&mxcAd==clcAd&&dsbAD();
qSell(clsAd).forEach((e=>{e.addEventListener("click",(e=>{if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{var A=Number(xAR.gC(nmcAd));if(A<mxcAd){var c=A+1;xAR.sC(nmcAd,c,{secure:!0,"max-age":rstAd}),c==mxcAd&&dsbAD()}else e.preventDefault()}}))}));
window.addEventListener("blur",(function(){setTimeout((function(){for(var e=qSell(clsiAd),n=0;n<e.length;n++)if(document.activeElement==e[n]){if(null==xAR.gC(nmcAd))xAR.sC(nmcAd,1,{secure:!0,"max-age":rstAd});else{var c=Number(xAR.gC(nmcAd));if(c<mxcAd){var d=c+1;xAR.sC(nmcAd,d,{secure:!0,"max-age":rstAd})}else dsbAD()}getid("searchIn").focus(),getid("searchIn").blur()}}))}));
}
/*]]>*/