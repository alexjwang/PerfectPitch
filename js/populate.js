var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText) 
    for(i = 0; i < myArr.length; i++) {
        var element = myArr[i];
        var id = element.id;
        var proj = element.name;
        var dept = element.dept;
        var votes = element.votes;
        var stuff = "<div class = 'col-md-12'><div class= 'project-display'><h3>"
                  + proj
                  + "</h3><p>"
                  + dept
                  +"</p><span>" 
                  + votes 
                  + "</span></div></div>";
        document.getElementById("content-box").innerHTML += stuff;
    }; 
  }
};
xmlhttp.open("GET", "http://localhost:5000/get/getIDs?which=all", true);
xmlhttp.send();


