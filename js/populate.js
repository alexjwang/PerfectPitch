var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    for(element in myArr) {
        var proj = element.name;
        var dept = element.dept;
        var votes = element.votes;
        var isrc = 'img/item/'+dept+'.jpg';
        var stuff = "<div class='row'><div class='col-md-4'><article class='aa-properties-item'><a href='#' class='aa-properties-item-img'><img src="+isrc+"alt='img'></a><div class='aa-tag for-sale'> "+ votes +" </div><div class='aa-properties-item-content'><div class='aa-properties-info'><span>" + dept + "</span></div><div class='aa-properties-about'><h3><a href='#'>"+ proj +"</a></h3></div></div></div>";
        document.getElementById("content-box").innerHTML += stuff;
    };
  }
};
xmlhttp.open("GET", "http://localhost:5000/get/getIDs?which=all", true);
xmlhttp.send();

