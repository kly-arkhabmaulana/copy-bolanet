<!-- MOBILE BOLA.COM ARTICLE -->
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
            var node = document.getElementsByTagName('script')[0];

            /* GPT */
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';

            /* REVIVE */
            rads.src = (useSSL ? 'https:' : 'http:') + '//adserver.kl-youniverse.com/asyncjs.php'; // #2
            rads.async = true; // #3

            node.parentNode.insertBefore(gads, node);
            node.parentNode.insertBefore(rads, node); // #4
        })();
    };
    /* END - LOAD PUBMATIC, GOOGLE ADS & REVIVE */
</script>

<script>
    /*Update 20200321-0218-DK*/
    /*PROTOTYPE CUSTOM FILTERING*/
    String.prototype.klyFiltering = function (delimiter) {
        return this.trim().split(delimiter).map(function(t){return t.trim().toLowerCase()}).filter(x => x != "");
    }; 

    /*SET INTERVAL TO AUTO REFRESH BOTTOM FRAME ADS - NEW*/
    window.GAMLibrary = {};
    window.GAMLibrary = {
      dfpSlideup          :   '/36504930/m.bola.com/dfp-slideup',
      dfpExposer          :   '/36504930/m.bola.com/dfp-exposer',
      dfpBottomFrame      :   '/36504930/m.bola.com/dfp-bottomfrm',
      dfpTopFrame         :   '/36504930/m.bola.com/dfp-topfrm',
      dfpHeadline         :   '/36504930/m.bola.com/dfp-headline',
      timedBottomFrm      :   null,
      infiniteSCId        :   1,
      setGamBFInterval    :   function (active = true) {
                                if (!active) {
                                  clearInterval(window.GAMLibrary.gamBFInterval);
                                  return;
                                }
                                window.GAMLibrary.gamBFInterval = setInterval(function () {
                                  document.querySelector("#dfp-spinads") && document.querySelector("#dfp-spinads").parentElement.remove(); 
                                  googletag.pubads().refresh([window.GAMLibrary.refreshSlot]);
                                }, 60000);
                              },
      countScInfinite     :   function(){ return this.infiniteSCId++;},
      gptInitInfiniteSC   :   function(){
                                var pageType = kmklabs.pageType;
                                if (pageType !== 'readPage') {
                                  var that = this;
                                  $('.js-page__articles').on('before_display', function() {
                                    var scIndex = that.countScInfinite();
                                    var slotName = 'div-gpt-ad-bolacom-infinite-sc-' + scIndex;
                                    var slotDiv = document.createElement('div');

                                    slotDiv.id = slotName;
                                    slotDiv.className = "infinite_ad";
                                    slotDiv.setAttribute("data-info", "ad");
                                    slotDiv.setAttribute("style", "text-align:center;border-top: 1px solid #E2E2E6;padding-top: 15px;");
                                    $(slotDiv).prependTo($(this));
                                    console.log(slotName);

                                    /*REGISTER DIV AND REFRESH SLOT*/
                                    googletag.cmd.push(function() {
                                      var slot = googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], slotName).addService(googletag.pubads()).setTargeting("position",[scIndex]);
                                      googletag.display(slotName);
                                      CriteoCDBRefreshDFP([slot]);
                                    });
                                  });
                                } else {
                                  googletag.cmd.push(function() {
                                    googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], 'div-gpt-ad-bolacom-sc').addService(googletag.pubads());
                                    googletag.display('div-gpt-ad-bolacom-sc');
                                  });
                                }
                              },
      documentMeta        :   function document_meta(metaName) {
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
                              },
      inArray             :   function (needle, haystack) {
                                var length = haystack.length;
                                for (var i = 0; i < length; i++) {
                                    if (haystack[i] == needle) return true;
                                }
                                return false;
                              },
      arrToLowerCase      :   function (arr){
                                return arr.map(function(v,i){
                                  return v.toLowerCase();
                                });
                              },
      lockScroll          :   {
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
                                }
                              },
      scrollBottomFrame   :   function() {
                              this.scroll = function(){
                                var scrollNode = document.scrollingElement || document.documentElement;
                                var scrollTop = scrollNode.scrollTop;
                                if (scrollTop >= "200") {
                                  console.log('testing scroll',scrollTop,this.timedBottomFrm);
                                  window.removeEventListener("scroll", this.scrollHandler);

                                  googletag.display('div-gpt-ad-bolacom-bottomfrm');
                                  googletag.pubads().refresh([this.timedBottomFrm]);

                                  this.refreshSlot = this.timedBottomFrm;
                                  this.setGamBFInterval();
                                  }
                              };
                                this.scrollHandler = this.scroll.bind(this);
                                window.addEventListener("scroll", this.scrollHandler);
                              },
      infiniteSCArticle :     function() {
                                  var parentElement = document.querySelector(".article"),
                                  pagingElement = parentElement.querySelectorAll(".article-content-body__item");

                                  pagingElement && pagingElement.forEach(function(v, i) {
                                      v.setAttribute("paging-index", i);
                                  })

                                  mo = new MutationObserver(function(mutations) {
                                      mutations.forEach(function(el) {
                                          var oldValue = el.oldValue,
                                          target = el.target,
                                          scContainer,
                                          SC,
                                          pagingIndex;
                                          if (oldValue && oldValue.match(/article-content-body__item--hidden/ig)) {
                                          pagingIndex = target.getAttribute('paging-index');
                                          console.log("paging-index : ", pagingIndex, (pagingIndex % 2));

                                              if (!(pagingIndex % 2)) {
                                                  target.childNodes.forEach(function(v, i) {
                                                      if (v.id && v.id.match(/gpt-ad-bola-sc/ig)) {
                                                      console.log("ID & PAGING NUMBER", v.id, pagingIndex);
                                                      scContainer=document.getElementById(v.id);
                                                          if ( scContainer && !SC) {
                                                              console.log("sccontainer : ",scContainer);
                                                              scContainer.classList.add("gam-sc-infinite"); /*Bolacom Custom Script*/
                                                              SC = googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], v.id).addService(googletag.pubads());
                                                              googletag.display(v.id);
                                                              googletag.pubads().refresh([SC]);
                                                          }
                                                      }
                                                  });
                                              }
                                          }
                                      });
                                  });

                                  parentElement && mo.observe(parentElement, {
                                      childList: true,
                                      attributes: true,
                                      characterData: false,
                                      subtree: true,
                                      attributeOldValue: true,
                                      characterDataOldValue: false,
                                  });
                                }
    };
  
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

    googletag.cmd.push(function() {
        /*INIT MATCONT*/
        var urlPath = document.URL, /*GET FULL URL PATH*/
        isMatcont = false,
        blackListWords = new Array('matcont','aduhai','kelamin','vital','anal','belahan','bercinta','bergairah','gairah','intim','bikini','bokong','boob','bra','bugil','celana','ciuman','cleavage','dada','dewasa','diremas','doggie','ejakulasi','ereksi','erotis','foreplay','kiss','seks','gangbang','horny','hot','kamasutra','keperawanan','perawan','kondom','kontrasepsi','libido','lingerie','masturbasi','mature','menggairahkan','menggoda','mesra','miss-v','mr-p','nakal','naughty','nipple','nipples','onani','oral','oral seks','organ','orgasme','paha','pantat','panties','payudara','pelecehan','telanjang','penetrasi','penis','perkosa','perkosaan','pole','porno','pornoaksi','pornografi','telentang','provokatif','putting','ranjang','sex','penetratif','seksi','seksual','sensual','seronok','doll','toys','skandal','sperma','striptease','striptis','syur','terangsang','tiduri','topless','vagina','vibrator','lendir','prostitusi','homoseks','meraba-raba','mesum','memerkosa','rudapaksa','kemaluan','kasus asusila','pemerkosaan','hubungan seksual','hubungan intim','video porno','berita hoax','ternyata hoax','ahed tamimi','konflik palestina israel','konflik suriah','ujaran kebencian','g30s','kediktatoran arab saudi','konflik palestina-israel','fpi','penembakan','pelecehan seksual','tips seks','komunitas swinger','fenomena kelainan seksual','penyimpangan seks','posisi seks','obat kuat','bentuk payudara','implan payudara','chat firza-rizieq','anarkisme suporter sepakbola','bentrok suporter','pengeroyokan','penganiayaan','begal motor','kekerasan pada wartawan','pemerkosaan anak','pencabulan','bentrokan warga','bentrokan','kasus narkoba','akibat merokok','bahaya merokok','berhenti merokok','cara berhenti merokok','efek berhenti merokok','larangan merokok','tips berhenti merokok','rokok elektrik','pilpres 2019','koalisi pilpres 2019','koalisi prabowo','koalisi jokowi','prabowo-sandiaga','ratna sarumpaet','capres jokowi','capres prabowo','kebohongan ratna sarumpaet','prabowo subianto','jemaah ansharut daulah','aliran sesat','lia eden','kisah mualaf','penistaan agama','suporter tewas','gempa palu','gempa donggala','gempa sulawesi tengah','pembunuhan','tsunami palu','penemuan mayat','lion air jatuh di karawang','lion air jatuh','pembunuhan sadis','lion air hilang kontak','pesawat jatuh','pesawat hilang kontak','kecelakaan','kapal tenggelam di danau toba','kecelakaan bus','kapal tenggelam','kasus tabrak lari','bunuh diri','perselingkuhan','kisah perselingkuhan','razia pasangan mesum','seks bebas','gangguan jiwa','tes keperawanan','kontroversi hukuman mati','stres dan depresi','ahok gugat cerai veronica tan','Kanker','Impotensi','merokok','Perokok','Rokok','tembakau','Pelanggaran','Tablet','Overdosis','Jantung','Stroke','Cancer','Narkoba','Djarum','Ganja','BNN','Obesitas','Osteoporosis','Corona','Corona di indonesia','virus corona','virus-corona','covid-19','wabah corona','menewaskan','menewaskan orang','mengancam nyawa','meninggal','meninggal dunia','orang mati','orang tewas','pemakaman','petugas penyelamat','telah meninggal','terbunuh','tewas','tewaskan','tim penyelamat','wanita meninggal','autopsi','belasungkawa','bencana','bencana besar','bunuh orang','darurat bencana','dilaporkan tewas','dimakamkan','dipastikan tewas','ditemukan mati','ditemukan tewas','hilangnya nyawa','identitas korban','inalillahi','jasad korban','jasadnya','jenasah wanita','jenazah','jenazah pria','jenazah teridentifikasi','jasad','kehilangan hidupnya','kehilangan nyawa','kehilangan nyawanya','kematian','korban','korban jiwa','korban meninggal','korban tewas','mati','mayat','mayat korban','membunuh','membunuh istrinya','membunuh mereka','membunuh suaminya','menemui ajal','mengalami koma','menghembuskan nafas terakhir','menimbulkan korban','meninggal akibat sakit','menyebabkan kematian','meregang nyawa','meregggut nyawa','modar','nyawa hilang','nyawa melayang','penyebab kematian','tak bernyawa','tak sadarkan diri','terkapar','tidak bernyawa','tutup usia','wafat','kematian virus','kematian wabah','korban terinfeksi','virus menyerang','merenggut nyawa','pelayat','hilangkan nyawa','renggut nyawa','wabah','keadaan kritis','kehilangan darah','merenggut jiwa','telan nyawa','menelan nyawa','memakan nyawa','dinyatakan meninggal','nyawa tak tertolong','penyakit','sakit pernapasan','sesak','korona','corona','odp','pdp','virus','rumah sakit','Covid-19','virus korona','positif korona','COVID-19','terjangkit COVID-19','terinfeksi virus corona'),
            
        /* POPULATE META DATA KEYWORDS */
        dfp_pageTitle = kmklabs.article && kmklabs.article.title.klyFiltering(' '),
        dfp_titles = (typeof dfp_pageTitle !== 'undefined') ? dfp_pageTitle : '',
        dfp_pageKeywords = GAMLibrary.documentMeta("keywords"),
        dfp_keyword = dfp_pageKeywords.klyFiltering(","),

        /* POPULATE META DATA DESC */
        dfp_pageDesc = GAMLibrary.documentMeta("description"),
        dfp_desc = dfp_pageDesc.klyFiltering(","),
        tagForAds = (typeof kmklabs !== 'undefined') ? kmklabs.gtm.tag.replace(/[^A-Za-z0-9|\- ]/ig,"").klyFiltering("|") : "",
        dfp_keywords = dfp_keyword.concat(dfp_titles, dfp_desc, tagForAds);

        /*MATURE CONTENT DEFINED VAR & SET TARGETTING*/
        if (!blackListWords) {
            var blackListWords = new Array('matcont');
        }

        /*CONTENT FILTERING SCRIPT*/
        dfp_keywords.forEach(function(sKeyword) {
            sKeyword = sKeyword.toLowerCase();
            blackListWords = GAMLibrary.arrToLowerCase(blackListWords);
            tagForAds.push(sKeyword);
            if (GAMLibrary.inArray(sKeyword, blackListWords)){
                isMatcont = true;
            }
        });

    /*DEFINE ALL SLOT*/
    var oop_dfpHeadline = '/36504930/m.bola.com/dfp-headline';
    googletag.defineSlot(GAMLibrary.dfpHeadline, [[320, 50],[320, 100]], 'div-gpt-ad-bolacom-hl').addService(googletag.pubads());
    googletag.defineSlot('/36504930/m.bola.com/dfp-sc', [300, 250], 'div-gpt-ad-bolacom-sc').addService(googletag.pubads());
    googletag.defineSlot(GAMLibrary.dfpExposer, [[300,250], [300,600], [320,480]], 'div-gpt-ad-bolacom-dfp-exposer-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-contextual', 'div-gpt-ad-bolacom-contextual-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot(GAMLibrary.dfpTopFrame, 'div-gpt-ad-bolacom-topfrm-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot1', 'div-gpt-ad-bolacom-dfp-nativeOut-slot1-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot12', 'div-gpt-ad-bolacom-dfp-nativeOut-slot12-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot4', 'div-gpt-ad-bolacom-dfp-nativeOut-slot4-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-nativeOut-slot8', 'div-gpt-ad-bolacom-dfp-nativeOut-slot8-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-1', 'div-gpt-ad-bolacom-visual-story-1-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-2', 'div-gpt-ad-bolacom-visual-story-2-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot('/36504930/m.bola.com/dfp-visual-story-3', 'div-gpt-ad-bolacom-visual-story-3-oop').addService(googletag.pubads());
    googletag.defineOutOfPageSlot(GAMLibrary.dfpSlideup, 'div-gpt-ad-dfp-liftsticker-oop').addService(googletag.pubads());

    /*Bottom Frame Scrolling*/
    GAMLibrary.timedBottomFrm = googletag.defineSlot(GAMLibrary.dfpBottomFrame, [320, 50], 'div-gpt-ad-bolacom-bottomfrm').addService(googletag.pubads());
    GAMLibrary.scrollBottomFrame();
    /*Bottom Frame Scrolling*/

    googletag.pubads().addEventListener('slotResponseReceived', function(event) {
        var dfp_slotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/
        var dfp_slotAdUnitPath = event.slot.getSlotId().getAdUnitPath(); /* get adunit path */
        var dfp_slotAdUnitID = event.slot.getSlotId().getId(); /* get adunit container id*/
        var dfp_slotElementId = event.slot.getSlotId().getDomId(); /* get adunit dom id*/

        /*check delivering ads slot*/
        if (dfp_slotDelivered == 'block'){
            /*check for bottomframe rendering process*/
            if (dfp_slotAdUnitPath == GAMLibrary.dfpBottomFrame) {
                document.getElementById("dfp-bframe-cont-transparent").setAttribute("style", "opacity: 0.7; position: fixed; bottom: 0; min-height: 50px; background-color: #ECECEC; width: 100%; text-align: center;");
                var footer = document.getElementsByTagName("footer");
                if (footer.length > 0) footer[0].style.paddingBottom = "40px";
            }

            if (dfp_slotAdUnitPath == GAMLibrary.dfpHeadline) {
                console.log('INIT STICKY HEADLINE ');
                var urlParams = new URLSearchParams(window.location.search);
                var myParam = JSON.parse(urlParams.get('interval'));
                headlineSticky(myParam);
             }

            if (dfp_slotAdUnitPath == GAMLibrary.dfpTopFrame) {
                let deviceOrientation = (window.innerHeight < window.innerWidth ? 1 : 0);
                var that = GAMLibrary.lockScroll;
                GAMLibrary.lockScroll.set();

                if (GAMLibrary.lockScroll.status) {
                    setTimeout(function() {
                        that.unset();
                    }, that.timeout);
                } else {
                    GAMLibrary.lockScroll.unset();
                }
                if (deviceOrientation) {
                    GAMLibrary.lockScroll.unset();
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
    });

    GAMLibrary.infiniteSCArticle();
  
    /* CRITEO CDB Handling */
    CriteoCDBLoad();

    /* START TARGETING BLOCK */
    if (isMatcont) {
        googletag.pubads().setTargeting("isMatcont", ["1"]);
    }
    if(typeof Krux !== "undefined"){
        googletag.pubads().setTargeting('ksg', Krux.segments);
        googletag.pubads().setTargeting('kuid', Krux.user);
    }
    googletag.pubads().setTargeting("tags",tagForAds);
    googletag.pubads().setTargeting("currentUrl", urlPath);
    googletag.pubads().setTargeting("type", kmklabs.gtm.type);
    googletag.pubads().setTargeting("pageType", kmklabs.pageType);
    googletag.pubads().setTargeting("channel", kmklabs.gtm.subCategory);
    googletag.pubads().setTargeting("audience", kmklabs.gtm.audience.split("|"));
    googletag.pubads().setTargeting("isAdvertorial", typeof (isAdvertorial = kmklabs.article && kmklabs.article.isAdvertorial.toString()) === "undefined" ? "false" :  isAdvertorial);   
    googletag.pubads().setTargeting("isMultipage", typeof (isMultipage = kmklabs.article && kmklabs.article.isMultipage.toString()) === "undefined" ? "false" : isMultipage );
    googletag.pubads().setTargeting("articleId", kmklabs.gtm.articleId.toString());
    googletag.pubads().setTargeting("pagingNum", typeof (pageParam = kmklabs.gtm.pageParam && kmklabs.gtm.pageParam.toString()) === "undefined" ? "false" : pageParam );
    /* END TARGETING BLOCK */

    googletag.pubads().setCentering(true);
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
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
    googletag.display('div-gpt-ad-bolacom-topfrm-oop');
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
			margin-top : 50px !important;
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