window.StockWidget = window.StockWidget || {};

function loadJavaScriptSync(filePath) {
    var req = new XMLHttpRequest();
    req.open("GET", filePath, false); 
    req.send(null);

    var headElement = document.getElementsByTagName("head")[0];
    var newScriptElement = document.createElement("script");
    newScriptElement.type = "text/javascript";
    newScriptElement.text = req.responseText;
    headElement.appendChild(newScriptElement);
}
loadJavaScriptSync("JavaScript/Init.js");
StockWidget.CreateStockWidget = function () {

    return {
        start: function () {

            document.write('<div id="stockWidget"></div>');
            if (StockWidget.Initializer === undefined)
                alert("hg");

            var initializer = new StockWidget.Initializer();
            initializer.initialize();
        }
    };
};
var stockWidget = new StockWidget.CreateStockWidget();
stockWidget.start();