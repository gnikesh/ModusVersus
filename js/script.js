function openTabs(evt, tabName){
	var i, 	tabContent, tabLinks;

	tabContent = document.getElementsByClassName('tab-content');
	for (var i = 0; i < tabContent.length; i++){
		tabContent[i].style.display='none';
	}

	// tabLinks = document.getElementsByClassName('tablinks');
	// for (var i =0; i < tabLinks.length; i++_){
	// 	tabLinks[i].className = tablinks[i].className.replace("active", "");	
	// }

	document.getElementById(tabName).style.display = "block";
	// evt.currentTarget.className += "active";
}


function openRTabs(evt, tabName){
	var i, tabContent, tabLinks;

	tabContent = document.getElementsByClassName('r-tab-c');
	for (var i = 0; i < tabContent.length; i++){
		tabContent[i].style.display='none';
	}

	document.getElementById(tabName).style.display = "block";
}


function accordionExpand(accName){
	var accContent;
	var img;
	var imgArray;
	accContent = document.getElementsByClassName('accordion-content');
	img = document.getElementsByClassName('accordion-icon');

	for (var i = 0; i < accContent.length; i++) {
	   accContent[i].style.display = 'none';
	   imgArray = img[i].getElementsByTagName('img');
	   imgArray[0].src="images/accordion-plus.png";
	}

	accShow = document.getElementById(accName);
	accShow.style.display = 'block';

	accImage = document.getElementById('img' + accName);
	accImage.src = 'images/accordion-minus.png';
}

function accordionExpandRight(accName){
	var accContent;
	var img;
	var imgArray;
	accContent = document.getElementsByClassName('accordion-content-r');
	img = document.getElementsByClassName('accordion-icon-r');

	for (var i = 0; i < accContent.length; i++) {
	   accContent[i].style.display = 'none';
	   imgArray = img[i].getElementsByTagName('img');
	   imgArray[0].src="images/accordion-plus.png";
	}

	accShow = document.getElementById(accName);
	accShow.style.display = 'block';

	accImage = document.getElementById('img' + accName);
	accImage.src = 'images/accordion-minus.png';
}
