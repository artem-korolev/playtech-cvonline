import React, { Component } from 'react'

import MainWrapper from '../components/MainWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

import filter_job_btn from '../assets/filter_job_btn.png'

class JobOffers extends Component {
	render() {
		return (
			<MainWrapper>
				<Header />

				<div style={{ padding: '68px 24px 26px 24px' }}>
					<div style={{ display: 'table', width: '100%' }}>
						<div style={{ display: 'table-cell', verticalAlign: 'middle', paddingTop: '2px' }}>
							<PageTitle>AVAILABLE JOB OFFERS</PageTitle>
						</div>
						<div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'right' }}>
							<a href="#" id="playtech-cvo-offers-filter-job-offers">
								<img src={filter_job_btn} title="FILTER JOB OFFERS" />
							</a>
						</div>
					</div>

					<div id="playtech-cvo-offers-filter-by-loc-form" style={{ display: 'none' }}>
						<div style={{ backgroundColor: '#f6f6f6', display: 'table', width: '100%', marginTop: '20px' }}>
							<div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '13px', fontWeight: 600, lineHeight: '12px', textTransform: 'uppercase', margin: '30px', padding: '0 0 30px 0', borderBottom: '1px solid #dddddd' }}>Filter by location</div>
							<form action="#">
								<ul style={{ float: 'left', margin: '0 30px 30px 30px', padding: 0 }}>
									<li class="playtech-cvo-checkbox">
										<input type="checkbox" id="playtech-cvo-checkbox-tallinn" checked="checked" />
										<label for="playtech-cvo-checkbox-tallinn">Tallinn</label>
									</li>
									<li class="playtech-cvo-checkbox" style={{paddingLeft: 20}}>
										<input type="checkbox" id="playtech-cvo-checkbox-tartu" checked="checked" />
										<label for="playtech-cvo-checkbox-tartu">Tartu</label>
									</li>
								</ul>
							</form>
						</div>
					</div>
				</div>
				{/*<script>
	         Filter functionality 
	        function filterByLocation() {
			    var tartu_checked = $("#playtech-cvo-checkbox-tartu").is(':checked');
			    var tallin_checked = $("#playtech-cvo-checkbox-tallinn").is(':checked');
			$("#playtech-cvopage-joboffers .playtech-cvopage-joboffers").each(function(){
				var job_offer_location = $(".playtech-cvopage-joboffer-location", this).html();
				var job_offer_visible = false;
				job_offer_visible = (job_offer_location.match(/tallinn/i) && tallin_checked) ||
				(job_offer_location.match(/tartu/i) && tartu_checked);
				(job_offer_visible) ? $(this).show() : $(this).hide();
			});
		}
		$(".playtech-cvo-checkbox input").change(function(e){
			$("#playtech-cvopage-joboffers-loadmore").hide();
			var tartu_checked = $("#playtech-cvo-checkbox-tartu").is(':checked');
			var tallin_checked = $("#playtech-cvo-checkbox-tallinn").is(':checked');
			if ( !(tallin_checked || tartu_checked) ) {
				$(this).prop( "checked", true );
				return;
			}
			filterByLocation();
		});
	var playtechJobOffers = [
			"../assets/filter_job_btn.png",
			"../assets/filter_job_offers.jpg"
		];
		var playtechJobOffers_filter = false;
		$("#playtech-cvo-offers-filter-job-offers").click(function(){
			$("#playtech-cvo-checkbox-tartu").prop('checked', true);
			$("#playtech-cvo-checkbox-tallinn").prop('checked', true);
			if (playtechJobOffers_filter) {
				playtechJobOffers_filter = false;
				$("#playtech-cvo-offers-filter-by-loc-form").hide();
				$("#playtech-cvopage-joboffers-loadmore").show();
				var count = 0;
				filterByLocation();
				$("#playtech-cvopage-joboffers .playtech-cvopage-joboffers").each(function(){
					count++;
					if (count>4) {
						$(this).hide();
					}
				});
			} else {
				playtechJobOffers_filter = true;
				$("#playtech-cvo-offers-filter-by-loc-form").show();
				$("#playtech-cvopage-joboffers-loadmore").hide();
				filterByLocation();
			}
			$("img", this).attr("src", playtechJobOffers[playtechJobOffers_filter === true ? 1: 0]);
			return false;
		});
</script>
*/}
				<div class="playtech-cvopage-joboffers" id="playtech-cvopage-joboffers-template" style={{display: "none"}}>
					<div class="playtech-cvopage-joboffers-bg">
						<div>
							<div class="playtech-cvopage-joboffer-location">Tartu</div>
							<div class="playtech-cvopage-joboffer-title">Senior Flash Developer/ Team Lead (Live Unit)</div>
						</div>
					</div>
					<div class="playtech-cvopage-joboffers-bottom">
						<div style={{ paddingLeft: 37 }}><a class="playtech-cvopage-joboffer-readmore" target="blank" href="#"><img src="../assets/job_readmore_btn.png" /></a></div>
						<div style={{ textAlign: "right", paddingRight: 37 }}>
							<a style={{
								fontFamily: "TitilliumWeb-LIght",
								letterSpacing: 1,
								textDecoration: "none",
								color: "#fff",
								fontSize: 13,
								fontWeight: 600,
								lineHeight: 12,
							}}>SHARE</a>
							<a class="playtech-cvopage-joboffer-share-facebook" href="#"><img src="../assets/jo_share_fb.png" /></a>
							<a class="playtech-cvopage-joboffer-share-email" href="#"><img src="../assets/jo_share_email.png" /></a>
						</div>
					</div>
				</div>

				<div style={{ padding: "11px 0 0 4", clear: "both" }} id="playtech-cvopage-joboffers"></div>

				<div style={{clear: "both"}}></div>

				<div style={{ textAlign: "center", paddingTop: 34 }} id="playtech-cvopage-joboffers-loadmore">
					<a href="#">
						<img src="../assets/jo_loadmore.png" />
					</a>
				</div>


				<div style={{ paddingTop: 105, }}>
					<div class="playtech-cvopage-photos-carousel">
						<div class="playtech-cvopage-photos-carousel-prev"></div>

						<div class="playtech-cvopage-photos-carousel-photo playtech-cvopage-photos-carousel-photo1"></div>
						<div class="playtech-cvopage-photos-carousel-photo playtech-cvopage-photos-carousel-photo2"></div>
						<div class="playtech-cvopage-photos-carousel-photo playtech-cvopage-photos-carousel-photo3"></div>
						<div class="playtech-cvopage-photos-carousel-photo playtech-cvopage-photos-carousel-photo4"></div>
						<div class="playtech-cvopage-photos-carousel-photo playtech-cvopage-photos-carousel-photo5"></div>

						<div class="playtech-cvopage-photos-carousel-next"></div>
					</div>
				</div>
				{/*
<script>
	var PTCarousel_ptotos = [
		"../assets/photos/022-2508.jpg",
		"../assets/photos/054-2660.jpg",
		"../assets/photos/059-2709.jpg",
		"../assets/photos/088-2870.jpg",
		"../assets/photos/147-3114.jpg",
		"../assets/photos/166-3195.jpg",
		"../assets/photos/IMG_2447.JPG",
		"../assets/photos/IMG_2667.jpg",
		"../assets/photos/IMG_4119.jpg",
		"../assets/photos/IMG_4291.jpg",
		"../assets/photos/IMG_4551.jpg",
		"../assets/photos/IMG_4615.jpg",
		"../assets/photos/IMG_4679.jpg",
		"../assets/photos/IMG_4717.jpg"
	];
	
	for (var i=0; i<PTCarousel_ptotos.length; i++) {
		var img = new Image();
		img.src = PTCarousel_ptotos[i];
	}
	
	var playtechCVOnlineCarouselPosition = 0;
	var PTCarousel_animation_started = false;
	function PTCarousel_setBackgroundImages() {
		for (var i=1; i<=5; i++) {
			$(".playtech-cvopage-photos-carousel-photo"+i).css("background-image", "url(" + PTCarousel_ptotos[playtechCVOnlineCarouselPosition+i-1] + ")");
			$(".playtech-cvopage-photos-carousel-photo"+i).attr("slide_nr", playtechCVOnlineCarouselPosition+i-1);
		}
	}
	PTCarousel_setBackgroundImages();

	function PTCarousel_animate(dir) {
		PTCarousel_setBackgroundImages();PTCarousel_animation_started=false;return;
		for (var i=1; i<=5; i++) {
			if (dir === "next") {
				$(".playtech-cvopage-photos-carousel-photo"+i).css("transform-origin", "0% 100%");
			} else {
				$(".playtech-cvopage-photos-carousel-photo"+i).css("transform-origin", "100% 0%");
			}
			$(".playtech-cvopage-photos-carousel-photo"+i).addClass("playtech-cvopage-photos-carousel-photo-animate");
		}
		setTimeout(function() {
			for (var i=1; i<=5; i++) {
				if (dir==="next") {
					$(".playtech-cvopage-photos-carousel-photo"+i).css("transform-origin", "100% 0%");
				} else {
					$(".playtech-cvopage-photos-carousel-photo"+i).css("transform-origin", "0% 100%");
				}
				$(".playtech-cvopage-photos-carousel-photo"+i).removeClass("playtech-cvopage-photos-carousel-photo-animate");
			}
			PTCarousel_setBackgroundImages();
			setTimeout(function() {
				PTCarousel_animation_started = false;
			}, 200);
		}, 200);
	}

	$(".playtech-cvopage-photos-carousel-photo").click(function(){
		$("#playtech-cvopage-photos-carousel-lightgallery-image"+$(this).attr("slide_nr")).trigger("click");
	});

	$(".playtech-cvopage-photos-carousel-next").click(function(){
		if (PTCarousel_animation_started) return false;
		if (playtechCVOnlineCarouselPosition+6 > PTCarousel_ptotos.length) return false;
		PTCarousel_animation_started = true;
		playtechCVOnlineCarouselPosition++;
		PTCarousel_animate("next");
		return false;
	});
	$(".playtech-cvopage-photos-carousel-prev").click(function(){
		if (PTCarousel_animation_started) return false;
		if (playtechCVOnlineCarouselPosition == 0) return false;
		PTCarousel_animation_started = true;
		playtechCVOnlineCarouselPosition--;
		PTCarousel_animate("prev");
		return false;
	});
</script>*/}
				<div id="playtech-cvopage-photos-carousel-preloader">
					{/*<script>for (var i=0; i<PTCarousel_ptotos.length; i++) {document.write('<img src="'+ PTCarousel_ptotos[i] +'" width="1" height="1" />');}</script>*/}
				</div>

				<div id="playtech-cvopage-photos-carousel-lightgallery" style={{ display: "none" }}>
				</div>
				{/*<script>
for (var i=0; i<PTCarousel_ptotos.length; i++) {
	$("#playtech-cvopage-photos-carousel-lightgallery").append('<a id="playtech-cvopage-photos-carousel-lightgallery-image'+i+'" href="'+ PTCarousel_ptotos[i] +'"><img src="'+ PTCarousel_ptotos[i] +'"></a>');
}
</script>*/}

				<div style={{clear: "both"}}></div>

				<div style={{ padding: "87px 0 107px 25" }} class="playtech-cvopage-benefits-wrapper">
					<div class="playtech-cvo-custom-content-mobile-full-width" style={{
						fontFamily: "TitilliumWeb-Bold",
						color: "#081c4a",
						fontSize: 36,
						fontWeight: 700,
						lineHeight: 68.2,
					}}>BENEFITS</div>
					<div class="playtech-cvopage-benefits playtech-cvo-custom-content-mobile-full-width">
						<div>
							<img src="../assets/fish_system_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>The fish system</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>A unique progressive motivation system which allows employees to get different benefits and discounts, depending on their time worked in Playtech Estonia. For example, they receive travel vouchers, additional vacation days, et al.</div>
						</div>
						<div>
							<img src="../assets/discount_card_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>Discount card</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>All employees are eligible for a number of discounts when presenting the Playtech card in different sports clubs, dining venues, stores, health care services providers, etc.
		</div>
						</div>
						<div>
							<img src="../assets/company_events_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>Company events</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>It has become a tradition to organize different company events for employees and their families. For example: Spring Barbecue, Summer Days, different sport events, Autumn Hike, Christmas Party and many more.
		</div>
						</div>
						<div>
							<img src="../assets/office_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>Office</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>Playtech offices are comfortable, with modern working tools and work conditions. There are chillout and relaxing areas with different games and free time activities available. In addition, everyone can enjoy free snack, beverages in the kitchens, also free massage is available in the office.
		</div>
						</div>
						<div>
							<img src="../assets/employee_dev_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>Employee developement</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>Playtech offers various internal and external trainings, seminars and in addition, management programs are held for different level managers. As Playtech has many different positions, moving occupationally inside the company is very common.
		</div>
						</div>
						<div>
							<img src="../assets/multicultural_icon.jpg" />
							<div style={{
								fontFamily: "TitilliumWeb-Bold",
								color: "#081c4a",
								fontSize: 30,
								fontWeight: 700,
								lineHeight: 30, padding: "10px 0 20px 0",
							}}>Multicultural work environment</div>
							<div style={{
								fontFamily: "TitilliumWeb-SemiBold",
								color: "#143175",
								fontSize: 13,
								fontWeight: 300,
								lineHeight: 20,
							}}>Playtech has presence in 17 geographical locations and more than 5000 employees. In Estonia, you can work together with team mates from 22 different countries! It truly us a cultural mix of talented people from all over the world!</div>
						</div>
					</div>


					{/*<!--<img src="../assets/Benefits2.jpg">-->*/}
				</div>

				<Footer />
			</MainWrapper>
		);
	}
}

export default JobOffers;
