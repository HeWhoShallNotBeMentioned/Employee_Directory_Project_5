


(function (window) {
console.log("Connected to App.js");
  // $.ajax({
  //   url: 'https://randomuser.me/api/?results=12',
  //   dataType: 'json',
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });

  function randomUserData(data, textStatus, jqXHR) {
    console.log("inside randomUserData ", data);
    console.log("inside randomUserData ", textStatus);
    console.log("inside randomUserData ", jqXHR);
    console.log(data.results[4].name.last);
  }

  $.ajax({
        url: "https://randomuser.me/api/?results=12",
        type: 'get',
        dataType: 'jsonp',
        //jsonpCallback: randomUserData(data, textStatus, jqXHR),
        success: function(data, textStatus, jqXHR) {
            console.log('success_function');
            randomUserData(data, textStatus, jqXHR);
        },
        error: function() {
            console.log('error with jsonp request');
        }
    });

 }(window));
