var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText) 
    console.log(myArr);
    var stuff = ""
    for(i = 0; i < myArr.length; i++) {
        var element = myArr[i];
        var id = element.id;
        var proj = element.name;
        var dept = element.dept;
        var votes = element.votes;
        var pitchid = element.id;
        stuff += "<div class = 'col-md-12'> <div class= 'project-display'> <div class = 'col-md-8'> <h3>"
                  + proj
                  + "</h3> <p>"
                  + dept
                  + "</p> </div> <div class = 'col-md-4'> <h3> </h3> <span>Upvotes: " 
                  + votes 
                  + "<form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
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
          var id = element.id;
          var proj = element.name;
          var dept = element.dept;
          var votes = element.votes;
          var pitchid = element.id;
          stuff += "<div class = 'col-md-12'> <div class= 'project-display'> <div class = 'col-md-8'> <h3>"
                    + proj
                    + "</h3> <p>"
                    + dept
                    + "</p> </div> <div class = 'col-md-4'> <h3> </h3> <span>Upvotes: " 
                    + votes 
                    + "<form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
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
          var id = element.id;
          var proj = element.name;
          var dept = element.dept;
          var votes = element.votes;
          var pitchid = element.id;
          stuff += "<div class = 'col-md-12'> <div class= 'project-display'> <div class = 'col-md-8'> <h3>"
                    + proj
                    + "</h3> <p>"
                    + dept
                    + "</p> </div> <div class = 'col-md-4'> <h3> </h3> <span>Upvotes: " 
                    + votes 
                    + "<form action='http://localhost:5000/post/addVoteFromID' method='POST'> <button type='submit' name='id' value="
                    + pitchid
                    + "> upvote </button> </form></div> </div> </div>"; 
      }; 
      document.getElementById("content-box").innerHTML = stuff;
    }
  };
  xmlhttp3.open("GET", "http://localhost:5000/get/getIDs?which=recent", true);
  xmlhttp3.send();
};








