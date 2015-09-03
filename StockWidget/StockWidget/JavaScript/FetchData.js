function fetchData(input,callBackFunction) {
    $.get("http://training.appyoda.io/api/stock/"+input, function (data, status) {
        if (status.valueOf() === 'success') {
            callBackFunction(data);
        } 
    });
}