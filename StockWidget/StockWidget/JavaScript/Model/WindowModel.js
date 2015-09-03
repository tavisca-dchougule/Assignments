window.StockWidget = window.StockWidget || {};
window.StockWidget.Model=window.StockWidget.Model||{};

StockWidget.Model.WindowModel= function(){
    var symbol="";
    var name="";
    var lastPrice=0.0;
    var change=0.0;
    var percentChange="";
    var direction=0;
    var high=0.0;
    var low=0.0;
    var graphPath="";
    var webUrl="";
    return {
        getName: function () {
            return name;
        },
        getLastPrice: function () {
            return lastPrice;
        },
        getChange: function () {
            return change;
        },
        getPercentChange: function () {
            return percentChange;
        },
        getDirection: function () {
            return direction;
        },
        getHigh: function () {
            return high;
        },
        getLow: function () {
            return low;
        },
        getGraphPath: function () {
            return graphPath;
        },
        getWebUrl: function () {
            return webUrl;
        },
        setName: function (argName) {
            name = argName;
        },
        setLastPrice: function (argLastPrice) {
            lastPrice = argLastPrice;
        },
        setChange: function (argChange) {
            change = argChange;
        },
        setPercentChange: function (argPercentChange) {
            percentChange = argPercentChange;
        },
        setDirection: function (argDirection) {
            direction = argDirection;
        },
        setHigh: function (argHigh) {
            high = argHigh;
        },
        setLow: function (argLow) {
            low = argLow;
        },
        setGraphPath: function (argGraphPath) {
            graphPath = argGraphPath;
        },
        setWebUrl: function (argWebUrl) {
            webUrl = argWebUrl;
        }
    };
}