var dyn = d3.select("#dynamic");
var info = [4, 8, 15, 16, 23, 42];
var currScale = 0

var makeBars = function() {

	dyn.selectAll("div")
		.data(info)
		.enter()
		.append("div")
		.style("width", function(d) {
			return d + "px";
		})
		.text( function(d) {
			return d;
		});
		currScale = 1;
};



var transitionTest = function( scale ) {

	dyn.selectAll("div")
		.data(info)
		.transition()
		.duration(2000)
		.style("width", function(d) {
			return d * scale + "px";
		});
	currScale = scale;
};

makeBars()

// window.onload=function(){
//     var show = document.getElementById( "show" );
// 	var expand = document.getElementById( "expand" );
// 	var shrink = document.getElementById( "shrink" );

// 	console.log(shrink)

// 	show.addEventListener( "click",  makeBars() );
// 	expand.addEventListener( "click",  transitionTest(currScale + 1) );
// 	shrink.addEventListener( "click",  transitionTest(currScale - 1) );
// }


	 
	