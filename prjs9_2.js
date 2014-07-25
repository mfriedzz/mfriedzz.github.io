var d1 = document.getElementById("div1");
var c_link = document.getElementById("c_link");
c_link.onclick = function () {
	d1.innerHTML = (d1.innerHTML === "When will this page be updated?") ?  "<strong>The Next Scheduled Update is To Be Determined!!</strong> Was that quick or what?" : "When will this page be updated?";

	return false;
};

/*
variable = (condition) ? true-value : false-value;
*/