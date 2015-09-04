window.StockWidget = window.StockWidget || {};
window.StockWidget.View = window.StockWidget.View || {};


StockWidget.View.WindowView = function () {
    var content = "";
    function createWindow() {
        content += ('<div id="MyWidget" style="background-image:url(Resources/images/img.png);" >');
        content += ('<ul id="tabs" class="nav nav-tabs"><li class="active"><a href="#tabs-1">SENSEX</a></li><li><a href="#tabs-2">NIFTY</a></li><li><a href="#tabs-3">CAC</a></li><li><a href="#tabs-4">DOWJONES</a></li><li><a href="#tabs-5">FTSE</a></li><li><a href="#tabs-6">NASDAQ</a></li><li><a href="#tabs-7">NIKKIE225</a></li></ul>');
        content += ('</div>');
        content += ('<br><div id="dataContent"></div></br>');
        document.getElementById('stockWidget').innerHTML = content;
    };
    function updateContent(data) {
        $("#dataContent").empty();
        $("#dataContent").append('<ul id="list" ></ul>');
        $("#list").append('<li>' + '<a>Name:' + data.name + '</a>' + '</li><br/>');
        $("#list").append('<li>' + '<a>Last Price:' + data.lastprice + '</a>' + '</li><br/>');
        $("#list").append('<li>' + '<a>Change:' + data.change+ '</a>' + '</li><br/>');
        $("#list").append('<li>' + '<a>Percent Change:' + data.percent_change + '</a>' + '</li><br/>');
        $("#list").append('<li>' + '<a>High:' + data.high + '</a>' + '</li><br/>');
        $("#list").append('<li>' + '<a>Low:' + data.low + '</a>' + '</li><br/>');
       
    }
 
    return {
        createWindow: createWindow,
        updateContent:updateContent
    };
}
