window.addEventListener('load', (event) => {

let requestUrl= "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

//Both of the following methods get the data correctly
/*
fetch(requestUrl)
	.then(response => response.json())
	.then(data => {
    document.getElementById('message').innerHTML = JSON.stringify(data);
	})
*/



const req = new XMLHttpRequest();
req.open("GET",requestUrl, true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
  //writes the data on screen
 // document.getElementsByClassName('message')[0].textContent = JSON.stringify(json);
 const dataset= JSON.stringify(json);
 console.log(dataset);
//console.log(JSON.stringify(json));

d3.select("body").selectAll("h2")
.data(dataset)
.enter()
.append("h2")
.text("New Title");

};


/*
//this one get's the data in a different manner
//like this one is very organized
d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
d3.autoType)
.then (function(data){
  console.log(data)
});
*/



});