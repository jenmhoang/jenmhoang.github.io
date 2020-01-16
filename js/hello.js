var hello = new Array("H E L L O", "B O N J O U R", "H O L A", "C I A O", "A L O H A");
var i = 0;
setInterval(function(){				
	document.getElementById("output").innerHTML = hello[i];
	if (i<4)
		i++;
	else
		i = 0;
}, 1700);