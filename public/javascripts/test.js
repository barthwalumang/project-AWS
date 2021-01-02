
$.getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=4a7d84d3', function(data){
    console.log(data);
    document.getElementById("movie").innerHTML="<h3>"+ data.Title +"</h3>"
    +"<h5>"+ data.Genre +"</h5>"
    +"<h5>"+ data.Ratings[1].Source +"-"+ data.Ratings[1].Value +"</h5>";
    //document.getElementById("movie").innerHTML="<h5>"+ data.Ratings.[1] +"</h5>";
  });