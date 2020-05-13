<!-- MOBILE BOLA.COM CHANNEL -->
<script type="text/javascript">
    var gpt_gam_site = window.location.hostname.toUpperCase(),
    gpt_gam_ver = 'V.0.1';
    console.log('%c GPT '+gpt_gam_site+' '+gpt_gam_ver ,'color:#d3d3d3; font-size:25px; font-weight: bold; -webkit-text-stroke: 1px black;');
</script>
<!-- BEGIN PUBMATIC HB WRAPPER CODE -->
<script type="text/javascript">
    (function() {
      var purl = window.location.href;
      var url = '//ads.pubmatic.com/AdServer/js/pwt/156536/767';
      var profileVersionId = '';
      if(purl.indexOf('pwtv=')>0){
        var regexp = /pwtv=(.*?)(&|$)/g;
        var matches = regexp.exec(purl);
        if(matches.length >= 2 && matches[1].length > 0){
          profileVersionId = '/'+matches[1];
        }
      }
      var wtads = document.createElement('script');
      wtads.async = true;
      wtads.type = 'text/javascript';
      wtads.src = url+profileVersionId+'/pwt.js';
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(wtads, node);
    })();
  </script>
  <!-- END PUBMATIC HB WRAPPER CODE -->
  
  <!--script async src="https://www.googletagservices.com/tag/js/gpt.js"></script-->
  <script type='text/javascript'>
    var PWT={}; //Initialize Namespace
  
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    /* START - LOAD PUBMATIC, GOOGLE ADS & REVIVE */
    PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
        (function() {
            var gads = document.createElement('script');
            var rads = document.createElement('script'); // #1
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            rads.src = (useSSL ? 'https:' : 'http:') + '//adserver.kl-youniverse.com/asyncjs.php'; // #2
            rads.async = true; // #3
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
            node.parentNode.insertBefore(rads, node); // #4
        })();
    };
  </script>
  
  <script>
  /*Update 20200321-2017-DK*/
  /*PROTOTYPE CUSTOM FILTERING*/
  String.prototype.klyFiltering = function (delimiter) {
      return this.trim().split(delimiter).map(function(t){return t.trim().toLowerCase()}).filter(x => x != "");
  };  
  
    /*SET INTERVAL TO AUTO REFRESH BOTTOM FRAME ADS - NEW*/
    window.GAMLibrary = {};
    window.GAMLibrary.setGamBFInterval = function (active = true) {
       if (!active) {
           clearInterval(window.GAMLibrary.gamBFInterval);
           return;
       }
       window.GAMLibrary.gamBFInterval = setInterval(function () {
           document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
           googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
       }, 60000);
    }
    
      /* DMP CATEGORY LIST */
      window.createDMPTracker = function(adsList,dfpTracker){
          var dmpEl,dmpON,dmpId = 1, 
              dmpList=["fashion-events","acara-film","beauty-events","comedy-events","fan-conventions","lifestyle-events","musical-events","sporting-events","auto-shows","parenting-events","political-event","apartments","life-insurance","motor-insurance","health-insurance","education-insurance","travel-insurance","home-insurance","automotive","auto-racing","beauty","disasters","local-news","law","international-news","crime","national-news","elections","politics","government-business","business-and-finance","cloud-computing","content-channel","education","outdoor-decorating","consumer-electronics","esports","events","family-and-relationships","fashion-anak","mens-fashion","womens-fashion","fitness-and-exercise","fmcg-food-and-drink","fmcg-personal-care","console-games","pc-games","gaming","computer-peripherals","hatchback","health","healthy-and-wellness","home-and-garden","homeschooling","hotels-and-motels","pharmaceutical-industry","financial-industry","entertainment-industry","healthcare-industry","construction-industry","legal-services-industry","power-and-energy-industry","logistics-and-transportation-industry","food-industry","manufacturing-industry","media-industry","mechanical-and-industrial-engineering-industry","automotive-industry","education-industry","aviation-industry","hospitality-industry","advertising-industry","agriculture","real-estate-industry","retail-industry","technology-industry","telecommunications-industry","interior-decorating","internet","residentials-buy-sell-and-rentals","auto-buying-and-selling","credit-cards","household-supplies","injuries","pregnancy","childrens-health","adults-health","mental-health","reproductive-health","computing","bollywood-content","dangdut-content","movie-content","hijab-content","hollywood-content","korean-content","quiz-content","music-content","coffee","course-education","green-vehicles","frozen-foods","fast-foods","side-dishes","desserts-and-baking","snacks","healthy-cooking-and-eating","make-up","marketing-and-advertising","soft-drinks","mobil-cerdas","luxury-cars","budget-cars","performance-cars","mobile-apps","mpv","news-and-politics","nutrition","non-profit-organizations","business-expos-and-conferences","parenting","marketplace/ecommerce","weight-loss","early-childhood-education","alternative-medicine","chronic-disease","ailment","sports-equipment","skin-care","hair-care","body-care","facecare","home-appliances","personal-finance","houses","loans","fmcg-oral-care","fmcg-hair-care","fmcg-body-care","fmcg-face-care","milk-products","tickets-promo-and-vouchers","property","relationship","auto-rentals","sales-and-promotions","primary-education","online-education","private-school","soccer","motorcycles","auto-repair","shopping-and-ecommerce","smartphones","social-networking","computer-software-and-applications","auto-parts","sports","startups","style-and-fashion","suv","water-services","gas-and-electric","internet-service-providers","phone-services","technology-and-computing","television","physical-therapy","train-tickets","flight-tickets","online-transportation","travel","budget-travel","special-interest-tv","childrens-tv","animation-tv","news-tv","drama-tv","comedy-tv","music-tv","sports-tv","reality-tv","college-education","vaccines","wearable-technology","web-hosting","family-travel","culinary-travel","religious-tourism"];
              Array.isArray(adsList) && dmpList.forEach(function(v,k){
                  adsList.forEach(function(l,e){
                     if(v === l){
                        cat = v.trim();
                        dmpEl = document.createElement('img');
                        dmpON = parent.window.document.querySelector('#dmp-tracker-'+dmpId);
                        dmpON ? dmpON.remove() : '';
                        dmpEl.setAttribute('src','https://beacon.krxd.net/event.gif?event_id=M361oCpv&event_type=registration&cat='+cat+'&media=banner');
                        dmpEl.setAttribute('width','0');
                        dmpEl.setAttribute('height','0');
                        dmpEl.setAttribute('id','dmp-tracker-'+dmpId);
                        console.log(dmpEl);
                        parent.window.document.body.appendChild(dmpEl);
                        dmpId++;     
                      } 
                  });
              });
          parent.window.open(dfpTracker, '_blank');
      };
  
      function track_dmp(){
              var kSegments = Krux.segments,
              dmpTracker = {
                  "t132uuq5f":"https://bit.ly/kly-fashion-lovers-uss",
                  "t131yvou0":"https://bit.ly/kly-beauty-enthusiast-uss",
                  "t131llctq":"https://bit.ly/kly-woman-household-uss",
                  "t13zhj75p":"https://bit.ly/kly-mom-with-kids-uss",
                  "t13thh8b8":"https://bit.ly/kly-milenial-adult-uss",
                  "tzl02g0bl":"https://bit.ly/kly-beauty-bss",
                  "tzlz95r0n":"https://bit.ly/kly-lifestyle-tips-bss",
                  "tzlytf64c":"https://bit.ly/kly-lifestyle-culinary-bss",
                  "tzh1jktow":"https://bit.ly/kly-lifestyle-love-bss",
                  "tw1bejayz":"https://bit.ly/kly-lifestyle-bss",
                  "tw019h508":"https://bit.ly/kly-lifestyle-zodiak-bss",
                  "twotmzome":"https://bit.ly/kly-ticket-concert-bss",
                  "tsankogrh":"https://bit.ly/kly-sport-bss",
                  "tsanbbb5e":"https://bit.ly/kly-automotive-bss",
                  "tsam3knlf":"https://bit.ly/kly-soccer-bss",
                  "tsalg75jn":"https://bit.ly/kly-computer-electronics-bss",
                  "tsalarj4o":"https://bit.ly/kly-parentingv2-bss",
                  "tsak3623n":"https://bit.ly/kly-travel-and-culinary-bss",
                  "tsais9e6x":"https://bit.ly/kly-fashion-bss",
                  "tsahjm7yw":"https://bit.ly/kly-entertaint-bss",
                  "tsagy2m0m":"https://bit.ly/kly-health-bss",
                  "tsagk5a78":"https://bit.ly/kly-news-bss",
                  "tsafz8k0v":"https://bit.ly/kly-finance-bussines-bss",
                  "tr62t1fj2":"https://bit.ly/kly-traveller-bss",
                  "tr6z15p4s":"https://bit.ly/kly-ecommerce-bss",
                  "tjtop60dx":"https://bit.ly/kly-all-sites-v2",
                  "tqi6kmk44":"https://bit.ly/kly-male-dss",
                  "tqi6fygsx":"https://bit.ly/kly-female-dss",
                  "t754dx15h":"https://bit.ly/kly-vidio-news-bss",
                  "t75388hy0":"https://bit.ly/kly-vidio-finance-business-bss",
                  "t7534rm9z":"https://bit.ly/kly-vidio-automotive-bss",
                  "t753yw5w8":"https://bit.ly/kly-vidio-soccer-bss",
                  "t753jjhnb":"https://bit.ly/kly-vidio-sport-bss",
                  "t75wn0zo1":"https://bit.ly/kly-vidio-parenting-bss",
                  "t75wi8zsb":"https://bit.ly/kly-vidio-computer-electronics-bss",
                  "t75wagtfg":"https://bit.ly/kly-vidio-entertainment-bss",
                  "t75v3eefi":"https://bit.ly/kly-vidio-health-bss",
                  "t75vxdba2":"https://bit.ly/kly-vidio-ecommerce-bss",
                  "t75uql2cv":"https://bit.ly/kly-vidio-travel-bss",
                  "t75ugodsj":"https://bit.ly/kly-vidio-lifestyle-bss",
                  "t7p1vjdqs":"https://bit.ly/kly-vidio-fashion-bss",
                  "t7p1piz5g":"https://bit.ly/kly-vidio-love-bss",
                  "t7pxv5m22":"https://bit.ly/kly-vidio-culinary-bss",
                  "t7puhdq0d":"https://bit.ly/kly-vidio-beauty-bss",
              },
              dmpTrackerContainer = document.createElement("div");
              dmpTrackerContainer.setAttribute("id","dmp-tracker-container");
              dmpTrackerContainer.setAttribute("style","display:none;visibility:hidden;");
              kSegments.forEach(function(entry,k) { 
                  var isDmpTracker = dmpTracker[entry];
                  if(typeof isDmpTracker !== 'undefined'){
                      var dmpSetImg = parent.window.document.querySelector('#krux-dmp-tracker-'+k),
                      dmpTrackImg = document.createElement('img');
                      dmpSetImg ? dmpSetImg.remove() : '';
                      dmpTrackImg.src = isDmpTracker;
                      dmpTrackImg.setAttribute('style', 'display:none;visibility:hidden;');
                      dmpTrackImg.setAttribute('id', 'krux-dmp-tracker-'+k);
                      dmpTrackerContainer.appendChild(dmpTrackImg);
                  }
              });
              document.body.appendChild(dmpTrackerContainer);
      }
    
  googletag.cmd.push(function() {
          /*INIT LIFTADS GROUP*/
      var dfpAds_liftAds = '/36504930/m.bola.com/dfp-sled',
          dfpAds_liftSticker = '/36504930/m.bola.com/dfp-slideup',
          dfpAds_exposer = '/36504930/m.bola.com/dfp-exposer',
          dfpAds_dfpBottomframe = '/36504930/m.bola.com/dfp-bottomfrm',
          dfpAds_dfpTopframe = '/36504930/m.bola.com/dfp-topfrm',
          dfp_isLiftAds_active = false,
          dfp_isLiftSticker_active = false,
          /* INIT SLOT & ADUNIT COUNT FOR LIFTADS COOKIES */
          dfp_slotCount = 0,
          /** Search this value using query url : ?google_force_console=1, use the ad Slots Number **/
          dfp_adunitCount = 15,
          /*INIT MATCONT*/
          urlPath = document.URL, /*GET FULL URL PATH*/
          blackListWords = new Array('matcont','aduhai','kelamin','vital','anal','belahan','bercinta','bergairah','gairah','intim','bikini','bokong','boob','bra','bugil','celana','ciuman','cleavage','dada','dewasa','diremas','doggie','ejakulasi','ereksi','erotis','foreplay','kiss','seks','gangbang','horny','hot','kamasutra','keperawanan','perawan','kondom','kontrasepsi','libido','lingerie','masturbasi','mature','menggairahkan','menggoda','mesra','miss-v','mr-p','nakal','naughty','nipple','nipples','onani','oral','oral seks','organ','orgasme','paha','pantat','panties','payudara','pelecehan','telanjang','penetrasi','penis','perkosa','perkosaan','pole','porno','pornoaksi','pornografi','telentang','provokatif','putting','ranjang','sex','penetratif','seksi','seksual','sensual','seronok','doll','toys','skandal','sperma','striptease','striptis','syur','terangsang','tiduri','topless','vagina','vibrator','lendir','prostitusi','homoseks','meraba-raba','mesum','memerkosa','rudapaksa','kemaluan','kasus asusila','pemerkosaan','hubungan seksual','hubungan intim','video porno','berita hoax','ternyata hoax','ahed tamimi','konflik palestina israel','konflik suriah','ujaran kebencian','g30s','kediktatoran arab saudi','konflik palestina-israel','fpi','penembakan','pelecehan seksual','tips seks','komunitas swinger','fenomena kelainan seksual','penyimpangan seks','posisi seks','obat kuat','bentuk payudara','implan payudara','chat firza-rizieq','anarkisme suporter sepakbola','bentrok suporter','pengeroyokan','penganiayaan','begal motor','kekerasan pada wartawan','pemerkosaan anak','pencabulan','bentrokan warga','bentrokan','kasus narkoba','akibat merokok','bahaya merokok','berhenti merokok','cara berhenti merokok','efek berhenti merokok','larangan merokok','tips berhenti merokok','rokok elektrik','pilpres 2019','koalisi pilpres 2019','koalisi prabowo','koalisi jokowi','prabowo-sandiaga','ratna sarumpaet','capres jokowi','capres prabowo','kebohongan ratna sarumpaet','prabowo subianto','jemaah ansharut daulah','aliran sesat','lia eden','kisah mualaf','penistaan agama','suporter tewas','gempa palu','gempa donggala','gempa sulawesi tengah','pembunuhan','tsunami palu','penemuan mayat','lion air jatuh di karawang','lion air jatuh','pembunuhan sadis','lion air hilang kontak','pesawat jatuh','pesawat hilang kontak','kecelakaan','kapal tenggelam di danau toba','kecelakaan bus','kapal tenggelam','kasus tabrak lari','bunuh diri','perselingkuhan','kisah perselingkuhan','razia pasangan mesum','seks bebas','gangguan jiwa','tes keperawanan','kontroversi hukuman mati','stres dan depresi','ahok gugat cerai veronica tan','Kanker','Impotensi','merokok','Perokok','Rokok','tembakau','Pelanggaran','Tablet','Overdosis','Jantung','Stroke','Cancer','Narkoba','Djarum','Ganja','BNN','Obesitas','Osteoporosis','Corona','Corona di indonesia','virus corona','virus-corona','covid-19','wabah corona','menewaskan','menewaskan orang','mengancam nyawa','meninggal','meninggal dunia','orang mati','orang tewas','pemakaman','petugas penyelamat','telah meninggal','terbunuh','tewas','tewaskan','tim penyelamat','wanita meninggal','autopsi','belasungkawa','bencana','bencana besar','bunuh orang','darurat bencana','dilaporkan tewas','dimakamkan','dipastikan tewas','ditemukan mati','ditemukan tewas','hilangnya nyawa','identitas korban','inalillahi','jasad korban','jasadnya','jenasah wanita','jenazah','jenazah pria','jenazah teridentifikasi','jasad','kehilangan hidupnya','kehilangan nyawa','kehilangan nyawanya','kematian','korban','korban jiwa','korban meninggal','korban tewas','mati','mayat','mayat korban','membunuh','membunuh istrinya','membunuh mereka','membunuh suaminya','menemui ajal','mengalami koma','menghembuskan nafas terakhir','menimbulkan korban','meninggal akibat sakit','menyebabkan kematian','meregang nyawa','meregggut nyawa','modar','nyawa hilang','nyawa melayang','penyebab kematian','tak bernyawa','tak sadarkan diri','terkapar','tidak bernyawa','tutup usia','wafat','kematian virus','kematian wabah','korban terinfeksi','virus menyerang','merenggut nyawa','pelayat','hilangkan nyawa','renggut nyawa','wabah','keadaan kritis','kehilangan darah','merenggut jiwa','telan nyawa','menelan nyawa','memakan nyawa','dinyatakan meninggal','nyawa tak tertolong','penyakit','sakit pernapasan','sesak','korona','corona','odp','pdp','virus','rumah sakit','Covid-19','virus korona','positif korona','COVID-19','terjangkit COVID-19','terinfeksi virus corona'),
          
          isMatcont = false,
          urlArray = urlPath.split("/"),
          /*INIT CONTENT FILTERING SCRIPT*/
          dfp_pageTitle = urlArray[urlArray.length - 1],
          dfp_titles = dfp_pageTitle.klyFiltering("-"),
          dfp_pageKeywords = document_meta("keywords"),
          dfp_keyword = dfp_pageKeywords.klyFiltering(","),
          /* POPULATE META DATA DESC */
          dfp_pageDesc = document_meta("description"),
          dfp_desc = dfp_pageDesc.klyFiltering(","),
          /*TARGET BY SUB CATEGORY*/
          dfp_subCategory = kmklabs.gtm.subCategory,
          /*TARGET BY SUB SUB CATEGORY*/
          dfp_subSubCategory = kmklabs.gtm.subSubCategory,
          tagForAds = (typeof kmklabs !== 'undefined') ? kmklabs.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig,"").klyFiltering("|") : "",/*NEW*/
          dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds),
          /*INIT LIST SHOWCASE ADS*/
          nextSlotId = 1,
          scSlot = 0,
          initiate_sc_slot = (function() {
              var pageType = kmklabs.pageType;
  
              function generateNextSlotName() {
                  var id = nextSlotId++;
                  return 'adslot' + id;
              }
  
              function scSlotGenerator() {
                  var slot = scSlot++;
                  if (slot != 0) {
                      /*console.log('scSlot' + slot);*/
                      return 'scSlot' + slot;
                  } else {
                      /* console.log('scSlot'); */
                      return 'scSlot';
                  }
              }
  
              if(pageType !== 'readPage'){
                  $('.js-page__articles').on('before_display', function() {
                      var slotName = generateNextSlotName();
                      var list = scSlotGenerator(); /*create list*/
                      var slotDiv = document.createElement('div');
  
                      slotDiv.id = slotName;
                      slotDiv.className = "infinite_ad";
                      slotDiv.setAttribute("data-info", "ad");
                      slotDiv.setAttribute("style", "text-align:center;border-top: 1px solid #E2E2E6;padding-top: 15px;");
                      $(slotDiv).prependTo($(this));
                      console.log(slotName);
  
                      /*REGISTER DIV AND REFRESH SLOT*/
                      googletag.cmd.push(function() {
                          var slot = googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], slotName).addService(googletag.pubads()).setTargeting("position",[scSlot]);
                          googletag.display(slotName);
                          CriteoCDBRefreshDFP([slot]);
                      });
                  });
              }else{
                  googletag.cmd.push(function() {
                          googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], 'div-gpt-ad-bolacom-sc').addService(googletag.pubads());
                          googletag.display('div-gpt-ad-bolacom-sc');
                  });
              }
          }());
  
      /*MATURE CONTENT DEFINED VAR & SET TARGETTING*/
      if (!blackListWords) {
          var blackListWords = new Array('matcont');
      }

      blackListWords = arrToLowerCase(blackListWords);
      dfp_keywords.forEach(function(sKeyword) {
          sKeyword = sKeyword.toLowerCase();
          tagForAds.push(sKeyword);
          if (inArray(sKeyword, blackListWords)) {
              isMatcont = true;
          }
      });
  
  
      /*DEFINE ALL SLOT*/
        var oop_dfpHeadline = '/36504930/m.bola.com/dfp-headline';
      googletag.defineSlot(oop_dfpHeadline, [[320, 50],[320, 100]], 'div-gpt-ad-bolacom-hl').addService(googletag.pubads());
      googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], 'div-gpt-ad-bolacom-sc').addService(googletag.pubads());
      googletag.defineSlot(dfpAds_exposer, [[300,250], [300,600], [320,480]], 'div-gpt-ad-bolacom-dfp-exposer-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-contextual', 'div-gpt-ad-bolacom-contextual-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot1', 'div-gpt-ad-bolacom-dfp-nativeOut-slot1-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot12', 'div-gpt-ad-bolacom-dfp-nativeOut-slot12-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot4', 'div-gpt-ad-bolacom-dfp-nativeOut-slot4-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot8', 'div-gpt-ad-bolacom-dfp-nativeOut-slot8-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-1', 'div-gpt-ad-bolacom-visual-story-1-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-2', 'div-gpt-ad-bolacom-visual-story-2-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-3', 'div-gpt-ad-bolacom-visual-story-3-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot(dfpAds_dfpTopframe, 'div-gpt-ad-bolacom-topfrm-oop').addService(googletag.pubads());
      /*googletag.defineSlot(dfpAds_dfpTopframe,[1,1], 'div-gpt-ad-bolacom-topfrm-oop').addService(googletag.pubads());*/
      googletag.defineOutOfPageSlot(dfpAds_liftAds, 'div-gpt-ad-dfp-liftads-oop').addService(googletag.pubads());
      googletag.defineOutOfPageSlot(dfpAds_liftSticker, 'div-gpt-ad-dfp-liftsticker-oop').addService(googletag.pubads());
  
      googletag.pubads().addEventListener('slotResponseReceived', function(event) {
              var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
          var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
          var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/
          var dfp_slotElementId = event.slot.getSlotId().getDomId(); /* get adunit dom id*/
          dfp_slotCount++;
  
          /*check delivering ads slot*/
          if (dfp_slotDelivered == 'block')
          {
  
              if (dfp_slotAdUnitPath == dfpAds_liftAds) {
                  dfp_isLiftAds_active = true;
              }
  
              if (dfp_slotAdUnitPath == dfpAds_liftSticker) {
                  dfp_isLiftSticker_active = true;
              }
  
              /*check for bottomframe rendering process*/
              if (dfp_slotAdUnitPath == dfpAds_dfpBottomframe) {
                  document.getElementById("dfp-bframe-cont-transparent").setAttribute("style", "opacity: 0.7; position: fixed; bottom: 0; min-height: 50px; background-color: #ECECEC; width: 100%; text-align: center;");
                  var footer = document.getElementsByTagName("footer");
                  if (footer.length > 0) footer[0].style.paddingBottom = "40px";
              }
              
              if (dfp_slotAdUnitPath == oop_dfpHeadline) {
                console.log('INIT STICKY HEADLINE ');
                var urlParams = new URLSearchParams(window.location.search);
                var myParam = JSON.parse(urlParams.get('interval'));
                headlineSticky(myParam);
             }

              if (dfp_slotAdUnitPath == dfpAds_dfpTopframe) {
                  var LockScroll = {
                    status: false,
                    timeout: 3000,
                    unset: function() {
                      document.body.style.overflow = "initial";
                      document.body.style.position = "unset";
                      document.body.style.width = "unset";
                      this.status = false;
                    },
                    set: function() {
                      document.body.style.overflow = "hidden";
                      document.body.style.position = "fixed";
                      document.body.style.width = window.screen.width + "px";
                      this.status = true;
                      console.log('set');
                    }
                  };
  
                      let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                      var that = LockScroll;
                      LockScroll.set();
  
                      if (LockScroll.status) {
                          setTimeout(function() {
                              that.unset();
                          }, that.timeout);
                      } else {
                          LockScroll.unset();
                      }
                      if (deviceOrientation) {
                          LockScroll.unset();
                      }
                      window.addEventListener("resize", function() {
                          let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                          if (deviceOrientation) {
                              that.unset();
                              console.log("unset lock scroll")
                          }
                      });
              }
  
  
          }
  
            /* DISPLAY NONE THE IFRAME, FOR ADS ELEMENT OUTSIDE IT'S IFRAME CONTAINER */
            if (dfp_slotElementId.match(/-oop/)) {/* && !dfp_slotElementId.match(/billboard|lb/)) {*/
                if (document.getElementById(dfp_slotElementId) && document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0] && document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].getAttribute('height') == 1) {
                    document.getElementById(dfp_slotElementId).getElementsByTagName('iframe')[0].style.display = "none";
                }
            }
  
          /*CHECK AND EXECUTE CAMPAIGN WICH ARE RUNNING ON SPECIFIC VIEW*/
          if (dfp_slotCount == dfp_adunitCount) {
              dfp_checkUserViewCount();
          }
      });
  
      /*GET META*/
      function document_meta(metaName) {
          var metaResult = '';
          var metas = document.getElementsByTagName('meta');
          if (metas) {
              for (var x = 0, y = metas.length; x < y; x++) {
                  if (metas[x].name.toLowerCase() == metaName) {
                      metaResult += metas[x].content;
                  }
              }
          }
          return metaResult != '' ? metaResult : '';
      }
  
      function inArray(needle, haystack) {
          var length = haystack.length;
          for (var i = 0; i < length; i++) {
              if (haystack[i] == needle) return true;
          }
          return false;
      }
      
      function arrToLowerCase(arr){
        return arr.map(function(v,i){
            return v.toLowerCase();
        });
      }

      function dfp_getCookieValue(e) {
          var n = document.cookie,
              t = n.indexOf(" " + e + "=");
          if (-1 == t && (t = n.indexOf(e + "=")), -1 == t) n = null;
          else {
              t = n.indexOf("=", t) + 1;
              var i = n.indexOf(";", t); - 1 == i && (i = n.length), n = unescape(n.substring(t, i))
          }
          return n
      }
  
      function dfp_setCookie(e, n, t, i) {
          n = escape(n);
          var o = extractDomain();
          if ("" == i) {
              var r = new Date;
              r.setHours(r.getHours(), r.getMinutes() + 5), i = r.toGMTString();
          }
          "" != t && (t = ";Path=" + t), document.cookie = e + "=" + n + ";expires=" + i + t + ";Domain=" + o
      }
  
      function extractDomain() {
          var e, n = window.location.href;
          return e = n.indexOf("://") > -1 ? n.split("/")[2] : n.split("/")[0], e = e.split(":")[0]
      }
  
      function initiate_LiftAds() {
          var divWrapper = (function() {
              var div = document.createElement('div');
  
              return function(el, id) {
                  var oDiv = div.cloneNode(false);
                  oDiv.id = id;
                  el.parentNode.insertBefore(oDiv, el);
                  oDiv.appendChild(el);
              }
          }());
  
          document.getElementById("div-gpt-ad-bolacom-overlay-oop").setAttribute("id", "div-gpt-ad-dfp-liftads-oop");
          /* console.log("init liftads") */
  
          //additional script for tilt ads
          var divContainer = parent.document.getElementById("div-gpt-ad-dfp-liftads-oop");
          divWrapper(divContainer, 'tilt-relative');
  
          var divContainer = parent.document.getElementById("tilt-relative");
          divWrapper(divContainer, 'tilt-box');
  
          var divContainer = parent.document.getElementById("tilt-box");
          divWrapper(divContainer, 'tilt-content');
  
          var divContainer = parent.document.getElementById("tilt-content");
          divWrapper(divContainer, 'ads-tilt');
  
          return 1;
      }
  
      function initiate_LiftSticker() {
          document.getElementById('div-gpt-ad-bolacom-overlay-oop').setAttribute('id', 'div-gpt-ad-dfp-liftsticker-oop');
          googletag.cmd.push(function() {
                // double request if enabled
              googletag.display('div-gpt-ad-dfp-liftsticker-oop')
          });
  
          return 3;
      }
  
      function dfp_checkUserViewCount() {
          if (!navigator.userAgent.match(/Opera Mini/i) /*&& !navigator.userAgent.match(/UCWEB/i) && !navigator.userAgent.match(/UCBrowser/i)*/ ) {
  
              var dfp_CookieName = "dfp_overlayChecker";
              var dfp_OverlayChecker = dfp_getCookieValue(dfp_CookieName);
              /*EXCLUDE CAPPING*/
              var dfp_excludeCPcookies = "dfp_exclude_capping";
              var dfp_excludeCapping = dfp_getCookieValue(dfp_excludeCPcookies);
  
              if (dfp_OverlayChecker == "" || dfp_OverlayChecker == null) dfp_OverlayChecker = "0_0";
  
              var dfp_OverlayCheckerParam = dfp_OverlayChecker.split("_");
              var dfp_Counter = typeof dfp_OverlayCheckerParam[1] != "undefined" ? parseInt(dfp_OverlayCheckerParam[1]) + 1 : 1;
              var dfp_PageView = typeof dfp_OverlayCheckerParam[0] != "undefined" ? parseInt(dfp_OverlayCheckerParam[0]) + 1 : 1;
              console.log('[DFP] dfp_OverlayChecker PV : ' + dfp_PageView + ' Counter : ' + dfp_Counter);
              console.log('[DFP] dfp_isLiftAds_active : ' + dfp_isLiftAds_active);
              console.log('[DFP] dfp_isLiftSticker_active : ' + dfp_isLiftSticker_active);
  
              if (dfp_Counter <= 3) {
  
                  console.log(dfp_Counter + " as " + dfp_PageView)
                  dfp_Counter = viewOrder_format12(dfp_Counter);
                  dfp_setCookie(dfp_CookieName, dfp_PageView + "_" + dfp_Counter, "/", "");
              }
          }
      }
  
      /*Check view counter with combination :
          1: liftads, if there is no liftads campaign then liftsticker has the view privilege
          2: liftsticker
      */
      function viewOrder_format12(dfp_Counter) {
          if (dfp_Counter == 1) {
  
              if (dfp_isLiftAds_active) {
                  console.log('[DFP] Counter format 1-2');
  
                  initiate_LiftAds();
          googletag.cmd.push(function() {
              googletag.display("div-gpt-ad-dfp-liftads-oop")
          });
                  dfp_Counter = 2;
  
              } else if (dfp_isLiftSticker_active) {
  
                  dfp_Counter = initiate_LiftSticker();
  
              }
  
          } else if (dfp_Counter == 2 || dfp_Counter == 3) {
  
              if (dfp_isLiftSticker_active) dfp_Counter = initiate_LiftSticker();
          }
  
          return dfp_Counter;
      }
  
      /* TRACK DMP BY KRUX SEGMENTS*/
      track_dmp();
      
      /* CRITEO CDB Handling */
      CriteoCDBLoad();
  
      /* DMP TARGET */
      googletag.pubads().setTargeting('ksg', Krux.segments);
      googletag.pubads().setTargeting('kuid', Krux.user);
    
        /*TARGET BY SUB CATEGORY*/
      googletag.pubads().setTargeting("subcategory", [dfp_subCategory]);
    
      if (isMatcont) {
          googletag.pubads().setTargeting("isMatcont", ["1"]);
      }      
        
      /*TARGET BY SUB-SUB CATEGORY*/
      googletag.pubads().setTargeting("subSubCategory", [dfp_subSubCategory]);
      googletag.pubads().setTargeting("tags",tagForAds);
      googletag.pubads().setTargeting("currentUrl", urlPath);
      googletag.pubads().setTargeting("Channel", kmklabs.channel.full_slug);
      googletag.pubads().setTargeting("PageType", kmklabs.pageType);
      googletag.pubads().setTargeting("articleType", kmklabs.gtm.type);
      googletag.pubads().setTargeting("Site", "BOLA.COM");
      googletag.pubads().setTargeting("Platform", "MOBILE");
      googletag.pubads().setCentering(true);
      googletag.pubads().enableSingleRequest();
      googletag.pubads().collapseEmptyDivs();
      googletag.enableServices();
          
        /*Bottom Frame Scrolling*/
        var timedBottomFrm = null;
        window.addEventListener("scroll", scrollBottomFrame);
        function scrollBottomFrame() {
             var scrollNode = document.scrollingElement || document.documentElement;
             var scrollTop = scrollNode.scrollTop;
             if (scrollTop >= "200") {
                              window.removeEventListener("scroll", scrollBottomFrame);
                 timedBottomFrm = googletag.defineSlot(dfpAds_dfpBottomframe, [320, 50], 'div-gpt-ad-bolacom-bottomfrm').addService(googletag.pubads());
                googletag.display('div-gpt-ad-bolacom-bottomfrm');
                googletag.pubads().refresh([timedBottomFrm]);
               
                window.GAMLibrary.refreshSlot = timedBottomFrm;
                window.GAMLibrary.setGamBFInterval();
            }
        }
  
  });
  
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-contextual-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-dfp-exposer-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-sc');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-hl');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-dfp-nativeOut-slot1-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-dfp-nativeOut-slot12-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-dfp-nativeOut-slot4-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-dfp-nativeOut-slot8-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-topfrm-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-visual-story-1-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-visual-story-2-oop');
  });
  googletag.cmd.push(function() {
      googletag.display('div-gpt-ad-bolacom-visual-story-3-oop');
  });

  /* ============ HEADLINE STICKY - DEFAULT 3s ============ */
    var headlineStickyInterval=5,headlineStickyStatus=!1;function headlineSticky(a){null!=a&&(headlineStickyInterval=a);var b=document.getElementById("div-gpt-ad-bolacom-hl"),c=document.createElement("div");c.setAttribute("id","div-gpt-ad-bolacom-hl-shadow"),b.parentElement.insertBefore(c,b),console.log(headlineStickyInterval),injectStickyStyleAndAnimation(),window.addEventListener("scroll",headlineStickyScrollEevent)}function headlineStickyScrollEevent(){var a=document.getElementById("div-gpt-ad-bolacom-hl"),b=document.getElementById("div-gpt-ad-bolacom-hl-shadow"),c=b.getBoundingClientRect().top,d=document.querySelector(".layout__nav-content"),e=document.documentElement.scrollTop||document.body.scrollTop;headlineStickyStatus?0>=c?d.classList.contains("layout__nav-content--no-hanging")?a.classList.remove("hl-navbar-hanging"):a.classList.add("hl-navbar-hanging"):(window.removeEventListener("scroll",headlineStickyScrollEevent),removeStickyHeadline(a,!1)):0>=c&&(a.classList.add("hl-active-sticky"),a.style="",removeStickyHeadline(a,!0),headlineStickyStatus=!0)}function removeStickyHeadline(a,b){var c=setInterval(function(){0>=headlineStickyInterval?(a.classList.remove("hl-active-sticky"),a.classList.remove("hl-navbar-hanging"),a.style.margin="10px 0",clearInterval(c),window.removeEventListener("scroll",headlineStickyScrollEevent)):headlineStickyInterval--},1e3);b||(clearInterval(c),a.classList.remove("hl-active-sticky"),a.classList.remove("hl-navbar-hanging"),a.style.margin="10px 0")}function injectStickyStyleAndAnimation(){var a=document.createElement("style");a.textContent=`
		.hl-active-sticky {
			position: fixed;
			top: -100%;
			z-index: 9999;
			left: 50%;
			transform: translateX(-50%);
			margin: 0;
			transition : margin-top .5s ease;
			animation: hlSlideDown .5s forwards;
		}

		.hl-navbar-hanging{
			margin-top : 50px !important;
		}

		@keyframes hlSlideDown{
			0%{top : -100px;}
			100%{top : 0px;}
		}
		`,document.head.appendChild(a)}
  /* ============ HEADLINE STICKY - DEFAULT 3s ============ */
  </script>