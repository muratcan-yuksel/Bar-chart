let requestUrl= "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
//Both of the following methods get the data correctly
/*
fetch(requestUrl)
	.then(response => response.json())
	.then(data => {
console.log (JSON.stringify(data));
	})


*/
const req = new XMLHttpRequest();
req.open("GET",requestUrl, true);
req.send();
req.onload = function(){
  const json = JSON.parse(req.responseText);
console.log(JSON.stringify(json));
};