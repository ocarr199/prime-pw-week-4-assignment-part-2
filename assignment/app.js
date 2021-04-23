

	var i = 0; // Start point
	var images = [];
	var time = 1300;

	// Image List
	images[0] = 'Airmax.jpg';
	images[1] = 'Gel-Lyte3.jpg';
	images[2] = 'Jordan1.jpg';
	images[3] = 'sk8-hi.jpg';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}


	// Change Image



	window.onload = changeImg;
