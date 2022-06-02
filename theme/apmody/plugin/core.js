if(getid("AR_Shortlink")!=null||getid("AR_Safelink")!=null){
  ldCss("https://rawcdn.githack.com/arufxuenzaku/blogger/7aa45322094039f199495072225b87c507a803b0/theme/apmody/plugin/css/form.css","plugin-form-css",(function(){
    /* shortlink html */
    if(getid("AR_Shortlink")!=null){
      getid("AR_Shortlink").innerHTML = '<div class="inp"><input type="text" class="i_lnk" placeholder="'+oShortlink.txInp+'"/><button class="button gen">'+oShortlink.tbGen+'</button></div><div class="rst h"><input type="text" class="r_lnk"/><button class="button cpy">'+oShortlink.tbCpy+'</button></div>';
    }
    /* end shortlink html */

    /* safelink html */
    if(getid("AR_Safelink")!=null){
      getid("AR_Safelink").innerHTML = '<div class="inp"><input type="text" class="i_lnk" placeholder="'+oSafelink.txInp+'"/><button class="button gen">'+oSafelink.tbGen+'</button></div><div class="rst h"><input type="text" class="r_lnk"/><button class="button cpy">'+oSafelink.tbCpy+'</button></div>';
    }
    /* end safelink html */
  }));
}

/*set safelink*/
  var l_arSL = qSell(oSafelink.class);
  for (var i = 0; i < l_arSL.length; i++) {
    l_arSL[i].setAttribute("href", blogUrl+"?"+oSafelink.param+"="+xAR.e(l_arSL[i].getAttribute("href")));
  }
/*end set safelink*/

/*set cookies SL*/
if(isHm==1){

if(xAR.pU(oSafelink.param)&&xAR.pU('xsl')){
  xAR.sC('AR_SL',xAR.pU(oSafelink.param),{secure:true,'max-age':3600});

  var grPgSL=xAR.rdm(oSafelink.PageSL);
  var idPageSL=grPgSL.split('#')[1];
  var gPageSL=grPgSL.replace('#'+idPageSL,'');
  xAR.sC('AR_SL_Page', idPageSL, {secure: true, 'max-age': 3600});
  window.location.href = gPageSL;

}else if(xAR.pU(oSafelink.param)){
  var urlDyLink=oSafelink.domain,aDyLink=window.location+'&xsl=1',dlRestAPI='https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key='+oShortlink.apiKey,xhrSTU=new XMLHttpRequest();
  xhrSTU.open('POST',dlRestAPI);
  xhrSTU.setRequestHeader('Accept','application/json');
  xhrSTU.setRequestHeader('Content-Type','application/json');
  xhrSTU.onreadystatechange=function(){
  if(xhrSTU.readyState===4){
    if(xhrSTU.status==200){
      var gUrlDyLink=JSON.parse(xhrSTU.responseText);
      window.location.href = gUrlDyLink.shortLink;
    }
  }};
  var ojDyLink = '{"dynamicLinkInfo": {"domainUriPrefix":"'+urlDyLink+'", "link":"'+aDyLink+'",}, "suffix": {"option":"SHORT"}}';
  xhrSTU.send(ojDyLink);
}

}
/*end set cookies SL*/

/*dec cookies SL*/
if(isIt==1&&xAR.gC("AR_SL")!=null&&xAR.gC("AR_SL_Page")==postId){

function gHs(url){if(url.indexOf('https')>=0){var m=url.match(/^https:\/\/[^/]+/)}else if(url.indexOf('http')>=0){var m=url.match(/^http:\/\/[^/]+/)}else{var m=url.match(/^\/\/[^/]+/)}return m?m[0]:null}

var adTop = getid("adTop");
var adBot = getid("adBot");
var pgfB = qSell(".postBody p");
var pBdf = pgfB[0];
var pBdl = pgfB[pgfB.length - 1];

pBdf.insertAdjacentHTML("beforebegin", '<p class="note" id="pWait1">'+oSafelink.dec.txWait+'</p>');
pBdf.insertAdjacentHTML("afterend", '<div id="SL_s1" style="display:block;text-align:center"><span style="pointer-events:none;opacity:0.4;" onclick="stC(\'pWait2\');">'+oSafelink.dec.txSpan1+'</span></div>');
pBdf.insertAdjacentElement("afterend", adTop);
getid("SL_s1").insertAdjacentElement("afterend", adBot);

pBdl.insertAdjacentHTML("beforebegin", '<p class="note hidden" id="pWait2">'+oSafelink.dec.txWait+'</p>');
pBdl.insertAdjacentHTML("afterend", '<div id="SL_s2" style="display:none;text-align:center"><span style="pointer-events:none;opacity:0.4;" onclick="stC(\'pWait1\');">'+oSafelink.dec.txWait+'</span></div>');

var tmLf1=oSafelink.dec.tmLf1,dTmr1=setInterval(function(){if(tmLf1<=0){clearInterval(dTmr1);getid("pWait1").innerHTML=oSafelink.dec.txNote1;qSel("#SL_s1>span").removeAttribute('style');remCt(getid("pWait2"),"hidden");getid("SL_s2").style.display="block";}else{getid("pWait1").innerHTML=oSafelink.dec.txNote1a+tmLf1+oSafelink.dec.txNote1b;}tmLf1-=1;},1000);

qSel("#SL_s1>span").addEventListener('click',function(){
  getid("SL_s2").insertAdjacentElement('beforebegin',adTop);
  getid("SL_s2").insertAdjacentElement('afterend',adBot);
  this.setAttribute('style','pointer-events:none;opacity:0.4');
if(oSafelink.dec.step==1){
  getid("pWait2").innerHTML=oSafelink.dec.txRsla+gHs(xAR.d(xAR.gC("AR_SL")))+oSafelink.dec.txRslb;
  getid("SL_s2").innerHTML = '<a href="'+xAR.d(xAR.gC("AR_SL"))+'" target="_blank" rel="noopener noreferrer">'+oSafelink.dec.txLink+'</a>';
  qSel('#SL_s2>a').addEventListener('click',function(){xAR.dC('AR_SL')});
  getid("pWait1").remove();
  getid("SL_s1").remove();
}else{
  var tmLf2=oSafelink.dec.tmLf2,dTmr2=setInterval(function(){if(tmLf2<=0){clearInterval(dTmr2);getid("pWait2").innerHTML=oSafelink.dec.txNote2;qSel("#SL_s2>span").removeAttribute('style');qSel("#SL_s2>span").innerHTML=oSafelink.dec.txSpan2;}else{getid("pWait2").innerHTML=oSafelink.dec.txNote2a+tmLf2+oSafelink.dec.txNote2b;}tmLf2-=1;},1000);
}
  stC('pWait2')
});

if(oSafelink.dec.step!=1){
qSel("#SL_s2>span").addEventListener('click',function(){
  getid("SL_s1").insertAdjacentElement('beforebegin',adTop);
  getid("SL_s1").insertAdjacentElement('afterend',adBot);
  getid("pWait1").innerHTML=oSafelink.dec.txRsla+gHs(xAR.d(xAR.gC("AR_SL")))+oSafelink.dec.txRslb;
  getid("SL_s1").innerHTML = '<a href="'+xAR.d(xAR.gC("AR_SL"))+'" target="_blank" rel="noopener noreferrer">'+oSafelink.dec.txLink+'</a>';
  qSel('#SL_s1>a').addEventListener('click',function(){xAR.dC('AR_SL')});
  getid("pWait2").remove();
  getid("SL_s2").remove();
  stC('pWait1');
});
}


}
/*dec set cookies SL*/

var xhrPlug = new XMLHttpRequest;
xhrPlug.onreadystatechange = function() {
  if (4 == this.readyState) {
    if (200 == this.status) var e = JSON.parse(this.responseText).feed.id.$t.split("-")[1];
    else if (1 == isPvb) {
      e = blogId
    } else e = "";
    var o = new XMLHttpRequest;
    o.onreadystatechange = function() {
      if (4 == this.readyState && 200 == this.status) {
        var o = JSON.parse(this.responseText).plugin,
          t = o.findIndex((function(o) {
            return o.id == e
          }));



if(t >= 0){console.group("%cPlugin APMODY","color:#57956A;font-size:12px"),1==o[t].shortlink?console.log("Shortlink : Registered"):console.log("Shortlink : Unregistered"),1==o[t].safelink?console.log("Safelink : Registered"):console.log("Safelink : Unregistered"),1==o[t].subtounlock?console.log("SubtoUnlock : Registered"):console.log("SubtoUnlock : Unregistered"),console.groupEnd();

/*SHORTLINK*/
if(o[t].shortlink==1){/*begin shortlink*/

if(getid("AR_Shortlink")!=null){
  qSel("#AR_Shortlink .gen").addEventListener("click", function(){

      var i_lnk=qSel('#AR_Shortlink .i_lnk');
      var v_link=i_lnk.value;
      var r_lnk=qSel('#AR_Shortlink .r_lnk');

    if(v_link!=""&&v_link.includes("://")){
      r_lnk.value=v_link;
      
      var urlRAstu = oShortlink.domain,
          gurlToRA = r_lnk["value"],
          uRestAPI = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key="+oShortlink.apiKey,
          xhrSTU = new XMLHttpRequest();
      xhrSTU["open"]("POST", uRestAPI);
      xhrSTU["setRequestHeader"]("Accept", "application/json");
      xhrSTU["setRequestHeader"]("Content-Type", "application/json");
      xhrSTU["onreadystatechange"] = function() {
          if (xhrSTU["readyState"] === 4) {
              if (xhrSTU["status"] == 200){
                  var dJsn = JSON["parse"](xhrSTU["responseText"]);
                  r_lnk["value"] = dJsn["shortLink"];
                  remCt(qSel("#AR_Shortlink .rst"), "h");
                  addCt(qSel("#AR_Shortlink .rst"), "a");
                  stC("AR_Shortlink");
              }
          }
      };
      var dataSTU = `${'{"dynamicLinkInfo": {"domainUriPrefix": "'}` + urlRAstu + `${'","link": "'}` + gurlToRA + `${'",}, "suffix": {"option": "SHORT"}}'}`;
      xhrSTU["send"](dataSTU);


    }else{
      i_lnk.focus();
      toastNotif(oShortlink.errMsg);
    }

  });

  qSel("#AR_Shortlink .cpy").addEventListener("click", function(){
    qSel('#AR_Shortlink .r_lnk').select(),document.execCommand('copy');
    toastNotif(oShortlink.txCpy);
    setTimeout(function(){
      addCt(qSel("#AR_Shortlink .rst"), "h");
    },2000);
  });
}

/*end shortlink*/}else{
  if(getid("AR_Shortlink")!=null){
    getid("AR_Shortlink").remove();
    toastNotif("Shortlink : <b>Unregistered</b>");
  }
}
/*END SHORTLINK*/



/*SAFELINK*/
if(o[t].safelink==1){/*begin safelink*/

if(getid("AR_Safelink")!=null){
  qSel("#AR_Safelink .gen").addEventListener("click", function(){

      var i_lnk=qSel('#AR_Safelink .i_lnk');
      var v_link=i_lnk.value;
      var r_lnk=qSel('#AR_Safelink .r_lnk');

    if(v_link!=""&&v_link.includes("://")){
      r_lnk.value=blogUrl+"?"+oSafelink.param+"="+xAR.e(v_link);
      
      var urlRAstu = oSafelink.domain,
          gurlToRA = r_lnk["value"],
          uRestAPI = "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key="+oSafelink.apiKey,
          xhrSTU = new XMLHttpRequest();
      xhrSTU["open"]("POST", uRestAPI);
      xhrSTU["setRequestHeader"]("Accept", "application/json");
      xhrSTU["setRequestHeader"]("Content-Type", "application/json");
      xhrSTU["onreadystatechange"] = function() {
          if (xhrSTU["readyState"] === 4) {
              if (xhrSTU["status"] == 200){
                  var dJsn = JSON["parse"](xhrSTU["responseText"]);
                  r_lnk["value"] = dJsn["shortLink"];
                  remCt(qSel("#AR_Safelink .rst"), "h");
                  addCt(qSel("#AR_Safelink .rst"), "a");
                  stC("AR_Safelink");
              }
          }
      };
      var dataSTU = `${'{"dynamicLinkInfo": {"domainUriPrefix": "'}` + urlRAstu + `${'","link": "'}` + gurlToRA + `${'",}, "suffix": {"option": "SHORT"}}'}`;
      xhrSTU["send"](dataSTU);


    }else{
      i_lnk.focus();
      toastNotif(oSafelink.errMsg);
    }

  });

  qSel("#AR_Safelink .cpy").addEventListener("click", function(){
    qSel('#AR_Safelink .r_lnk').select(),document.execCommand('copy');
    toastNotif(oSafelink.txCpy);
    setTimeout(function(){
      addCt(qSel("#AR_Safelink .rst"), "h");
    },2000);
  });
}

/*end safelink*/}else{
  if(getid("AR_Safelink")!=null){
    getid("AR_Safelink").remove();
  }
  if(getid("SL_s1")!=null){
    getid("SL_s1").remove();
    getid("SL_s2").remove();
    getid("pWait1").style.display="none";
  }
    toastNotif("Safelink : <b>Unregistered</b>");
}
/*END SAFELINK*/

}else{
  alert("invalid license"), window.location.href = "https://www.aruf.my.id";
}



      }
    }, o.open("GET", "https://script.google.com/macros/s/AKfycbyyoQj7JnyJIyQUMXfckLorkbXJSsEu3E1b7epQzBspQP_vA9o-0pySO8Gu_mPW6hly/exec", !0), o.send()
  }
}, xhrPlug.open("GET", "/feeds/posts/summary/?alt=json&max-results=0", !0), xhrPlug.send();
