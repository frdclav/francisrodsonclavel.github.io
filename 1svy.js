try{  // inbanner: 
var _AST_ID="000",ast_loaded_time=Number(new Date);var a,img,trusteAdded=false,viewabiltyTargetElement,iasPixelUrl="",moatPixelUrl="";if(typeof(TM_array)=="undefined"){var TM_array=[]}var uIdx=Math.random()+Date.now().valueOf();TM_array[uIdx]={Args:{}};TM_array[uIdx].Args.data=[{"preview":true,"pt":"","session":{"host":"rtb-fastcache02.tubemogul.com","sessId":"preview"},"bi":"","closeButtonDelay":0,"adPluginURL":"https://playtime.tubemogul.com/prod/html_direct/release/tmunit-57b617.js","adParts":[{"sequence":0,"assets":[{"clickURL":null,"description":null,"encodingRate":null,"mimeType":"text/javascript","trackAsAutoplay":null,"type":"survey","align":null,"showDuration":null,"layer":null,"timer":null,"parentAssetID":null,"id":11036531,"height":"480","loops":null,"inplayCall":null,"videoDuration":null,"delay":null,"timerPos":null,"width":"320","preserveAspectRatio":null,"x":null,"y":null,"detail":"https://playtime.tubemogul.com/ad_units/brandsights/brandsights_mobile_v1.1/brandsights_mobile.js?feedURL=https%3A%2F%2Fadtags.tubemogul.com%2Fapi%2F%3Fmethod%3DgetPreviewSurveyMethod%26vp%3D2%26survey_key%3DPkb127PowEXoaiouyQE8%26ts%3D1516794002%26request_id%3DuiCall%26v%3D1%26auth%3DCWPhBKyguoJV1D-VRe29qIDA77g&w=320&h=480","autoPlay":null,"showControls":null,"resourceType":"static"}],"width":"100%","action":null,"trigger":null,"type":"survey","height":"100%"}],"statsBaseURL":"stats.tubemogul.com/stats/1","displayType":"HTML5","adId":"qhg6ApaepV0Pbm71ikem","pixels":[],"feedId":"qhg6ApaepV0Pbm71ikem","adClass":"mobile_survey","price":"","paId":"qhg6ApaepV0Pbm71ikem","width":320,"assetBaseURL":"//playtime.tubemogul.com","wmode":"window","height":480}];var tm_auction_id=TM_array[uIdx].Args.data[0].session.sessId;TM_array[tm_auction_id]=TM_array[uIdx];delete TM_array[uIdx];TM_array[tm_auction_id].Feed=TM_array[tm_auction_id].Args.data[0];(function(){var b=false,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.JRClass=function(){};JRClass.extend=function(h){var g=this.prototype;b=true;var f=new this();b=false;for(var e in h){f[e]=typeof h[e]=="function"&&typeof g[e]=="function"&&c.test(h[e])?(function(i,j){return function(){var l=this._super;this._super=g[i];var k=j.apply(this,arguments);this._super=l;return k}})(e,h[e]):h[e]}function d(){if(!b&&this.init){this.init.apply(this,arguments)}}d.prototype=f;d.constructor=d;d.extend=arguments.callee;return d}})();(function(){if(typeof Object.assign!="function"){Object.defineProperty(Object,"assign",{value:function b(f,h){if(f==null){throw new TypeError("Cannot convert undefined or null to object")}var g=Object(f);for(var e=1;e<arguments.length;e++){var d=arguments[e];if(d!=null){for(var c in d){if(Object.prototype.hasOwnProperty.call(d,c)){g[c]=d[c]}}}}return g},writable:true,configurable:true})}})();TM_array[tm_auction_id].Util=function(TM){var isNull=function(obj){return typeof(obj)=="undefined"||!obj||obj==""},isEmpty=function(obj){for(var prop in obj){if(obj.hasOwnProperty(prop)){return false}}return true},flashDetect=function(){var osf,osfd,i,axo=1,v=0,nv=navigator;if(nv.plugins&&nv.mimeTypes.length){osf=nv.plugins["Shockwave Flash"];if(osf&&osf.description){osfd=osf.description;v=parseInt(osfd.substring(osfd.indexOf(".")-2))}}else{try{for(i=5;axo!=null;i++){axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);v=i}}catch(e){}}return v},detectMraid=function(cnt,successCallback,timeoutCallback){var cnt=cnt||1,maxCnt=1000,next=null;if(typeof mraid!=="undefined"){next=successCallback}else{if(cnt>maxCnt){next=timeoutCallback}else{setTimeout(detectMraid.bind(this,cnt+1,successCallback,timeoutCallback),20)}}if(!!next){next()}},firePixels=function(trigger){if(trigger=="Impression"){var p={};if(TM.Feed.preview){p.vinst="f"}TM.Pixels.fireAllPixels("imp","Impression",p)}else{console.log("Legacy code misuse :  TM.Util.firePixels not called by  fireMraidImpression('Impression') in HTML Ad Unit")}},random=function(){return parseInt(Math.random()*99999999)},loadImage=function(src,onload){var img=new Image();if(!!onload){img.onload=onload}img.src=src;return img},loadScript=function(src,callback,expectObject){try{var script=document.createElement("script");var loadTimeoutMs=2000;var loadTimeoutExpired=false;var loadTimeout;var handleLoadResult=function(ok,message){clearTimeout(loadTimeout);callback({result:ok?"READY":"ERROR",message:message||""})}.bind(this);if(!!callback){if(!!expectObject){var detectObject=function(){if(!!window[expectObject]){handleLoadResult(true)}else{if(!loadTimeoutExpired){setTimeout(detectObject.bind(this),50)}}};detectObject()}else{if(typeof script.onload=="object"){script.onload=handleLoadResult.bind(this,true);script.onerror=handleLoadResult.bind(this,false,"Script load error")}else{handleLoadResult(true)}}loadTimeout=setTimeout(function(){loadTimeoutExpired=true;handleLoadResult(false,"Timed out waiting for script load")}.bind(this),5000)}script.src=src;document.getElementsByTagName("head")[0].appendChild(script)}catch(e){}},loadCSS=function(src,callback){var css=document.createElement("link");css.rel="text/css";css.src=src;if(!!callback){css.onload=callback}document.getElementsByTagName("head")[0].appendChild(css)},appendHTML=function(html,styleTxt){var d=document.createElement("div");if(styleTxt){d.style.cssText=styleTxt}d.innerHTML=html;document.body.appendChild(d)},writeHTML=function(divid,str){var wroteDiv=false,i,type=TM.Feed.displayType,adcontent,condition="tubemogul.",scripts=document.getElementsByTagName("script");if(type!="mraid_3rd_party"&&type!="inbanner_3rd_party"){if(
/*@cc_on!@*/
true){for(i=0;i<scripts.length;i++){if(scripts[i].src.indexOf(condition)>0){adcontent=document.createElement("div");adcontent.id=divid;adcontent.innerHTML=str;if(scripts[i].parentNode.tagName!="HEAD"){scripts[i].parentNode.insertBefore(adcontent,scripts[i]);wroteDiv=true;break}}}}}if(!wroteDiv){adcontent=document.createElement("div");adcontent.id=divid;adcontent.innerHTML=str;adcontent.style.width=TM.Feed.width+"px";adcontent.style.height=TM.Feed.height+"px";document.body.appendChild(adcontent);TM.Util.executeScripts(adcontent.getElementsByTagName("script"));document.body.style.margin="0px"}},findInArray=function(list,field,value){if(!list||!field){return}for(var i=0;i<list.length;i++){if(list[i][field]==value){return list[i]}}return null},openClickThrough=function(clickThroughUrl){this.TM.Pixels.fireAllPixels("ct","ClickThrough");window.open(clickThroughUrl)},updateProtocolInFeed=function(){var pix,assetIdx,adPartIdx;if(TM.Feed.pixels){for(pix=TM.Feed.pixels.length-1;pix>=0;pix--){try{if(TM.Feed.pixels[pix].id=="TM_PI5"){TM.Feed.pixels[pix].detail=TM.Feed.pixels[pix].detail.replace("https://b","https://sb")}else{if(TM.Feed.pixels[pix].id.toString().substr(0,3)=="TM_"){TM.Feed.pixels[pix].detail=TM.Feed.pixels[pix].detail.replace("https://","https://")}}}catch(e){}}}for(adPartIdx=0;adPartIdx<TM.Feed.adParts.length;adPartIdx++){if(TM.Feed.adParts.assets){for(assetIdx=0;assetIdx<TM.Feed.adParts.assets.length;assetIdx++){TM.Feed.adParts.assets[assetIdx].detail=TM.Feed.adParts.assets[assetIdx].detail.replace("https://","https://")}}}},isThisYouTube=function(adParts){var n,i;for(n=0;n<adParts.length;n++){for(i=0;i<adParts[n].assets.length;i++){if(adParts[n].assets[i].mimeType.toLowerCase()=="youtube"){return true}}}return false},getBurl=function(){var burl="Unknown",burlHalves;try{var win=window;while(win.location.href=="about:blank"){win=win.parent}burl=win.location.href.toString();if(burl.indexOf("facebook.com/")>-1){burlHalves=burl.split("?");burl=burlHalves[0]+"---REDACTED_FOR_PRIVACY---"}}catch(error){}return burl},getAssetInAdPart=function(adPart,assetType){var i;for(i=0;i<adPart.assets.length;i++){if(adPart.assets[i]["type"]==assetType){return(adPart.assets[i])}}return null},getAssetInAdPartByType=function(adPartType,assetType){var i,asset;for(i=0;i<TM.Feed.adParts.length;i++){if(TM.Feed.adParts[i].type==adPartType){if(asset=getAssetInAdPart(TM.Feed.adParts[i],assetType)){return asset}}}return null},mimeTypeClass=function(assetObj){if(!!assetObj.mimeType){return assetObj.mimeType.split("/")[0]}return null},assetsIncludeFlash=function(){var H,i,hasFlash=false;for(H=0;H<TM.Feed.adParts.length&&hasFlash==false;H++){for(i=0;i<TM.Feed.adParts[H].assets.length&&hasFlash==false;i++){hasFlash=((!!TM.Feed.adParts[H].assets[i]["detail"]&&TM.Feed.adParts[H].assets[i]["detail"].indexOf(".swf")>-1)||TM.Feed.adParts[H].assets[i]["mimeType"]=="application/x-shockwave-flash")}}return hasFlash},receiveMessage=function(func){var eventMethod=window.addEventListener?"addEventListener":"attachEvent";var windowAddListener=window[eventMethod];var messageEvent=(eventMethod=="attachEvent")?"onmessage":"message";windowAddListener(messageEvent,func)},auditAdClass=(TM.Feed.adClass.toLowerCase()=="bap")?"bap":"ctp"+(isThisYouTube(TM.Feed.adParts))?"-yt-":"-tm-"+(TM.Feed.displayType.toLowerCase().indexOf("flash")>0)?"flash":"html5",sslProto=function(url){return url.replace(/^(http:|https:|)\/\//,"https://")},executeScripts=function(scripts,success,error){var i,scripts=Array.prototype.slice.call(scripts),head,remaining,node,handler,evalScript,callbacks;if(!scripts.length){return}callbacks={success:success,error:error||success};remaining=scripts.length;head=document.getElementsByTagName("head")[0]||document.documentElement;node=function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase()};handler=function(type){remaining--;if(remaining===0&&typeof callbacks[type]==="function"){callbacks[type]()}};evalScript=function(elem){var script=document.createElement("script"),data=(elem.text||elem.textContent||elem.innerHTML||"");if(elem.src){script.src=elem.src}else{try{script.appendChild(document.createTextNode(data))}catch(e){script.text=data}}head.appendChild(script);if(elem.src){script.onload=handler("success");script.onerror=handler("error")}else{handler("success")}head.removeChild(script)};for(i=0;scripts[i];i++){var script=scripts[i];if(script.parentNode){script.parentNode.removeChild(script)}evalScript(scripts[i])}},allowDocumentWrite=function(){var feed=TM.Feed,isAndroid=navigator.userAgent.match(/Android/i),inMobiMraid=window.imraid,is3rdParty=(feed.displayType in {inbanner_3rd_party:1,mraid_3rd_party:1}),androidSupportedClass=(feed.adClass in {mobile_app_inter:1,tablet_app_inter:1,display_app_inter:1});return((is3rdParty&&!inMobiMraid)||(isAndroid&&androidSupportedClass))};return{isNull:isNull,sslProto:sslProto,isEmpty:isEmpty,flashDetect:flashDetect,detectMraid:detectMraid,firePixels:firePixels,random:random,loadImage:loadImage,loadScript:loadScript,loadCSS:loadCSS,appendHTML:appendHTML,writeHTML:writeHTML,findInArray:findInArray,openClickThrough:openClickThrough,updateProtocolInFeed:updateProtocolInFeed,getBurl:getBurl,assetsIncludeFlash:assetsIncludeFlash,getAssetInAdPart:getAssetInAdPart,getAssetInAdPartByType:getAssetInAdPartByType,mimeTypeClass:mimeTypeClass,receiveMessage:receiveMessage,executeScripts:executeScripts,allowDocumentWrite:allowDocumentWrite}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Partners=function(d){var b="width:"+d.Feed.width+"px; height:"+d.Feed.height+"px; position:absolute; top:0px; left:0px; pointer-events:none;";var c=function(){if(d.Feed.preview||d.Feed.bt||d.lc_params.bt){return"https://choices.truste.com/ca?pid=efrontier01&aid=efrontier01&cid=0911ef120x240&c=efrontier01cont1&w="+d.Feed.width+"&h="+d.Feed.height+"&plc=tl&js=10"}else{return null}},e=function(){var h="<img style='"+b+" visibility:hidden;'/>";var g="<span id='te-clearads-js-efrontier01cont1'></span>";return h+g},f=function(g,i){if(scriptUrl=c()){var h=/clsid:D27CDB6E-AE6D-11cf-96B8-444553540000/.test(g);if(!h){navigator.mimeTypes["application/x-shockwave-flash"]=null;navigator.plugins["Shockwave Flash"]=null}var k=e();var j=document.createElement("div");j.innerHTML=e();i.appendChild(j);d.Util.loadScript(scriptUrl)}};return{load:f}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Pixels=function(i){var f;var q=function(c){f=c},b=function(c){var s={};s.sessId=i.Feed.session.sessId;s.paId=i.Feed.paId;s.psId=i.Feed.psId;s.page_url=i.Feed.page_url;s.rt=i.Feed.rt;s.did=i.Feed.did;s.didtype=i.Feed.didtype;s.burl=i.Util.getBurl();s.expaId=i.Feed.expaId;s.ast_id=_AST_ID;if(i.Feed.pt==c){s.bi=i.Feed.bi;s.price=i.Feed.price}switch(c){case"imp":s.adEngImpQP=i.Feed.adEngImpQP;case"vimp":s.w=i.Feed.width;s.h=i.Feed.height;if(i.Feed.preview||String(i.Feed.vtrusted).toLowerCase()=="t"){s.vinst="t"}if(i.Util.getAssetInAdPartByType("player","vast")){s.vinst="t"}break;case"ct":s.bi=i.Feed.bi;s.adEngClickThruQP=i.Feed.adEngClickThruQP;break;case"view":s.adEngViewQP=i.Feed.adEngImpQP;case"pct25":case"pct50":case"pct75":case"pct100":s.dur=f;if(String(i.Feed.vtrusted).toLowerCase()=="t"){s.vinst="t"}break}return s},m=function(s){var c={imp:"adEngImpQP",ct:"adEngClickThruQP",view:"adEngViewQP"};if(!!i.Feed[c[s]]){return i.Feed[c[s]]}else{return""}},r=function(c,u){var t="";queryString="?";for(var s in u){if(typeof s=="number"||!!u[s]){queryString+=t+s+"="+encodeURIComponent(String(u[s]));t="&"}}return queryString+m(c)},o=function(s,u){var c=i.Feed.statsBaseURL?("https://"+i.Feed.statsBaseURL):"https://stats-tm.everesttech.net/stats/1";c+="/"+s;var t=b(s);Object.assign(t,u);return c+r(s,t)},g=function(c,s){(new Image).src=o(c,s)},h=function(c){if(!!i.Feed.pixels){for(var s=i.Feed.pixels.length-1;s>=0;s--){if(i.Feed.pixels[s]&&String(i.Feed.pixels[s].trigger).toLowerCase()==c.toLowerCase()){if(d(c,i.Feed.pixels[s].type,i.Feed.pixels[s].detail,i.Feed.pixels[s].id)){i.Feed.pixels.splice(s,1)}}}}},d=function(s,t,v,x){var u=false,c,w;v=v.replace("[[random]]",i.Util.random());v=v.replace("[[timestamp]]",(new Date).getTime());v=v.replace("[timestamp]",(new Date).getTime());if(s.indexOf("TM_AUDIT")==0){if(t.toLowerCase().indexOf("mobile")!=0){u=true;s=null}else{c=Number(new Date);w=c-Number(i.lc_params.zerotime);v+=v.indexOf("?")>0?"&":"?";v+=s.toLowerCase().substring(s.lastIndexOf("_")+1,s.length)+"_delta="+w.toString();v+="&ad_type="+i.Util.auditAdClass;i.lc_params.zerotime=c}}switch(t){case"Flash":case"Image":(new Image).src=v;u=true;break;case"HTML":i.Util.appendHTML(v);u=true;break;case"Javascript":i.Util.loadScript(v);u=true;break;default:break}e(x,s,v,t);return u},j=function(c,s,t){g(c,t);h(s)},n=function(c,t){var s={sId:0,sessId:i.Feed.session.sessId,paId:i.Feed.paId,rt:"HTML5",ua:encodeURIComponent(navigator.userAgent)};if(t){Object.assign(s,t)}return i.Pixels.getStatsPixelUrl(c,s)},k=function(c,s){s|={};s.now=Number(new Date());s.time_since_ast_load=String(Number(new Date)-ast_loaded_time);(new Image).src=n(c,s)},l=5,e=function(v,c,u,s){try{if(!i.Util.isNull(v)&&c.indexOf("TM_AUDIT")!=0&&c.indexOf("TM_PI")!=0){if(pixel!==undefined){pixel.send(v,u,c,s)}if(typeof(PromoAdmin)!="undefined"){PromoAdmin.MediaPlacement.Test.firePixel(c.toLowerCase(),u)}}}catch(t){}if(v=="TM_PI5"){setTimeout(function(){if(--l>0){d(c,s,u,v)}},parseInt(Math.random()*5+5)*1000)}},p=function(c){if(i.Feed.preview||String(i.Feed.vtrusted).toLowerCase()=="t"){this.mraidViewabilityTimeout=setTimeout(function(){var s={vinst:"t",vwbl:"t",vpct:"100",awin:"t"};i.Pixels.fireStatsPixel("vimp",s)},c);mraid.addEventListener("viewableChange",function(){clearTimeout(this.mraidViewabilityTimeout)}.bind(this))}};return{fireStatsPixel:g,getStatsPixelUrl:o,fireFeedPixels:h,fireAllPixels:j,getDebugPixelUrl:n,fireDebugPixel:k,setAdDuration:q,logPixel:e,fireTrustedMraidVimpAfterDelay:p}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Embed=function(tm_auction_id){var embedAdPart,embedAsset,promoted_video,TM=TM_array[tm_auction_id],divId=tm_auction_id.replace(/[^a-zA-Z0-9]/g,"_"),getDivId=function(){return"TM_PlacementDiv_"+divId},getEmbedStyle=function(){return"width: "+TM.Feed.width+"px; height:"+TM.Feed.height+"px; overflow: hidden; border:none; padding:0px; margin:0px;"},getEmbedStr=function(){if(TM.Util.isNull(TM.Feed)||TM.Util.isEmpty(TM.Feed)){return null}var embed=null;embedAdPart=TM.Util.findInArray(TM.Feed.adParts,"type","player");if(embedAdPart==null){embedAdPart=TM.Util.findInArray(TM.Feed.adParts,"type","expand")}if(embedAdPart==null){embedAdPart=TM.Util.findInArray(TM.Feed.adParts,"type","display")}if(!TM.Util.isNull(embedAdPart)&&TM.Util.findInArray(embedAdPart.assets,"type","promoted_video")!=null){promoted_video=TM.Util.findInArray(embedAdPart.assets,"type","promoted_video")}if(!TM.Util.isNull(promoted_video)&&!TM.Util.isNull(promoted_video.clickURL)&&!TM.Util.isNull(TM.lc_params.bannerclickurl)){promoted_video.clickURL=TM.lc_params.bannerclickurl+encodeURIComponent(promoted_video.clickURL)}if(TM.Feed.displayType=="HTML5"&&!document.createElement("video").canPlayType){TM.Feed.displayType="New Flash"}switch(TM.Feed.displayType){case"New Flash":case"instream":var flash_version=TM.Util.flashDetect();if(flash_version<9){embed=getFallbackEmbed()}else{embed=getNewFlashEmbed()}break;case"mraid_3rd_party":case"inbanner_3rd_party":if(embedAsset=TM.Util.getAssetInAdPart(embedAdPart,"display_code")){TM.Pixels.fireDebugPixel("3pCodeWrite");embed=embedAsset.detail;embed=mraidProxyEmbed(embed)}break;case"HTML5":TM.Feed.rt="HTML5";embed=getHTML5Embed();break;default:break}if(TM.Util.isNull(embed)){embed=getErrorEmbed("getEmbedStr_returned_null")}return embed},getNewFlashEmbed=function(){var str="",wMode=(TM.Feed.bt?"opaque":TM.Feed.wmode),isIE=
/*@cc_on!@*/
false;if(isIE){str='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="TMFlashUnit" name="TMFlashUnit" width="'+TM.Feed.width+'" height="'+TM.Feed.height+'" ><param name="movie" value="'+TM.lc_params.adpluginurl+'" /><param name="allowFullScreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="wmode" value="'+wMode+'" /><param name="auditAdClass" value="'+TM.Util.auditAdClass+'" /><param name="sessId" value="'+TM.Feed.session.sessId+'" /><param name="flashvars" value="zeroTime='+TM.lc_params.zerotime+'" /></object>'}else{str='<embed id="TMFlashUnit" name="TMFlashUnit" width="'+TM.Feed.width+'" height="'+TM.Feed.height+'" src="'+TM.lc_params.adpluginurl+"?zeroTime="+TM.lc_params.zerotime+"&auditAdClass="+TM.Util.auditAdClass+"&sessId="+TM.Feed.session.sessId+'" type="application/x-shockwave-flash" wmode="'+wMode+'" allowscriptaccess="always" allowfullscreen="true" />'}return str},mraidProxyEmbed=function(displayCode){TM.mraid={proxy:{},container:{}};if(TM.Feed.adClass=="mobile_app_inter"){TM.MraidVpaid=function(vpaidObj){var vpaidObject=vpaidObj,adStarted=false,adDuration=0;var vpaidEvents={AdStarted:function(){adStarted=true},AdImpression:function(){},AdVideoStart:function(){adDuration=vpaidObject.getAdDuration();if(adDuration<=0||TM.Util.isNull(adDuration)){adDuration=30}TM.Pixels.adDuration=Math.floor(adDuration);TM.Pixels.fireAllPixels("view","View")},AdVideoFirstQuartile:function(){TM.Pixels.fireAllPixels("pct25","Complete25")},AdVideoMidpoint:function(){TM.Pixels.fireAllPixels("pct50","Complete50")},AdVideoThirdQuartile:function(){TM.Pixels.fireAllPixels("pct75","Complete75")},AdVideoComplete:function(){TM.Pixels.fireAllPixels("pct100","Completion")},AdClickThru:function(){},AdInteraction:function(){},AdDurationChanged:function(){},AdUserAcceptInvitation:function(){},AdUserMinimize:function(){},AdUserClose:function(){},AdPaused:function(){},AdPlaying:function(){},AdLog:function(){},AdError:function(){}},startAdWhenViewable=function(){if(!adStarted&&mraid.isViewable()){adStarted=true;vpaidObject.startAd()}};for(event in vpaidEvents){vpaidObject.subscribe(vpaidEvents[event],event)}if(TM.mraid.container.supports("vpaid")){TM.mraid.container.initVpaid(vpaidObject)}else{if(mraid.isViewable()){setTimeout(function(){vpaidObject.startAd()},100)}else{mraid.addEventListener("viewableChange",startAdWhenViewable)}}}}var mraidVpaid,impressionSent=false,sendImpression=function(){console.log("MRAID 3rd Party: sendImpression()");if(impressionSent){return}impressionSent=true;TM.Pixels.fireAllPixels("imp","Impression");TM.Pixels.fireTrustedMraidVimpAfterDelay(2000)},setupImpression=function(){console.log("MRAID 3rd Party: setupImpression()");if(mraid.isViewable()){sendImpression()}else{mraid.addEventListener("viewableChange",sendImpression)}},proxyMraidProperty=function(property){TM.mraid.container[property]=mraid[property];mraid[property]=TM.mraid.proxy[property]},setupMraidProxy=function(){var default3pCloseButtonTimeout=4000;var closeButtonTimeout=null;var closeButtonTimeoutDelay=TM.Feed.closeButtonDelay||default3pCloseButtonTimeout;TM.mraid.proxy={useCustomClose:function(state){if(closeButtonTimeout!==null){clearTimeout(closeButtonTimeout);closeButtonTimeout=null}TM.mraid.container.useCustomClose(state)},supports:function(feature){switch(feature){case"vpaid":proxyMraidProperty("initVpaid");return true;break;default:return TM.mraid.container.supports(feature);break}},open:function(clickURL){TM.Pixels.fireAllPixels("ct","ClickThrough");return TM.mraid.container.open(clickURL)},initVpaid:function(vpaidObject){if(typeof TM.MraidVpaid==="function"){mraidVpaid=new TM.MraidVpaid(vpaidObject)}},isViewable:function(){return TM.mraid.container.isViewable()}};proxyMraidProperty("useCustomClose");proxyMraidProperty("supports");proxyMraidProperty("isViewable");proxyMraidProperty("open");closeButtonTimeout=setTimeout(function(){TM.mraid.container.useCustomClose(false)},closeButtonTimeoutDelay)},handleMraidDetected=function(){console.log("MRAID 3rd Party: handleMraidDetected()");if(mraid.getState()=="default"){handleMraidReady()}else{mraid.addEventListener("ready",handleMraidReady)}},handleMraidDetectTimeout=function(){},handleMraidReady=function(){console.log("MRAID 3rd Party: handleMraidReady()");mraid.useCustomClose(true);setupMraidProxy();embed3pMraidAd();setupImpression()},handleWinplayReady=function(){TM.Util.initializeWinplay(tm_auction_id)},embed3pMraidAd=function(){var embed3pMraidTag,fireWindowOnload;if(TM.Util.allowDocumentWrite()){document.open();document.write("<div id='"+TM.Embed.getDivId()+"'>"+displayCode+"</div>");document.close()}else{fireWindowOnload=function(){var evt=document.createEvent("Event");evt.initEvent("load",false,false);window.dispatchEvent(evt)};embed3pMraidTag=document.createElement("div");embed3pMraidTag.id=TM.Embed.getDivId();embed3pMraidTag.innerHTML=displayCode;document.body.appendChild(embed3pMraidTag);TM.Util.executeScripts(embed3pMraidTag.getElementsByTagName("script"),fireWindowOnload);if(!TM.mraid.container.domRef){TM.mraid.container.domRef=embed3pMraidTag}}};try{TM.Util.detectMraid(1,handleMraidDetected,handleMraidDetectTimeout);embed="async"}catch(err){embed=displayCode}return embed},getHTML5Embed=function(){var ret={},adParts={},j,type,str;TM.Util.loadScript(TM.lc_params.adpluginurl+"?sessId="+TM.Feed.session.sessId,function(){new HTML5AdUnit(TM.Feed)});for(j=0;j<TM.Feed.adParts.length;j++){type=TM.Feed.adParts[j].type;ret[type]=TM.Feed.adParts[j]}adParts=ret;str="<div id='tm-video-container' style='width:"+TM.Feed.width+"px; height:"+TM.Feed.height+"px;'><video id='tm-video-space'></video></div>";return str},getFallbackEmbed=function(){var fallbackEmbed,fallbackNode=TM.Util.getAssetInAdPartByType("fallback","banner");if(fallbackNode){var ctUrl="",imgString='<img width="'+fallbackNode.width+'" height="'+fallbackNode.height+'" src="'+fallbackNode.detail+'"/>';if(!TM.Util.isNull(fallbackNode.clickURL)){if(!TM.Util.isNull(TM.lc_params.bannerclickurl)){fallbackNode.clickURL=TM.lc_params.bannerclickurl+encodeURIComponent(fallbackNode.clickURL)}var params={sId:0,sessId:TM.Feed.session.sessId,paId:TM.Feed.paId,rt:"HTML5",w:fallbackNode.width,h:fallbackNode.height,redir:fallbackNode.clickURL};ctUrl=TM.Pixels.getStatsPixelUrl("ct",params)}if(ctUrl==""){fallbackEmbed=imgString}else{fallbackEmbed="<a href=\"javascript:TM_array['"+tm_auction_id+"'].Util.openClickThrough('"+ctUrl+'\')" target="_new">'+imgString+"</a>"}}else{fallbackEmbed=getErrorEmbed("getFallbackEmbed_no_fallback_asset_in_feed")}return fallbackEmbed},getErrorEmbed=function(reason){return'<a href="https://www.tubemogul.com" target="_new"><img width="'+TM.Feed.width+'" height="'+TM.Feed.height+'" src="'+TM.lc_params.assetbase+'/adtags/no_javascript.jpg?reason="+ reason + "/></a>'},empty=function(){};return{getEmbedStr:getEmbedStr,getDivId:getDivId}}(tm_auction_id);TM_array[tm_auction_id].prepareFeeds=function(b){if(b.Util.isNull(b.lc_params)){b.lc_params={}}if(typeof tm_param_array!=="undefined"&&!b.Util.isNull(tm_param_array[b.Feed.session.sessId])){b.tm_params=tm_param_array[b.Feed.session.sessId]}if(!b.hasOwnProperty("tm_params")){if(typeof tm_params!=="undefined"&&!b.Util.isNull(tm_params)){b.tm_params=tm_params}}if(!b.hasOwnProperty("tm_params")){b.tm_params={}}for(a in b.tm_params){b.lc_params[a.toLowerCase()]=b.tm_params[a]}b.Util.updateProtocolInFeed();b.lc_params.assetbase=b.Util.sslProto(b.tm_params.assetbase?b.tm_params.assetbase:b.Feed.assetBaseURL);b.lc_params.adpluginurl=b.Feed.adPluginURL;if(b.Feed.adPluginURL.substr(0,4)!="http"){b.lc_params.adpluginurl=b.lc_params.assetbase+b.lc_params.adpluginurl}while(!!b.lc_params.pixels&&b.lc_params.pixels.length>0){b.Feed.pixels.push(b.lc_params.pixels.pop())}b.Feed.tagParams=b.lc_params;if(b.Feed.preview){b.Feed.session.sessId="preview"}else{if(!b.Util.isNull(b.lc_params.auction_id)){b.Feed.session.sessId=b.lc_params.auction_id;b.Pixels.fireDebugPixel("ASTLoaded")}}if(b.Util.isNull(b.lc_params.zerotime)){b.lc_params.zerotime=b.lc_params.ast_zerotime=Number(new Date)}else{b.Pixels.fireDebugPixel("AstLoadedFromBid",{time_to_load:Number(new Date)-b.lc_params.zerotime})}};TM_array[tm_auction_id].prepareCloseButtonDelay=function(c){if(typeof c.Feed.closeButtonDelay!=="undefined"&&Number(c.Feed.closeButtonDelay)==c.Feed.closeButtonDelay){c.Feed.closeButtonDelay=c.Feed.closeButtonDelay*1000}else{if(typeof c.lc_params.closedelay!=="undefined"&&Number(c.lc_params.closedelay)==c.lc_params.closedelay){c.Feed.closeButtonDelay=c.lc_params.closedelay}else{var b=c.Util.getAssetInAdPartByType("player","promoted_video");if(b&&typeof(b.videoDuration)==="number"){c.Feed.closeButtonDelay=(b.videoDuration>15)?5000:1000*b.videoDuration+1000}else{c.Feed.closeButtonDelay=5000}}}};TM_array[tm_auction_id].prepareAndEmbed=function(c){var b;var g=c.Feed.adClass.toLowerCase();var d;var f=function(){if(!d){if(c.Util.isNull(c.lc_params.impurl)){c.Pixels.fireStatsPixel("imp")}c.Pixels.fireFeedPixels("Impression")}c.Pixels.fireFeedPixels("NOW");c.Pixels.fireFeedPixels("TM_AUDIT_TAG");c.Pixels.fireFeedPixels("tag")};var e=function(){b=c.Embed.getEmbedStr();if(b!="async"){c.Util.writeHTML(c.Embed.getDivId(),b)}};d=(g in {mobile_app_inter:1,tablet_app_inter:1,display_app_inter:1,mobile_app_ctp:1,tablet_app_ctp:1,mraid_3rd_party:1});if(d){c.prepareCloseButtonDelay(c)}f();e();return(b)};function runMraidDisplay(){var c,b;c=TM_array[tm_auction_id].Util.getAssetInAdPartByType("display","overlay");switch(TM_array[tm_auction_id].Util.mimeTypeClass(c)){case"image":b=new MraidDisplayImageClass(c,TM_array[tm_auction_id]);break;case"text":b=new MraidDisplayHtmlClass(c,TM_array[tm_auction_id]);break;default:break}}function convertToStandardDisplay(){document.body.onclick=null;img=new Image();img.src="//playtime.tubemogul.com/adtags/no_javascript.jpg?reason=no_mraid_object";document.body.appendChild(img)}function go(c){var b,d=document.body;if(c.Feed.adClass=="display_app_inter"&&c.Feed.displayType!=="mraid_3rd_party"){c.Util.detectMraid(1,runMraidDisplay,convertToStandardDisplay)}else{c.prepareFeeds(c);b=c.prepareAndEmbed(c);c.Partners.load(b,d)}}function init(){if(TM_array[tm_auction_id].Feed.click_to_run){document.body.onclick=function(){document.body.onclick=null;go(TM_array[tm_auction_id])}}else{go(TM_array[tm_auction_id])}}TM=TM_array[tm_auction_id];if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){init()}else{document.addEventListener("DOMContentLoaded",init)};}catch(e) {
    img = new Image();
    img.src = 'https//playtime.tubemogul.com/adtags/no_javascript.jpg?reason=error_caught:'+encodeURIComponent( e.message );
    document.body.appendChild(img);
}