try{  // tm_mraid_display: 
var _AST_ID="000",ast_loaded_time=Number(new Date);var a,img,trusteAdded=false,viewabiltyTargetElement,iasPixelUrl="",moatPixelUrl="",isAdobeCTAd=false;if(typeof(TM_array)=="undefined"){var TM_array=[]}var uIdx=Math.random()+Date.now().valueOf();TM_array[uIdx]={Args:{}};TM_array[uIdx].Args.data=[{"preview":true,"pt":"","session":{"host":"rtb-cache-server01.rtb2.us-east-1a.private","sessId":"preview"},"bi":"","closeButtonDelay":0,"adPluginURL":"/flash/tunit-v1.55.1.swf","adParts":[{"sequence":0,"assets":[{"clickURL":null,"description":null,"encodingRate":500,"mimeType":"video/mp4","trackAsAutoplay":null,"type":"promoted_video","align":null,"showDuration":null,"layer":"0","timer":null,"ageGate":"null","parentAssetID":null,"id":12335420,"height":"480","loops":null,"inplayCall":"bannerClicks","videoDuration":null,"delay":null,"framework":"vpaid","timerPos":null,"pvId":"YoT7hTSkDXpcsQUSkXI3","width":"320","preserveAspectRatio":null,"x":"0","y":"0","detail":null,"autoPlay":null,"showControls":null,"resourceType":"static"},{"clickURL":null,"description":null,"encodingRate":null,"mimeType":"text/html","trackAsAutoplay":null,"type":"display_code","align":null,"showDuration":null,"layer":null,"timer":null,"ageGate":"null","parentAssetID":null,"id":12335421,"height":null,"loops":null,"inplayCall":null,"videoDuration":null,"delay":null,"timerPos":null,"width":null,"preserveAspectRatio":null,"x":null,"y":null,"detail":"<noscript>\n<a href=\"https://servedby.flashtalking.com/click/8/95676;3367929;0;209;0/?ft_width=320&ft_height=480&url=20843494\" target=\"_blank\">\n<img border=\"0\" src=\"https://servedby.flashtalking.com/imp/8/95676;3367929;205;gif;Adobe;MobileInterstitial/?\"></a>\n</noscript>\n<script src=\"mraid.js\"></script>\n<script language=\"Javascript1.1\" type=\"text/javascript\">\nvar ftClick = \"\";\nvar ftExpTrack_3367929 = \"\";\nvar ftX = \"\";\nvar ftY = \"\";\nvar ftZ = \"\";\nvar ftOBA = 1;\nvar ftContent = \"\";\nvar ftCustom = \"${CS_DEVICE_MODEL}\";\nvar ftSection = \"${USER_ID}\";\nvar ft320x480_OOBclickTrack = \"\";\nvar ftRandom = Math.random()*1000000;\nvar ftBuildTag1 = \"<scr\";\nvar ftBuildTag2 = \"</\";\nvar ftClick_3367929 = ftClick;\nif(typeof(ft_referrer)==\"undefined\"){var ft_referrer=(function(){var r=\"\";if(window==top){r=window.location.href;}else{try{r=window.parent.location.href;}catch(e){}r=(r)?r:document.referrer;}while(encodeURIComponent(r).length>1000){r=r.substring(0,r.length-1);}return r;}());}\nvar ftDomain = (window==top)?\"\":(function(){var d=document.referrer,h=(d)?d.match(\"(?::q/q/)+([qw-]+(q.[qw-]+)+)(q/)?\".replace(/q/g,decodeURIComponent(\"%\"+\"5C\")))[1]:\"\";return (h&&h!=location.host)?\"&ft_ifb=1&ft_domain=\"+encodeURIComponent(h):\"\";}());\nvar ftTag = ftBuildTag1 + 'ipt language=\"javascript1.1\" type=\"text/javascript\" ';\nftTag += 'src=\"https://servedby.flashtalking.com/imp/8/95676;3367929;201;js;Adobe;MobileInterstitial/?ftx='+ftX+'&fty='+ftY+'&ftadz='+ftZ+'&ftscw='+ftContent+'&ft_custom='+ftCustom+'&ft_section='+ftSection+'&ftOBA='+ftOBA+ftDomain+'&ft_agentEnv='+(window.mraid||window.ormma?'1':'0')+'&ft_referrer='+encodeURIComponent(ft_referrer)+'&cachebuster='+ftRandom+'\" id=\"ftscript_320x480\" name=\"ftscript_320x480\"';\nftTag += '>' + ftBuildTag2 + 'script>';\ndocument.write(ftTag);\n</script>","autoPlay":null,"showControls":null,"resourceType":"static"}],"width":"100%","action":"null","trigger":null,"type":"display","height":"100%"},{"sequence":99,"assets":[],"width":"100%","action":"null","trigger":null,"type":"fallback","height":"100%"}],"statsBaseURL":"stats.tubemogul.com/stats/1","displayType":"mraid_3rd_party","adId":"B5nMPyaJjq1QdpDhwXoZ","pixels":[],"feedId":"B5nMPyaJjq1QdpDhwXoZ","adClass":"display_app_inter","price":"","paId":"B5nMPyaJjq1QdpDhwXoZ","width":320,"assetBaseURL":"//playtime.tubemogul.com","wmode":"window","height":480}];var tm_auction_id=TM_array[uIdx].Args.data[0].session.sessId;TM_array[tm_auction_id]=TM_array[uIdx];delete TM_array[uIdx];TM_array[tm_auction_id].Feed=TM_array[tm_auction_id].Args.data[0];TM_array[tm_auction_id].Feed.astv="20180524-20";(function(){var b=false,c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.JRClass=function(){};JRClass.extend=function(h){var g=this.prototype;b=true;var f=new this();b=false;for(var e in h){f[e]=typeof h[e]=="function"&&typeof g[e]=="function"&&c.test(h[e])?(function(i,j){return function(){var l=this._super;this._super=g[i];var k=j.apply(this,arguments);this._super=l;return k}})(e,h[e]):h[e]}function d(){if(!b&&this.init){this.init.apply(this,arguments)}}d.prototype=f;d.constructor=d;d.extend=arguments.callee;return d}})();(function(){if(typeof Object.assign!="function"){Object.defineProperty(Object,"assign",{value:function b(f,h){if(f==null){throw new TypeError("Cannot convert undefined or null to object")}var g=Object(f);for(var e=1;e<arguments.length;e++){var d=arguments[e];if(d!=null){for(var c in d){if(Object.prototype.hasOwnProperty.call(d,c)){g[c]=d[c]}}}}return g},writable:true,configurable:true})}})();(function(){var d=JRClass.extend({assetElement:null,promotedAsset:null,orientation:null,clickedOnce:false,displayViewabilityTimeout:-1,TM:null,init:function(f,e){this.TM=e;this.TM.prepareFeeds(e);this.assetStarted=false;this.promotedAsset=f;this.assetUrl=f.detail;this.TM.prepareCloseButtonDelay(e);this.setDocumentStyle();this.loadAsset();this.embedAsset();this.checkMraidState()},setDocumentStyle:function(){document.body.style.border="none";document.body.style.padding="0px 0px 0px 0px";document.body.style.margin="0px 0px 0px 0px"},embedAsset:function(){document.body.appendChild(this.assetElement);this.assetElement.style.display="none"},checkMraidState:function(){if(mraid.getState()==="default"){this.checkViewableState()}else{mraid.addEventListener("ready",this.checkViewableState.bind(this))}},checkViewableState:function(){if(mraid.isViewable()){this.startAsset()}else{mraid.addEventListener("viewableChange",this.startAsset.bind(this))}},startAsset:function(){if(this.assetStarted){return}this.TM.Pixels.fireAllPixels("imp","Impression");this.assetElement.style.display="block";this.addClickthroughListener();this.resizeAssetElement();this.assetStarted=true;window.addEventListener("resize",this.checkOrientation.bind(this));TM.Pixels.fireTrustedMraidVimpAfterDelay(1000)},clearViewabilityTimeout:function(){clearTimeout(this.displayViewabilityTimeout)},resizeAssetElement:function(){var e=mraid.getMaxSize();this.assetElement.width=e.width;this.assetElement.height=e.height},getOrientation:function(){if(window.innerWidth>window.innerHeight){return"landscape"}else{return"portrait"}},checkOrientation:function(){var e=this.getOrientation();if(this.orientation!==e){setTimeout(this.resizeAssetElement.bind(this),20);this.orientation=e}},openCtUrl:function(e){mraid.open(e||this.promotedAsset.clickURL);if(!this.clickedOnce){this.TM.Pixels.fireAllPixels("ct","ClickThrough");this.clickedOnce=true}}}),b=d.extend({loadAsset:function(){this.assetElement=document.createElement("img");this.assetElement.id="img_asset_element";this.assetElement.setAttribute("src",this.assetUrl);this.assetElement.style.position="absolute";this.assetElement.style["object-fit"]="contain"},addClickthroughListener:function(){if(this.promotedAsset&&this.promotedAsset.clickURL){this.assetElement.onclick=function(){this.openCtUrl()}.bind(this)}}}),c=d.extend({loadAsset:function(){this.assetElement=document.createElement("iframe");this.assetElement.id="html_asset_element";this.assetElement.src="https://playtime.tubemogul.com/utils/playtime_iframe_bridge.html?adTag="+encodeURIComponent(this.assetUrl)+"&statsClickURL=container_handles";this.assetElement.style.border="none";this.assetElement.style.padding="0px 0px 0px 0px";this.assetElement.style.margin="0px 0px 0px 0px";this.assetElement.style.position="absolute"},addClickthroughListener:function(){this.TM.Util.receiveMessage(this.openCtUrl.bind(this))},openCtUrl:function(f){if(!!f&&/playtime.tubemogul.com/.test(f.origin)&&f.data.type=="container_handles"){var e=f.data.url;this._super(e)}}});window.MraidDisplayImageClass=b;window.MraidDisplayHtmlClass=c})();TM_array[tm_auction_id].Util=function(TM){var isNull=function(obj){return typeof(obj)=="undefined"||!obj||obj==""},isEmpty=function(obj){for(var prop in obj){if(obj.hasOwnProperty(prop)){return false}}return true},flashDetect=function(){var osf,osfd,i,axo=1,v=0,nv=navigator;if(nv.plugins&&nv.mimeTypes.length){osf=nv.plugins["Shockwave Flash"];if(osf&&osf.description){osfd=osf.description;v=parseInt(osfd.substring(osfd.indexOf(".")-2))}}else{try{for(i=5;axo!=null;i++){axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);v=i}}catch(e){}}return v},detectMraid=function(cnt,successCallback,timeoutCallback){var cnt=cnt||1,maxCnt=1000,next=null;if(typeof mraid!=="undefined"){next=successCallback}else{if(cnt>maxCnt){next=timeoutCallback}else{setTimeout(detectMraid.bind(this,cnt+1,successCallback,timeoutCallback),20)}}if(!!next){next()}},firePixels=function(trigger){if(trigger=="Impression"){var p={};if(TM.Feed.preview){p.vinst="f"}TM.Pixels.fireAllPixels("imp","Impression",p)}else{console.log("Legacy code misuse :  TM.Util.firePixels not called by  fireMraidImpression('Impression') in HTML Ad Unit")}},random=function(){return parseInt(Math.random()*99999999)},loadImage=function(src,onload){var img=new Image();if(!!onload){img.onload=onload}img.src=src;return img},loadScript=function(src,callback,expectObject){try{var script=document.createElement("script");var loadTimeoutMs=2000;var loadTimeoutExpired=false;var loadTimeout;var handleLoadResult=function(ok,message){clearTimeout(loadTimeout);callback({result:ok?"READY":"ERROR",message:message||""})}.bind(this);if(!!callback){if(!!expectObject){var detectObject=function(){if(!!window[expectObject]){handleLoadResult(true)}else{if(!loadTimeoutExpired){setTimeout(detectObject.bind(this),50)}}};detectObject()}else{if(typeof script.onload=="object"){script.onload=handleLoadResult.bind(this,true);script.onerror=handleLoadResult.bind(this,false,"Script load error")}else{handleLoadResult(true)}}loadTimeout=setTimeout(function(){loadTimeoutExpired=true;handleLoadResult(false,"Timed out waiting for script load")}.bind(this),5000)}script.src=src;document.getElementsByTagName("head")[0].appendChild(script)}catch(e){}},loadCSS=function(src,callback){var css=document.createElement("link");css.rel="text/css";css.src=src;if(!!callback){css.onload=callback}document.getElementsByTagName("head")[0].appendChild(css)},appendHTML=function(html,styleTxt){var d=document.createElement("div");if(styleTxt){d.style.cssText=styleTxt}d.innerHTML=html;document.body.appendChild(d)},writeHTML=function(divid,str){var wroteDiv=false,i,type=TM.Feed.displayType,adcontent,condition="tubemogul.",scripts=document.getElementsByTagName("script");if(type!="mraid_3rd_party"&&type!="inbanner_3rd_party"){if(
/*@cc_on!@*/
true){for(i=0;i<scripts.length;i++){if(scripts[i].src.indexOf(condition)>0){adcontent=document.createElement("div");adcontent.id=divid;adcontent.innerHTML=str;if(scripts[i].parentNode.tagName!="HEAD"){scripts[i].parentNode.insertBefore(adcontent,scripts[i]);wroteDiv=true;break}}}}}if(!wroteDiv){adcontent=document.createElement("div");adcontent.id=divid;adcontent.innerHTML=str;adcontent.style.width=TM.Feed.width+"px";adcontent.style.height=TM.Feed.height+"px";document.body.appendChild(adcontent);TM.Util.executeScripts(adcontent.getElementsByTagName("script"));document.body.style.margin="0px"}},findInArray=function(list,field,value){if(!list||!field){return}for(var i=0;i<list.length;i++){if(list[i][field]==value){return list[i]}}return null},openClickThrough=function(clickThroughUrl){this.TM.Pixels.fireAllPixels("ct","ClickThrough");window.open(clickThroughUrl)},updateProtocolInFeed=function(){var pix,assetIdx,adPartIdx;if(TM.Feed.pixels){for(pix=TM.Feed.pixels.length-1;pix>=0;pix--){try{if(TM.Feed.pixels[pix].id=="TM_PI5"){TM.Feed.pixels[pix].detail=TM.Feed.pixels[pix].detail.replace("http://b","https://sb")}else{if(TM.Feed.pixels[pix].id.toString().substr(0,3)=="TM_"){TM.Feed.pixels[pix].detail=TM.Feed.pixels[pix].detail.replace("http://","https://")}}}catch(e){}}}for(adPartIdx=0;adPartIdx<TM.Feed.adParts.length;adPartIdx++){if(TM.Feed.adParts.assets){for(assetIdx=0;assetIdx<TM.Feed.adParts.assets.length;assetIdx++){TM.Feed.adParts.assets[assetIdx].detail=TM.Feed.adParts.assets[assetIdx].detail.replace("http://","https://")}}}},isThisYouTube=function(adParts){var n,i;for(n=0;n<adParts.length;n++){for(i=0;i<adParts[n].assets.length;i++){if(adParts[n].assets[i].mimeType.toLowerCase()=="youtube"){return true}}}return false},getBurl=function(){var burl="Unknown",burlHalves;try{var win=window;while(win.location.href=="about:blank"){win=win.parent}burl=win.location.href.toString();if(burl.indexOf("facebook.com/")>-1){burlHalves=burl.split("?");burl=burlHalves[0]+"---REDACTED_FOR_PRIVACY---"}}catch(error){}return burl},getAssetInAdPart=function(adPart,assetType){var i;for(i=0;i<adPart.assets.length;i++){if(adPart.assets[i]["type"]==assetType){return(adPart.assets[i])}}return null},getAssetInAdPartByType=function(adPartType,assetType){var i,asset;for(i=0;i<TM.Feed.adParts.length;i++){if(TM.Feed.adParts[i].type==adPartType){if(asset=getAssetInAdPart(TM.Feed.adParts[i],assetType)){return asset}}}return null},mimeTypeClass=function(assetObj){if(!!assetObj.mimeType){return assetObj.mimeType.split("/")[0]}return null},assetsIncludeFlash=function(){var H,i,hasFlash=false;for(H=0;H<TM.Feed.adParts.length&&hasFlash==false;H++){for(i=0;i<TM.Feed.adParts[H].assets.length&&hasFlash==false;i++){hasFlash=((!!TM.Feed.adParts[H].assets[i]["detail"]&&TM.Feed.adParts[H].assets[i]["detail"].indexOf(".swf")>-1)||TM.Feed.adParts[H].assets[i]["mimeType"]=="application/x-shockwave-flash")}}return hasFlash},receiveMessage=function(func){var eventMethod=window.addEventListener?"addEventListener":"attachEvent";var windowAddListener=window[eventMethod];var messageEvent=(eventMethod=="attachEvent")?"onmessage":"message";windowAddListener(messageEvent,func)},auditAdClass=(TM.Feed.adClass.toLowerCase()=="bap")?"bap":"ctp"+(isThisYouTube(TM.Feed.adParts))?"-yt-":"-tm-"+(TM.Feed.displayType.toLowerCase().indexOf("flash")>0)?"flash":"html5",sslProto=function(url){return url.replace(/^(http:|https:|)\/\//,"https://")},executeScripts=function(scripts,success,error){var i,scripts=Array.prototype.slice.call(scripts),head,remaining,node,handler,evalScript,callbacks;if(!scripts.length){return}callbacks={success:success,error:error||success};remaining=scripts.length;head=document.getElementsByTagName("head")[0]||document.documentElement;node=function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()===name.toUpperCase()};handler=function(type){return function(){remaining--;if(remaining===0&&typeof callbacks[type]==="function"){callbacks[type]()}}};evalScript=function(elem){var script=document.createElement("script"),data=(elem.text||elem.textContent||elem.innerHTML||"");if(elem.src){script.src=elem.src}else{try{script.appendChild(document.createTextNode(data))}catch(e){script.text=data}}head.appendChild(script);if(elem.src){script.onload=handler("success");script.onerror=handler("error")}else{handler("success")()}head.removeChild(script)};for(i=0;scripts[i];i++){var script=scripts[i];if(script.parentNode){script.parentNode.removeChild(script)}evalScript(scripts[i])}},allowDocumentWrite=function(){var feed=TM.Feed,isAndroid=navigator.userAgent.match(/Android/i),inMobiMraid=window.imraid,is3rdParty=(feed.displayType in {inbanner_3rd_party:1,mraid_3rd_party:1}),androidSupportedClass=(feed.adClass in {mobile_app_inter:1,tablet_app_inter:1,display_app_inter:1});return(!isAdobeCTAd&&((is3rdParty&&!inMobiMraid)||(isAndroid&&androidSupportedClass)))};return{isNull:isNull,sslProto:sslProto,isEmpty:isEmpty,flashDetect:flashDetect,detectMraid:detectMraid,firePixels:firePixels,random:random,loadImage:loadImage,loadScript:loadScript,loadCSS:loadCSS,appendHTML:appendHTML,writeHTML:writeHTML,findInArray:findInArray,openClickThrough:openClickThrough,updateProtocolInFeed:updateProtocolInFeed,getBurl:getBurl,assetsIncludeFlash:assetsIncludeFlash,getAssetInAdPart:getAssetInAdPart,getAssetInAdPartByType:getAssetInAdPartByType,mimeTypeClass:mimeTypeClass,receiveMessage:receiveMessage,executeScripts:executeScripts,allowDocumentWrite:allowDocumentWrite}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Partners=function(d){var b="width:"+d.Feed.width+"px; height:"+d.Feed.height+"px; position:absolute; top:0px; left:0px; pointer-events:none;";var c=function(){if(d.Feed.preview||d.Feed.bt||d.lc_params.bt){return"https://choices.truste.com/ca?pid=efrontier01&aid=efrontier01&cid=0911ef120x240&c=efrontier01cont1&w="+d.Feed.width+"&h="+d.Feed.height+"&plc=tl&js=10"}else{return null}},e=function(){var h="<img style='"+b+" visibility:hidden;'/>";var g="<span id='te-clearads-js-efrontier01cont1'></span>";return h+g},f=function(g,i){if(scriptUrl=c()){var h=/clsid:D27CDB6E-AE6D-11cf-96B8-444553540000/.test(g);if(!h){navigator.mimeTypes["application/x-shockwave-flash"]=null;navigator.plugins["Shockwave Flash"]=null}var k=e();var j=document.createElement("div");j.innerHTML=e();i.appendChild(j);d.Util.loadScript(scriptUrl)}};return{load:f}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Pixels=function(v){var e;var p=[];var q=function(c){e=c},f=function(c){var w={};w.sessId=v.Feed.session.sessId;w.paId=v.Feed.paId;w.cpKey=v.Feed.cpKey;w.mpKey=v.Feed.mpKey;w.adKey=v.Feed.adKey;w.astv=v.Feed.astv;w.s=v.Feed.s;w.excpKey=v.Feed.excpKey;w.exmpKey=v.Feed.exmpKey;w.exadKey=v.Feed.exadKey;w.psId=v.Feed.psId;w.page_url=v.Feed.page_url;w.rt=v.Feed.rt;w.did=v.Feed.did;w.didtype=v.Feed.didtype;w.env=v.Feed.env;w.conn=v.Feed.conn;w.burl=v.Util.getBurl();w.expaId=v.Feed.expaId;w.ast_id=_AST_ID;if(v.Feed.pt==c){w.bi=v.Feed.bi;w.price=v.Feed.price}switch(c){case"imp":w.adEngImpQP=v.Feed.adEngImpQP;case"vimp":w.w=v.Feed.width;w.h=v.Feed.height;if(String(v.Feed.vtrusted).toLowerCase()=="t"){w.vinst="t"}if(v.Util.getAssetInAdPartByType("player","vast")){w.vinst="t"}break;case"ct":w.bi=v.Feed.bi;w.adEngClickThruQP=v.Feed.adEngClickThruQP;break;case"view":w.adEngViewQP=v.Feed.adEngImpQP;case"pct25":case"pct50":case"pct75":case"pct100":w.dur=e;if(String(v.Feed.vtrusted).toLowerCase()=="t"){w.vinst="t"}break}return w},i=function(w){var c={imp:"adEngImpQP",ct:"adEngClickThruQP",view:"adEngViewQP"};if(!!v.Feed[c[w]]){return v.Feed[c[w]]}else{return""}},j=function(){var w="",c=v.Feed;if(c.expk){w+="&expk="+c.expk}if(c.sgrpk){w+="&sgrpk="+c.sgrpk}return w},t=function(c,y){var x="";queryString="?";for(var w in y){if(typeof w=="number"||!!y[w]){queryString+=x+w+"="+encodeURIComponent(String(y[w]));x="&"}}return queryString+i(c)+j()},k=function(w,y){var c=v.Feed.statsBaseURL?("https://"+v.Feed.statsBaseURL):"https://stats-tm.everesttech.net/stats/1";c+="/"+w;var x=f(w);Object.assign(x,y);return c+t(w,x)},s=function(c){return new Promise(function(y,x){var w=new Image();w.onload=y;w.onerror=y;try{console.log("pixel.src: "+c);w.src=c}catch(z){y()}})},d=function(c,w){p.push(s(k(c,w)))},b=function(c){if(!!v.Feed.pixels){for(var w=v.Feed.pixels.length-1;w>=0;w--){if(v.Feed.pixels[w]&&String(v.Feed.pixels[w].trigger).toLowerCase()==c.toLowerCase()){if(m(c,v.Feed.pixels[w].type,v.Feed.pixels[w].detail,v.Feed.pixels[w].id)){v.Feed.pixels.splice(w,1)}}}}},m=function(w,x,z,B){var y=false,c,A;z=z.replace("[[random]]",v.Util.random());z=z.replace("[[timestamp]]",(new Date).getTime());z=z.replace("[timestamp]",(new Date).getTime());if(w.indexOf("TM_AUDIT")==0){if(x.toLowerCase().indexOf("mobile")!=0){y=true;w=null}else{c=Number(new Date);A=c-Number(v.lc_params.zerotime);z+=z.indexOf("?")>0?"&":"?";z+=w.toLowerCase().substring(w.lastIndexOf("_")+1,w.length)+"_delta="+A.toString();z+="&ad_type="+v.Util.auditAdClass;v.lc_params.zerotime=c}}switch(x){case"Flash":case"Image":(new Image).src=z;y=true;break;case"HTML":v.Util.appendHTML(z);y=true;break;case"Javascript":v.Util.loadScript(z);y=true;break;default:break}g(B,w,z,x);return y},l=function(c,w,x){b(w);d(c,x)},h=function(){return Promise.all(p)},r=function(c,x){var w={sId:0,sessId:v.Feed.session.sessId,paId:v.Feed.paId,cpKey:v.Feed.cpKey,mpKey:v.Feed.mpKey,adKey:v.Feed.adKey,astv:v.Feed.astv,s:v.Feed.s,excpKey:v.Feed.excpKey,exmpKey:v.Feed.exmpKey,exadKey:v.Feed.exadKey,rt:"HTML5",ua:encodeURIComponent(navigator.userAgent)};if(x){Object.assign(w,x)}return v.Pixels.getStatsPixelUrl(c,w)},o=function(c,w){w|={};w.now=Number(new Date());w.time_since_ast_load=String(Number(new Date)-ast_loaded_time);(new Image).src=r(c,w)},u=5,g=function(z,c,y,w){try{if(!v.Util.isNull(z)&&c.indexOf("TM_AUDIT")!=0&&c.indexOf("TM_PI")!=0){if(pixel!==undefined){pixel.send(z,y,c,w)}if(typeof(PromoAdmin)!="undefined"){PromoAdmin.MediaPlacement.Test.firePixel(c.toLowerCase(),y)}}}catch(x){}if(z=="TM_PI5"){setTimeout(function(){if(--u>0){m(c,w,y,z)}},parseInt(Math.random()*5+5)*1000)}},n=function(c){if(String(v.Feed.vtrusted).toLowerCase()=="t"){this.mraidViewabilityTimeout=setTimeout(function(){var w={vinst:"t",vwbl:"t",vpct:"100",awin:"t"};v.Pixels.fireStatsPixel("vimp",w)},c);mraid.addEventListener("viewableChange",function(){clearTimeout(this.mraidViewabilityTimeout)}.bind(this))}};return{fireStatsPixel:d,getStatsPixelUrl:k,fireFeedPixels:b,fireAllPixels:l,getDebugPixelUrl:r,fireDebugPixel:o,setAdDuration:q,logPixel:g,waitForStats:h,fireTrustedMraidVimpAfterDelay:n}}(TM_array[tm_auction_id]);TM_array[tm_auction_id].Embed=function(c){var i,j,b,g=TM_array[c],l=c.replace(/[^a-zA-Z0-9]/g,"_"),e=function(){return"TM_PlacementDiv_"+l},m=function(){return"width: "+g.Feed.width+"px; height:"+g.Feed.height+"px; overflow: hidden; border:none; padding:0px; margin:0px;"},f=function(){if(g.Util.isNull(g.Feed)||g.Util.isEmpty(g.Feed)){return null}var n=null;i=g.Util.findInArray(g.Feed.adParts,"type","player");if(i==null){i=g.Util.findInArray(g.Feed.adParts,"type","expand")}if(i==null){i=g.Util.findInArray(g.Feed.adParts,"type","display")}if(!g.Util.isNull(i)&&g.Util.findInArray(i.assets,"type","promoted_video")!=null){b=g.Util.findInArray(i.assets,"type","promoted_video")}if(!g.Util.isNull(b)&&!g.Util.isNull(b.clickURL)&&!g.Util.isNull(g.lc_params.bannerclickurl)){b.clickURL=g.lc_params.bannerclickurl+encodeURIComponent(b.clickURL)}if(g.Feed.displayType=="HTML5"&&!document.createElement("video").canPlayType){g.Feed.displayType="New Flash"}switch(g.Feed.displayType){case"mraid_3rd_party":case"inbanner_3rd_party":g.Feed.rt="HTML5";if(j=g.Util.getAssetInAdPart(i,"display_code")){g.Pixels.fireDebugPixel("3pCodeWrite");n=j.detail;isAdobeCTAd=n.includes("tubemogul.com/web/adbridge");n=k(n)}break;default:break}if(g.Util.isNull(n)){n=d("getEmbedStr_returned_null")}return n},k=function(x){g.mraid={proxy:{},container:{}};if(g.Feed.adClass=="mobile_app_inter"){g.MraidVpaid=function(H){var B=H,D=false,C=0;var G={AdStarted:function(){D=true},AdImpression:function(){},AdVideoStart:function(){C=B.getAdDuration();if(C<=0||g.Util.isNull(C)){C=30}g.Pixels.setAdDuration(Math.floor(C));g.Pixels.fireAllPixels("view","View")},AdVideoFirstQuartile:function(){g.Pixels.fireAllPixels("pct25","Complete25")},AdVideoMidpoint:function(){g.Pixels.fireAllPixels("pct50","Complete50")},AdVideoThirdQuartile:function(){g.Pixels.fireAllPixels("pct75","Complete75")},AdVideoComplete:function(){g.Pixels.fireAllPixels("pct100","Completion");g.Pixels.waitForStats().then(I.bind(this,"AdVideoComplete"))},AdClickThru:function(){},AdInteraction:function(){},AdDurationChanged:function(){},AdUserAcceptInvitation:function(){},AdUserMinimize:function(){},AdPaused:function(){},AdPlaying:function(){},AdLog:function(){},AdUserClose:function(){g.Pixels.waitForStats().then(I.bind(this,"AdUserClose"))},AdError:function(){g.Pixels.waitForStats().then(I.bind(this,"AdError"))}},E=function(){if(!D&&mraid.isViewable()){D=true;B.startAd()}},A,K=[],F=function(M,N,L){L=L||null;if(!K[N]){K[N]=[]}K[N].push({callback:M,scope:L})},J=function(L,M){if(!!K[M]){K[M]=K[M].filter(function(N){return N.callback!==L})}if(K[M].length==0){delete K[M]}},I=function(L){if(K[L]){K[L].forEach(function(M){M.callback.call(M.scope)})}};for(event in G){B.subscribe(G[event],event)}if(g.mraid.container.supports("vpaid")){A=B.subscribe;B.subscribe=function(M,N,L){switch(N){case"AdVideoComplete":case"AdUserClose":case"AdError":if(!K[N]){K[N]={}}K[N][M]=M;K[N][L]=L;break;default:A(M,N,L);break}};g.mraid.container.initVpaid(B)}else{if(mraid.isViewable()){setTimeout(function(){B.startAd()},100)}else{mraid.addEventListener("viewableChange",E)}}}}var w,o=false,p=function(){console.log("MRAID 3rd Party: sendImpression()");if(o){return}o=true;g.Pixels.fireAllPixels("imp","Impression");g.Pixels.fireTrustedMraidVimpAfterDelay(2000)},y=function(){console.log("MRAID 3rd Party: setupImpression()");if(mraid.isViewable()){p()}else{mraid.addEventListener("viewableChange",p)}},n=function(A){g.mraid.container[A]=mraid[A];mraid[A]=g.mraid.proxy[A]},z=function(){var A=4000;var C=null;var B=g.Feed.closeButtonDelay||A;g.mraid.proxy={useCustomClose:function(D){if(C!==null){clearTimeout(C);C=null}g.mraid.container.useCustomClose(D)},supports:function(D){switch(D){case"vpaid":n("initVpaid");return true;break;default:return g.mraid.container.supports(D);break}},open:function(D){g.Pixels.fireAllPixels("ct","ClickThrough");return g.mraid.container.open(D)},initVpaid:function(D){if(typeof g.MraidVpaid==="function"){w=new g.MraidVpaid(D)}},isViewable:function(){return g.mraid.container.isViewable()},close:function(){g.Pixels.waitForStats().then(function(){g.mraid.container.close()})}};n("useCustomClose");n("supports");n("isViewable");n("open");n("close");C=setTimeout(function(){g.mraid.container.useCustomClose(false)},B)},t=function(){console.log("MRAID 3rd Party: handleMraidDetected()");if(mraid.getState()=="default"){r()}else{mraid.addEventListener("ready",r)}},u=function(){},r=function(){console.log("MRAID 3rd Party: handleMraidReady()");mraid.useCustomClose(true);z();embed3pMraidAd();y()},v=function(){g.Util.initializeWinplay(c)},q=function(){x=x.replace(/(['"]|\\"|\\')mraid.js(['"]|\\"|\\')/i,"$1$1")};embed3pMraidAd=function(){var C,B,A=navigator.userAgent.match(/Android/i);if(A){q()}if(g.Util.allowDocumentWrite()){document.open();document.write("<div id='"+g.Embed.getDivId()+"'>"+x+"</div>");document.close()}else{B=function(){var D=document.createEvent("Event");D.initEvent("load",false,false);window.dispatchEvent(D)};C=document.createElement("div");C.id=g.Embed.getDivId();C.innerHTML=x;document.body.appendChild(C);g.Util.executeScripts(C.getElementsByTagName("script"),B);if(!g.mraid.container.domRef){g.mraid.container.domRef=C}}};try{g.Util.detectMraid(1,t,u);embed="async"}catch(s){embed=x}return embed},d=function(n){return'<a href="http://www.tubemogul.com" target="_new"><img width="'+g.Feed.width+'" height="'+g.Feed.height+'" src="'+g.lc_params.assetbase+'/adtags/no_javascript.jpg?reason="+ reason + "/></a>'},h=function(){};return{getEmbedStr:f,getDivId:e}}(tm_auction_id);TM_array[tm_auction_id].prepareFeeds=function(b){if(b.Util.isNull(b.lc_params)){b.lc_params={}}if(typeof tm_param_array!=="undefined"&&!b.Util.isNull(tm_param_array[b.Feed.session.sessId])){b.tm_params=tm_param_array[b.Feed.session.sessId]}if(!b.hasOwnProperty("tm_params")){if(typeof tm_params!=="undefined"&&!b.Util.isNull(tm_params)){b.tm_params=tm_params}}if(!b.hasOwnProperty("tm_params")){b.tm_params={}}for(a in b.tm_params){b.lc_params[a.toLowerCase()]=b.tm_params[a]}b.Util.updateProtocolInFeed();b.lc_params.assetbase=b.Util.sslProto(b.tm_params.assetbase?b.tm_params.assetbase:b.Feed.assetBaseURL);b.lc_params.adpluginurl=b.Feed.adPluginURL;if(b.Feed.adPluginURL.substr(0,4)!="http"){b.lc_params.adpluginurl=b.lc_params.assetbase+b.lc_params.adpluginurl}while(!!b.lc_params.pixels&&b.lc_params.pixels.length>0){b.Feed.pixels.push(b.lc_params.pixels.pop())}b.Feed.tagParams=b.lc_params;if(b.Feed.preview){b.Feed.session.sessId="preview"}else{if(!b.Util.isNull(b.lc_params.auction_id)){b.Feed.session.sessId=b.lc_params.auction_id;b.Pixels.fireDebugPixel("ASTLoaded")}}if(b.Util.isNull(b.lc_params.zerotime)){b.lc_params.zerotime=b.lc_params.ast_zerotime=Number(new Date)}else{b.Pixels.fireDebugPixel("AstLoadedFromBid",{time_to_load:Number(new Date)-b.lc_params.zerotime})}};TM_array[tm_auction_id].prepareCloseButtonDelay=function(c){if(typeof c.Feed.closeButtonDelay!=="undefined"&&Number(c.Feed.closeButtonDelay)==c.Feed.closeButtonDelay){c.Feed.closeButtonDelay=c.Feed.closeButtonDelay*1000}else{if(typeof c.lc_params.closedelay!=="undefined"&&Number(c.lc_params.closedelay)==c.lc_params.closedelay){c.Feed.closeButtonDelay=c.lc_params.closedelay}else{var b=c.Util.getAssetInAdPartByType("player","promoted_video");if(b&&typeof(b.videoDuration)==="number"){c.Feed.closeButtonDelay=(b.videoDuration>15)?5000:1000*b.videoDuration+1000}else{c.Feed.closeButtonDelay=5000}}}};TM_array[tm_auction_id].prepareAndEmbed=function(c){var b;var g=c.Feed.adClass.toLowerCase();var d;var f=function(){if(!d){if(c.Util.isNull(c.lc_params.impurl)){c.Pixels.fireStatsPixel("imp")}c.Pixels.fireFeedPixels("Impression")}c.Pixels.fireFeedPixels("NOW");c.Pixels.fireFeedPixels("TM_AUDIT_TAG");c.Pixels.fireFeedPixels("tag")};var e=function(){b=c.Embed.getEmbedStr();if(b!="async"){c.Util.writeHTML(c.Embed.getDivId(),b)}};d=(g in {mobile_app_inter:1,tablet_app_inter:1,display_app_inter:1,mobile_app_ctp:1,tablet_app_ctp:1,mraid_3rd_party:1,mobile_survey:1});if(d){c.prepareCloseButtonDelay(c);if(c.Feed.preview){c.Feed.vtrusted="T"}}f();e();return(b)};function runMraidDisplay(){var c,b;c=TM_array[tm_auction_id].Util.getAssetInAdPartByType("display","overlay");switch(TM_array[tm_auction_id].Util.mimeTypeClass(c)){case"image":b=new MraidDisplayImageClass(c,TM_array[tm_auction_id]);break;case"text":b=new MraidDisplayHtmlClass(c,TM_array[tm_auction_id]);break;default:break}}function convertToStandardDisplay(){document.body.onclick=null;img=new Image();img.src="//playtime.tubemogul.com/adtags/no_javascript.jpg?reason=no_mraid_object";document.body.appendChild(img)}function go(c){var b,d=document.body;if(c.Feed.adClass=="display_app_inter"&&c.Feed.displayType!=="mraid_3rd_party"){c.Util.detectMraid(1,runMraidDisplay,convertToStandardDisplay)}else{c.prepareFeeds(c);b=c.prepareAndEmbed(c);c.Partners.load(b,d)}}function init(){if(TM_array[tm_auction_id].Feed.click_to_run){document.body.onclick=function(){document.body.onclick=null;go(TM_array[tm_auction_id])}}else{go(TM_array[tm_auction_id])}}TM=TM_array[tm_auction_id];if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){init()}else{document.addEventListener("DOMContentLoaded",init)};}catch(e) {
    img = new Image();
    img.src = 'https//playtime.tubemogul.com/adtags/no_javascript.jpg?reason=error_caught:'+encodeURIComponent( e.message );
    document.body.appendChild(img);
}