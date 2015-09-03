function WidgetCallback(JSONobject) {
    var data = JSONobject;
    var content = "";
    //var data = "";
   
    content += ('<div id="MyWidget" style="background-image:url(Resources/images/img.png);" >');
    // data += ('<br><br><img border="0" width="221" height="82" src="' + wHelloWorld.image_url + '">');
    content += ('<ul class="nav nav-tabs"><li class="active"><a href="#">SENSEX</a></li><li><a href="#">NIFTY</a></li><li><a href="#">CAC</a></li><li><a href="#">DOWJONES</a></li><li><a href="#">FTSE</a></li><li><a href="#">NASDAQ</a></li><li><a href="#">NIKKIE225</a></li></ul>');
    //data += ('<br><a target="_blank" href="' + data.web_url + '" style="font-size:x-large;text-decoration:none;color:' + wFColor + '">');
    //data += ('Title: ' + data.name + '</a><br>');
    content += ('<p>Title: ' + data.name + '</p>');
    content += ('</div>');

    document.getElementById('myFirstWidget').innerHTML = content;
}
