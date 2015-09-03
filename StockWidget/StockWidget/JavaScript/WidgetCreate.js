function WidgetCallback(JSONobject) {
    var data = JSONobject;
    var content = "";
    
   
    content += ('<div id="MyWidget" style="background-image:url(Resources/images/img.png);" >');
    content += ('<ul id="tabs" class="nav nav-tabs"><li class="active"><a href="#tabs-1">SENSEX</a></li><li><a href="#tabs-2">NIFTY</a></li><li><a href="#tabs-3">CAC</a></li><li><a href="#tabs-4">DOWJONES</a></li><li><a href="#tabs-5">FTSE</a></li><li><a href="#tabs-6">NASDAQ</a></li><li><a href="#tabs-7">NIKKIE225</a></li></ul>');
    content += ('<p>Title: ' + data.name + '</p>');
    content += ('</div>');   
    document.getElementById('myFirstWidget').innerHTML = content;

    $(".nav-tabs a").on("click", function () {  
        alert(this.innerText);
    });
}
