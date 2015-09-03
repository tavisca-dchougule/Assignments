
document.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
document.write('<script type="text/javascript" src="JavaScript/WidgetCreate.js"></script>');
document.write('<script type="text/javascript" src="JavaScript/FetchData.js"></script>');
document.write('<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">');
document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>');
document.write(' <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>');


var myElement = document.getElementById('myFirstWidget');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'JavaScript/data.js');
document.getElementById('myFirstWidget').appendChild(JavaScriptCode);
