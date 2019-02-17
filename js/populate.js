var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText) 
    console.log(myArr);
    for(i = 0; i < myArr.length; i++) {
        var element = myArr[i];
        var id = element.id;
        var proj = element.name;
        var dept = element.dept;
        var votes = element.votes;
        var stuff = "<div class = 'col-md-12'> <div class= 'project-display'> <div class = 'col-md-8'> <h3>"
                  + proj
                  + "</h3> <p>"
                  + dept
                  +"</p> </div> <div class = 'col-md-4'> <h3> </h3> <span>" 
                  + votes 
                  + "</span> </div> </div> </div>";
        document.getElementById("content-box").innerHTML += stuff;
    }; 
  }
};
xmlhttp.open("GET", "http://localhost:5000/get/getIDs?which=all", true);
xmlhttp.send();


