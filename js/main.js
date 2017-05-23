/* Landing portview JS*/

$(document).ready(function() {

				$("#title").hide();
				$("#motto").hide();
				$("#arr").hide();
				$("#logo,#one,#two,#three").hide();

				function bgchange() {
					$("body").css("background-color", "black");
					$("body").css("color", "white");
				}
				setInterval(bgchange, 1000);

				
				function hideele(){
					$("#title").hide();
					$("#motto").hide();
					$("#arr").hide();
					$("#logo,#one,#two,#three").hide();
					$("#title").fadeIn(1500,function(){		
							$("#motto").fadeIn(10000);
							$("#logo,#one,#two,#three").fadeIn(8000);
							$("#arr").fadeIn(14000);
						});
				}
				setTimeout(hideele, 1000);					

				function navBar() {
					$(".nav-wrapper").css("background-color", "black");
					$("#logo,#one,#two,#three").css("color", "white");
					$("#one,#two,#three").css("font-weight", "700");
				}
				setInterval(navBar, 1000);

				// $("#one,#two,#three").on("hover",function() {
				// 	this.css("background-color" "#c0c0c0");
				// });
			});

/* Landing portview JS*/