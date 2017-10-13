


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
    //console.log("inside randomUserData ", textStatus);
    //console.log("inside randomUserData ", jqXHR);
    //console.log(data.results[4].name.last);
    var addHtml = '';
      data.results.forEach(function (item, index, arr) {
        console.log("each thumbnail " + data.results[index].picture.large);
        console.log("each first name " + data.results[index].name.first);
        console.log("each last name " + data.results[index].name.last);
        console.log("each email " + data.results[index].email);
        console.log("each city " + data.results[index].location.city);
        addHtml += '<div class="col-md-3 row person ">';

        addHtml += '<div><img class="thumbnail" src="' + data.results[index].picture.thumbnail + '"></div>';
        addHtml += '<div>';
        addHtml += '<span class="firstName">' + data.results[index].name.first + ' ';
        addHtml +=  data.results[index].name.last + '</span>';
        addHtml += '<div class="email">' + data.results[index].email + '</div>';
        addHtml += '<div class="city">' + data.results[index].location.city + '</div></div>';
        addHtml += '</div>';
      });
        document.getElementById('cards').innerHTML = addHtml;
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
