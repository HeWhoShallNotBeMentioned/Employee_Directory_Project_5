


(function (window) {
  let data2 = {};

  function randomUserData(data, textStatus, jqXHR) {
    data2 = data.results;
    //console.log("inside randomUserData ", data);
    //console.log("inside randomUserData ", textStatus);
    //console.log("inside randomUserData ", jqXHR);
    //console.log(data.results[4].name.last);
    var addHtml = '';
      data.results.forEach(function (item, index, arr) {
        // console.log("each thumbnail " + data.results[index].picture.large);
        // console.log("each first name " + data.results[index].name.first);
        // console.log("each last name " + data.results[index].name.last);
        // console.log("each email " + data.results[index].email);
        // console.log("each city " + data.results[index].location.city);
        addHtml += '<div class="col-md-3 row person" id="' + index + '" data-toggle="modal" data-target="#exampleModal">';

        addHtml += '<div><img class="thumbnail" src="' + data.results[index].picture.thumbnail + '"></div>';
        addHtml += '<div>';
        addHtml += '<span class="name">' + data.results[index].name.first + ' ';
        addHtml +=  data.results[index].name.last + '</span>';
        addHtml += '<div class="email">' + data.results[index].email + '</div>';
        addHtml += '<div class="city">' + data.results[index].location.city + '</div></div>';
        addHtml += '</div>';
      });
        document.getElementById('cards').innerHTML = addHtml;
        for(var k = 0; k < data.results.length; k++){
          document.getElementById(k).addEventListener("click", createModal);
        }
  }

  function createModal(e){
    // console.log(e);
    // console.log("e id " + event.srcElement.id);
     let id = event.srcElement.id;
    // console.log("data inside createModal  ", data2);
    // console.log("each thumbnail " + data2[id].picture.large);
    // console.log("each first name " + data2[id].name.first);
    // console.log("each last name " + data2[id].name.last);
    // console.log("each email " + data2[id].email);
    // console.log("each city " + data2[id].location.city);

    let birthdayString = data2[id].dob;
    birthdayString = birthdayString.substring(0,10);

    let htmlModalBody = '';
    htmlModalBody += '<div><img class="thumbnail" src="' + data2[id].picture.large + '"></div>';
    htmlModalBody += '<span class="firstName">' + data2[id].name.first + ' ';
    htmlModalBody += data2[id].name.last + '</span>';
    htmlModalBody += '<div class="email">' + data2[id].email + '</div>';
    htmlModalBody += '<div class="city">' + data2[id].location.city + '</div>';
    htmlModalBody += '<hr>';
    htmlModalBody += '<div class="phoneNumber">' + data2[id].phone + '</div>';
    htmlModalBody += '<div class="address">';
    htmlModalBody += '<span>' + data2[id].location.street + ', <span>';
    htmlModalBody += '<span>' + data2[id].location.state + ' <span>';
    htmlModalBody += '<span>' + data2[id].location.postcode + ' <span>';
    htmlModalBody += '</div>';
    htmlModalBody += '<div class="birthday">Birthday: ' + birthdayString + '</div>';
    htmlModalBody += '<button type="button" class="btnPage"><</button>';
    htmlModalBody += '<button type="button" class="btnPage">></button>';

    document.getElementById('modalBody').innerHTML = htmlModalBody;

      $('#myModal').modal();
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
