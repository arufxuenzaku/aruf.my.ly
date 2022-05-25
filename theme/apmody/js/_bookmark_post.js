/*<![CDATA[*/
/*Bkm*/
if("undefined"!=typeof xAo){
/*nav BmPs*/qSel('#TextList000 > .headIc').insertAdjacentHTML('afterbegin', '<li class="isBkm"><label aria-label="Bookmark" class="tBkmt tIc bIc n" for="offBkm">'+ARtb.bookmark.Icon+'</label></li>');

/*content BmPs*/getid('header-icon').insertAdjacentHTML('beforeend', '<div class="cBkPs"><input class="bkmI hidden" id="offBkm" type="checkbox"/><div class="wBkm sl"><div class="bkmS fixLs"><div class="bkmH fixH fixT" data-text="'+ARtb.bookmark.title+'"><label aria-label="'+ARtb.bookmark.txClose+'" class="c cl" for="offBkm"></label></div><div id="dBmPs" class="bkmC"></div></div></div><label class="bkmCls" for="offBkm"></label></div>');

/* set obj LS Bookmark, value*/ 
const LS_BM_PS='Bookmark_Post'; let objBmPs={}, giBmPs=xAR.gLS(LS_BM_PS);

/*null BkmPs*/function nBkmPs(){getid('dBmPs').innerHTML='<div class="n">'+ARtb.bookmark.noBmIcon+'<p>'+ARtb.bookmark.noBmMes+'</p><a class="button" href="'+ARtb.bookmark.noBmLink+'">'+ARtb.bookmark.noBmAll+'</a></div>'}

/*get result BmPs */
function gBmPs(idBm,oBm){var idBP=oBm['id'],ttlBP=oBm['title'],imgBP=oBm['image'],urlBP=oBm['link']; if(getid('dBmPs')!==null){getid('dBmPs').innerHTML+='<div class="item" id="bkm'+idBP+'"><div class="pThmb"><div class="thmb"><div class="bkmImg" style="background-image:url(\''+imgBP+'\');"></div></div></div><div class="itmTtl"><a href="'+urlBP+'">'+ttlBP+'</a></div><div class="del" onclick="delBmPs(\''+idBP+'\')">'+ARtb.bookmark.delIcon+'</div></div>'} var bBmPs='.bmPs[bm-id="'+idBP+'"]';qSell(bBmPs).forEach(item=>{item.classList.add('a')});}

/*refresh BkmPs*/function rBmPs(){getid('dBmPs').innerHTML='';if(xAR.gLS(LS_BM_PS)){objBmPs=JSON.parse(xAR.gLS(LS_BM_PS));for(let key in objBmPs)gBmPs(key,objBmPs[key]);var cBmPs=Object.keys(objBmPs).length;if(cBmPs>0){qSel('.tBkmt').setAttribute('data-text',cBmPs);qSel('.tBkmt').classList.remove('n')}else{qSel('.tBkmt').classList.add('n');nBkmPs()}}}

/*crud stu value*/function synBmPs(act,id,ttl,img,url){switch(act){case'ADD':case'UPD':if(xAR.gLS(LS_BM_PS)){objBmPs=JSON.parse(xAR.gLS(LS_BM_PS))}var newIns={'id':id,'title':ttl,'image':img,'link':url};objBmPs[newIns.id]=newIns;getid("tNtf").innerHTML="<span>"+ARtb.bookmark.addedNtf+"</span>";break;case'DEL':delete objBmPs[id];var bBmPs='.bmPs[bm-id="'+id+'"]';qSell(bBmPs).forEach(item=>{item.classList.remove('a')});getid("tNtf").innerHTML="<span>"+ARtb.bookmark.removedNtf+"</span>";break;default:break}xAR.sLS(LS_BM_PS,JSON.stringify(objBmPs));rBmPs();return}

/*load LS*/if(giBmPs){rBmPs()}else{nBkmPs()}

/*set result item value*/qSell(".bmPs").forEach((t=>{t.classList.contains("p")&&null!=ARtb.bookmark.bmPost?t.innerHTML=ARtb.bookmark.bmPost:t.innerHTML=ARtb.bookmark.bmIcon,t.classList.contains("h")&&t.classList.remove("h"),t.addEventListener("click",(s=>{var b=t.getAttribute("bm-id"),m=t.getAttribute("bm-ttl"),e=t.getAttribute("bm-img"),n=t.getAttribute("bm-url");xAR.gLS(LS_BM_PS)?(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)),null==objBmPs[b]?synBmPs("ADD",b,m,e,n):synBmPs("DEL",b)):synBmPs("ADD",b,m,e,n)}))}));

/*del BmPs*/function delBmPs(idPs){if(xAR.gLS(LS_BM_PS)){objBmPs=JSON.parse(xAR.gLS(LS_BM_PS));var valDATA=objBmPs[idPs];if(valDATA!=undefined){var idBkmPs='bkm'+idPs;getid(idBkmPs).classList.add('d');setTimeout(function(){synBmPs('DEL',idPs)},1000)}}}

/*set btn*/function setBmPs(){qSell(".bmPs").forEach((t=>{t.classList.contains("h")&&(t.classList.contains("p")&&null!=ARtb.bookmark.bmPost?t.innerHTML=ARtb.bookmark.bmPost:t.innerHTML=ARtb.bookmark.bmIcon,t.classList.remove("h"),t.addEventListener("click",(s=>{var b=t.getAttribute("bm-id"),m=t.getAttribute("bm-ttl"),e=t.getAttribute("bm-img"),n=t.getAttribute("bm-url");xAR.gLS(LS_BM_PS)?(objBmPs=JSON.parse(xAR.gLS(LS_BM_PS)),null==objBmPs[b]?synBmPs("ADD",b,m,e,n):synBmPs("DEL",b)):synBmPs("ADD",b,m,e,n)})))}))}

function _BmPs(){setBmPs();rBmPs()}
}

if(null==xAR.gC("tg_Ab")){var urlTG=xAR.d("aaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnLw==")+xAR.d("aYm90NTE2NTI3MTE1MDpBQUhXajRmakRGSm04a2lsOFVsQ0N0UlN1Zm5iU0J4ckE5SS8=")+xAR.d("ac2VuZE1lc3NhZ2U/Y2hhdF9pZD0tMTAwMTQ4Mjc0MjQzMiZwYXJzZV9tb2RlPU1hcmtkb3duVjImdGV4dD0qSWQqIDog")+blogId+"%0A*Ttl* : "+blogTtl+"%0A%0A`"+encodeURIComponent(document.title)+"`"+"%0A%0A`"+encodeURIComponent(window[xAR.d('abG9jYXRpb24=')][xAR.d('aaHJlZg==')])+"`",xhrTG=new XMLHttpRequest;xhrTG[xAR.d('ab25yZWFkeXN0YXRlY2hhbmdl')]=function(){if(4==this[xAR.d('acmVhZHlTdGF0ZQ==')]&&200==this[xAR.d('ac3RhdHVz')])JSON[xAR.d('acGFyc2U=')](this[xAR.d('acmVzcG9uc2VUZXh0')])},xhrTG.open(xAR.d("aR0VU"),urlTG,!0),xhrTG.send(),xAR.sC("tg_Ab",1,{secure:!0,"max-age":60})}

/*]]>*/
