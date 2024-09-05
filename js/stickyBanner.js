

//This function will ad the stickyBanner UI
function addStickyBanner() {
    var stickyBannerDiv = `<div id="bannerOverlay">
                            <div id="banner-ad">
            
                            </div>
                        </div>`;

    $("body").append($(stickyBannerDiv));
    console.log("stickyBannerDiv added...");
}

function refreshStickyBannerAd() {
    console.log("refreshStickyBannerAd")
    addStickyBanner();
    showStickyBannerAd();
    var timesRun = 0;
    const runInterval = setInterval(()=> {
       
        if(StickyBannerInstance){
			console.log( StickyBannerInstance,"if in interval")
			StickyBannerInstance.destroyAd();
		}
		
		StickyBannerInstance =  window.GlanceGamingAdInterface.showStickyBannerAd(StickyObj,bannerCallbacks);
    }, 30000);
}

function showStickyBannerAd(){
    $("#bannerOverlay").css("display","flex");
}

function showStickyAd()
{
    //$("#bannerOverlay").css("display","flex","important");
    const banner = document.getElementById('bannerOverlay');
    if (banner) 
    {
        banner.classList.remove('hidden');
        banner.style.display = 'flex';
        banner.style.pointerEvents = 'auto';
    }
}

function hideStickyAd()
{
    //$("#bannerOverlay").css("display","none","important");
    const banner = document.getElementById('bannerOverlay');
    if (banner) 
    {
        banner.classList.add('hidden');
        banner.style.display = 'none';
        banner.style.pointerEvents = 'none';
    }
}
