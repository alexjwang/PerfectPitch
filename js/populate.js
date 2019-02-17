var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText) 
    console.log(myArr);
    var stuff = ""
    for(i = 0; i < myArr.length; i++) {
        var element = myArr[i];
        var proj = element.name;
        var desc = element.desc;
        var votes = element.votes;
        var pitchid = element.id;
        stuff += "<div class ='project-display'> <div class = 'container-left'><h3><a href='project-view.html'>"
                  + proj
                  + "</a></h3><p>"
                  + desc
                  + "</div> <div class = 'container-right'> <h3> </h3> <span>Upvotes: " 
                  + votes 
                  + "</span> <br> <form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
                  + pitchid
                  + "> upvote </button> </form></div> </div> </div>";
        
    }; 
  document.getElementById("content-box").innerHTML = stuff;
  };
}
xmlhttp.open("GET", "http://localhost:5000/get/getIDs?which=recent", true);
xmlhttp.send();

document.getElementById("trending").onclick = function() {
  var xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText) 
      console.log(myArr);
      var stuff = ""
      for(i = 0; i < myArr.length; i++) {
          var element = myArr[i];
          var proj = element.name;
          var desc = element.desc;
          var votes = element.votes;
          var pitchid = element.id;
          stuff += "<div class ='project-display'> <div class = 'container-left'><h3><a href='project-view.html'>"
          + proj
          + "</a></h3><p>"
          + desc
          + "</div> <div class = 'container-right'> <h3> </h3> <span>Upvotes: " 
          + votes 
          + "</span> <br> <form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
          + pitchid
          + "> upvote </button> </form></div> </div> </div>";
      }; 
      document.getElementById("content-box").innerHTML = stuff;
    }
  };
  xmlhttp2.open("GET", "http://localhost:5000/get/getIDs?which=top", true);
  xmlhttp2.send();
};

document.getElementById("recent").onclick = function() {
  var xmlhttp3 = new XMLHttpRequest();
  xmlhttp3.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText) 
      console.log(myArr);
      var stuff = ""
      for(i = 0; i < myArr.length; i++) {
          var element = myArr[i];
          var proj = element.name;
          var desc = element.desc;
          var votes = element.votes;
          var pitchid = element.id;
          stuff += "<div class ='project-display'> <div class = 'container-left'><h3><a href='project-view.html'>"
          + proj
          + "</a></h3><p>"
          + desc
          + "</div> <div class = 'container-right'> <h3> </h3> <span>Upvotes: " 
          + votes 
          + "</span> <br> <form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
          + pitchid
          + "> upvote </button> </form></div> </div> </div>";
      }; 
      document.getElementById("content-box").innerHTML = stuff;
    }
  };
  xmlhttp3.open("GET", "http://localhost:5000/get/getIDs?which=recent", true);
  xmlhttp3.send();
};








