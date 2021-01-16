/*

let requestUrl= "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
//Both of the following methods get the data correctly

fetch(requestUrl)
	.then(response => response.json())
	.then(data => {
console.log (JSON.stringify(data));
	})


*/
/*
const req = new XMLHttpRequest();
req.open("GET",requestUrl, true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
console.log(JSON.stringify(json));
};
*/
//this one get's the data in a different manner

d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
d3.autoType)
.then (function(data){
	console.log(data)
	d3.select("body")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .style("width", function(d) { return d.amount * 40 + "px"; })
  .style("height", "15px");
});
