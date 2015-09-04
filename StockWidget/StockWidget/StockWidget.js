window.StockWidget = window.StockWidget || {};

StockWidget.CreateStockWidget = function () {
    
    return {
        start: function () {
            document.write('<div id="stockWidget"></div>');
            document.write('<scr' + 'ipt type="text/JavaScript" src="JavaScript/Init.js"></scr' + 'ipt>');
            //document.write('<script type="text/javascript" src="JavaScript/Initializer.js"></script>');
            if (StockWidget.Initializer === undefined)
                alert("hg");
            window.StockWidget.Initializer = window.StockWidget.Initializer || {};
           
            var init = new StockWidget.Initializer();
            init.initialize();
        }
    };
};
var stockWidget = new StockWidget.CreateStockWidget();
stockWidget.start();