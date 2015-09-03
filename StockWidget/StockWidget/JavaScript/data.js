
WidgetCallback([
   {
       "image_url": "Resources/images/widget.gif",
       "text": " World ",
       "description": " My First Widget",
       "id": "1"
   }
]);
$.get("http://training.appyoda.io/api/stock/sensex", function (data, status) {
    alert("Data: " + data.low + "\nStatus: " + status);
});