var d1 = document.getElementById("div1");

var c_link = document.getElementById("c_link");

c_link.addEventListener ("click", function (event) {
	event.preventDefault();
	d1.style.backgroundColor = "#00ff00";
 	d1.innerHTML = "<strong>The Next Scheduled Update is To Be Determined!!</strong> Was that quick or what?";
	
	}, false);
