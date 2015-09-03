window.StockWidget = window.StockWidget || {};

StockWidget.CreateStockWidget = function () {
    
    return {
        start: function () {
            document.write('<div id="stockWidget"></div>');
            document.write('<scr' + 'ipt type="text/JavaScript" src="JavaScript/Init.js"></scr' + 'ipt>');
            var init = new window.StockWidget.Initializer();
            init.initialize();
        }
    };
};
var stockWidget = new StockWidget.CreateStockWidget();
stockWidget.start();