window.StockWidget = window.StockWidget || {};
StockWidget.Initializer = function () {

    return {
        initialize: function () {
            
            document.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
            
            loadJavaScriptSync("https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
            loadJavaScriptSync("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css");
            loadJavaScriptSync("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js");
            loadJavaScriptSync('JavaScript/View/WindowView.js');
            loadJavaScriptSync("JavaScript/Controller/WindowController.js");
            loadJavaScriptSync("JavaScript/Controller/Helper/FetchWebData.js");
            
            var windowView = new StockWidget.View.WindowView();
            windowView.createWindow();
        }
    };
};

