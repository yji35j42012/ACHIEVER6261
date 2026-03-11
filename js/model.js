var menu_box = document.querySelector("#menu_box");
menu_box.innerHTML = `
<!-- menu start -->
<div class="menu_side">
	<div id="navbar_menu">
		<ul class="first-ul">
			<li class="lis" name="index"><a href="index.html">Home</a></li>
			<li class="lis" name="about"><a href="it_about.html">About Us</a></li>
			<li class="lis" name="service">
				<a href="#">Services</a>
				<ul><li><a href="it_service_plan.html">System Integration</a></ul>
			</li>
			<li class="lis" name="solution">
				<a href="#">Solutions</a>
				<ul>
					<li><a href="it_network_solution.html">Network Solutions</a></li>
					<li><a href="it_security_solution.html">Security Solutions</a></li>
					<li><a href="it_server_solution.html">Server Solutions</a></li>
				</ul>
			</li>
			<li class="lis contact" name="contact"><a href="it_contact.html">Contact</a></li>
		</ul>
	</div>
	<div class="search_icon">
		<ul>
			<li>
				<a href="#" data-toggle="modal" data-target="#search_bar">
					<i class="fa fa-search" aria-hidden="true"></i>
				</a>
			</li>
		</ul>
	</div>
</div>
<!-- menu end -->`;
const aaa = location.href.split('/')

var navbar_menu = document.querySelectorAll("#navbar_menu .lis");
navbar_menu.forEach(item => {
	console.log(aaa);
	if (aaa[aaa.length - 1].indexOf(item.getAttribute("name")) !== -1) {
		// console.log(navbar_menu);
		document.querySelector('[name="'+item.getAttribute("name")+'"]').classList.add('active');
		return true;
	}else if(aaa[aaa.length - 1]==""){
		document.querySelector('[name="index"]').classList.add('active');
	}
	return false;
});



var footer_box = document.querySelector("#footer_box");
footer_box.innerHTML = `
<div class="container-fuild">
			<div class="row">
				<div class="footer_blog">
					<div class="row">
						<div class="col-md-3 col-sm-6">
							<div class="main-heading left_text">
								<h2>ACHIEVER GAIN INTERNATIONAL LIMITED</h2>
								<p>No. 501, Sec. 6, Nanjing E. Rd., Neihu Dist., Taipei City 114057, Taiwan (R.O.C.)</p>
							</div>
							
							<ul class="social_icons">
								<li class="social-icon fb"><a href="#"><i class="fa fa-facebook"
											aria-hidden="true"></i></a></li>
								<li class="social-icon gp"><a href="#"><i class="fa fa-google-plus"
											aria-hidden="true"></i></a></li>
								<li class="social-icon tw"><a href="#"><i class="fa fa-twitter"
											aria-hidden="true"></i></a></li>
								<li class="social-icon li"><a href="#"><i class="fa fa-linkedin"
											aria-hidden="true"></i></a></li>
								<li class="social-icon ig"><a href="#"><i class="fa fa-instagram"
											aria-hidden="true"></i></a></li>
							</ul>
						</div>
						<div class="col-md-3 col-sm-6">
							<div class="main-heading left_text">
								<h2>Our Company</h2>
							</div>
							<ul class="footer-menu">
								<li><a href="it_about.html"><i class="fa fa-angle-right"></i> About us</a></li>
								<li><a href="it_contact.html"><i class="fa fa-angle-right"></i>
										Contact us</a></li>
							</ul>
						</div>
						<div class="col-md-3 col-sm-6">
							<div class="main-heading left_text">
								<h2>Our Services & Solutions</h2>
							</div>
							<ul class="footer-menu">
								<li><a href="it_network_solution.html"><i class="fa fa-angle-right"></i> Network
										Solutions</a></li>
								<li><a href="it_security_solution.html"><i class="fa fa-angle-right"></i> Security
										Solutions</a></li>
								<li><a href="it_server_solution.html"><i class="fa fa-angle-right"></i> Server
										Solutions</a></li>
							</ul>
						</div>
						<div class="col-md-3 col-sm-6">
							<div class="main-heading left_text">
								<h2>More Info</h2>
							</div>
							<ul class="footer-menu">
								<li><a href="it_privacy_policy.html"><i class="fa fa-angle-right"></i> Privacy
										policy</a></li>
								<li><a href="it_term_condition.html"><i class="fa fa-angle-right"></i> Terms and
										conditions</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="cprt">
					<p>Copyright@ ACHIEVER GAIN INTERNATIONAL LIMITED.All Rights Reserved.</p>
				</div>
			</div>
		</div>
`;
