


(function (window) {
  let data2 = {};
  let id;
  function createModal(e){
     id = event.target.id;
     console.log("id inside create modal " + id);
     modalBody(id);
      $('#myModal').modal();
  }

  function randomUserData(data, textStatus, jqXHR) {
    data2 = data.results;
    var addHtml = '';
      data.results.forEach(function (item, index, arr) {
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
        document.getElementById("prev").addEventListener("click", previousModal);
        document.getElementById("next").addEventListener("click", nextModal);
  }

  function previousModal() {
    console.log("inside previousModal");
    let id2 = parseInt(id);
    id = id2;
    console.log("data2.length ", data2.length);
    if (id >= 1 && id <= (data2.length -1)) {
      id -= 1;
    } else {
      id = 11;
    }
    console.log("id after math" + id);
    modalBody(id);
  }

  function nextModal() {
    console.log("inside nextModal");
    let id2 = parseInt(id);
    id = id2;
    console.log("data2.length ", data2.length);
    if (id < (data2.length -1)) {
    console.log("id before math" + id);
        id += 1;
      } else {
        id = 0;
      }
    console.log("id after math" + id);
    modalBody(id);
  }

  function modalBody(id){
    console.log("inside modalBody");
    console.log("id inside modal body " + id)
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

    document.getElementById('modalBody').innerHTML = htmlModalBody;
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
