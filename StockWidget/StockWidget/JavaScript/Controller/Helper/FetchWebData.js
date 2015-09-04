window.StockWidget = window.StockWidget || {};
window.StockWidget.Helper = window.StockWidget.Helper || {};

StockWidget.Helper.FetchWebData = function (argInput, argCallBackFunction) {
    var input = argInput;
    var callBackFunction = argCallBackFunction;
    function fetchData() {
        $.get("http://training.appyoda.io/api/stock/" + input, function (data, status) {
            if (status.valueOf() === 'success') {
                callBackFunction(data);
            }
            else
                throw Error(status);
        });
    };
    return {
        fetchData: fetchData

    };
}
alert("e");