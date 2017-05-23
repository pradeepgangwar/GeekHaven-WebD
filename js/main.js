/* Landing portview JS*/

$(document).ready(function() {
				$("#title").hide();
				$("#arr").hide();
				$("#title").fadeIn(3500);
				$("#motto").hide();
				$("#motto").fadeIn(12000);
				$("#logo,#one,#two,#three").hide();
				$("#logo,#one,#two,#three").fadeIn(10000);


				function bgchange() {
					$("body").css("background-color", "black");
					$("body").css("color", "white");
				}
				setInterval(bgchange, 1000);

				$("#arr").fadeIn(14000);

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