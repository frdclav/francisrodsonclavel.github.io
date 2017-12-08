<script src="mraid.js"></script>
<style type="text/css">
    html,
    body {
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        margin: 0px;
        padding: 0px;
        background-color: #000;
        text-decoration: none !important;
    }
    div,
    img {
        position: absolute;
        cursor: pointer;
        pointer-events: none;
        user-select: none;
        background-position: 0px 0px;
        background-size: cover;
    }
    #wrapper {
        background-color: #000000;
        overflow: visible;
        transform-origin: 0% 0%;
    }
    .video {
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }
    .adsize {
        width: 320px;
        height: 480px;
        left: 0px;
        top: 0px;
    }
    .player {
        width: 304px;
        height: 171px;
        left: 8px;
        top: 59px;
        background-color: #000000;
        pointer-events: auto;
        cursor: pointer;
    }
    #border {
        width: 304px;
        height: 171px;
        left: 8px;
        top: 59px;
    }
    /* SHARED */
    
    .border {
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 2px 2px 2px 2px;
        -moz-border-radius: 2px 2px 2px 2px;
        -webkit-border-radius: 2px 2px 2px 2px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .fadein {
        opacity: 1;
        visibility: visible;
    }
    .fadeout {
        opacity: 0;
        visibility: hidden;
    }
    .trans500 {
        -webkit-transition: all 500ms ease-out;
        -moz-transition: all 500ms ease-out;
        -o-transition: all 500ms ease-out;
        transition: all 500ms ease-out;
    }
    /* CUSTOM */
    
    #close {
        top: 0px;
        right: 0px;
        width: 49px;
        height: 49px;
        visibility: hidden;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/close.png");
        pointer-events: auto;
        cursor: pointer;
    }
    #logo {
        width: 179px;
        height: 60px;
        left: 0px;
        top: 0px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/logo.png");
        pointer-events: auto;
        cursor: pointer;
    }
    #tagline {
        width: 248px;
        height: 106px;
        left: 36px;
        top: 310px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/tagline.png");
    }
    #cta {
        width: 239px;
        height: 83px;
        left: 40px;
        top: 397px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/cta_discover-the-deals.png");
        pointer-events: auto;
        cursor: pointer;
    }
    /* BKGRNDS */
    
    #bkgrnd_teppanyaki {
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/bkgrnd_teppanyaki.jpg");
    }
    #bkgrnd_salon {
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/bkgrnd_salon.jpg");
    }
    #bkgrnd_plumber {
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/bkgrnd_plumber.jpg");
    }
    /* THUMBS */
    
    .thumb {
        width: 104px;
        height: 60px;
        top: 239px;
    }
    #thumb_teppanyaki {
        left: 2px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/thumb_teppanyaki.jpg");
    }
    #thumb_salon {
        left: 108px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/thumb_salon.jpg");
    }
    #thumb_plumber {
        left: 214px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/thumb_plumber.jpg");
    }
    .play {
        width: 104px;
        height: 60px;
        top: 239px;
        background-image: url("https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/image/thumb_play.png");
        pointer-events: auto;
        cursor: pointer;
    }
    #play_teppanyaki {
        left: 2px;
    }
    #play_salon {
        left: 108px;
    }
    #play_plumber {
        left: 214px;
    }
    /* PORTRAIT */
    
    @media all and (orientation: portrait) {}
    /* LANDSCAPE */
    
    @media all and (orientation: landscape) {}
}
</style>
<div id="wrapper" class="adsize">
    <div id="bkgrnd_teppanyaki" class="adsize fadeout"></div>
    <div id="bkgrnd_salon" class="adsize fadeout"></div>
    <div id="bkgrnd_plumber" class="adsize fadeout"></div>
    <div id="frame" class="adsize"></div>
    <div id="logo"></div>
    <div id="tagline"></div>
    <div id="cta"></div>
    <div id="thumb_teppanyaki" class="thumb"></div>
    <div id="thumb_salon" class="thumb"></div>
    <div id="thumb_plumber" class="thumb"></div>
    <div id="play_teppanyaki" class="play fadeout"></div>
    <div id="play_salon" class="play fadeout"></div>
    <div id="play_plumber" class="play fadeout"></div>
    <div id="primary_player" class="player">
        <video id="primary_video" class="video" webkit-playsinline playsinline preload>
            <source src="https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/video/teppanyaki.mp4" type="video/mp4">
        </video>
    </div>
    <div id="secondary_player" class="player">
        <video id="secondary_video" class="video" webkit-playsinline playsinline preload>
            <source id="secondary_video_source" type="video/mp4">
        </video>
    </div>
    <div id="border" class="border"></div>
</div>
<div id="close"></div>
<script type="text/javascript">
    var versionID = "discover-the-deals";
    var includes = ["https://ct.tubemogul.com/web/adbridge/release/adbridge-mob-0.9.1.min.js",
        "https://ct.tubemogul.com/web/mobilesuk_dealenvy_pho/creative.js",
    ];
    var count = includes.length;
    includes.forEach(function(entry) {
        var script = document.createElement('script');
        script.setAttribute('async', 'true');
        script.setAttribute('src', entry);
        script.onload = function() {
            if (--count == 0) {
                var adBridge_tm = new AdBridge_TM();
                var creative_tm = new Creative_TM(adBridge_tm, versionID);
            }
        };
        document.body.appendChild(script);
    });
</script>
