window.StockWidget = window.StockWidget || {};
window.StockWidget.Controller = window.StockWidget.Controller || {};

$(".nav-tabs a").on("click", function () {
    alert(this.innerText);
    var windowController=StockWidget.Controller.WindowController();
    var getData=StockWidget.Helper.FetchWebData(this.innerText.toLowerCase(),windowController.updateWindowContent);
});
StockWidget.Controller.WindowController = function () {
    
    function updateWindowContent(JSONobject) {
        var windowView = new StockWidget.View.WindowView();
        windowView.updateContent(JSONobject);
    };
    return{
        updateWindowContent:updateWindowContent
    };
}
