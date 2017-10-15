


(function (window) {
  let data2 = {};
  let id;

  function createModal(e){
     //id = event.target.id;
     //console.log("e.target ", e.target.className);
     let testId = e.target.className;
     id = testId.split(" ")[1];
     modalBody(id);
      $('#myModal').modal();
  }

  function randomUserData(data, textStatus, jqXHR) {
    data2 = data.results;
    var addHtml = '';
      data.results.forEach(function (item, index, arr) {
        addHtml += '<div class="col-md-3 ' + index + ' row person" id="' + index + '" data-toggle="modal" data-target="#exampleModal">';
        addHtml += '<div><img class="thumbnail ' + index + '" src="' + data.results[index].picture.thumbnail + '"></div>';
        addHtml += '<div>';
        addHtml += '<span class="name ' + index + '">' + data.results[index].name.first + ' ';
        addHtml +=  data.results[index].name.last + '</span>';
        addHtml += '<div class="email ' + index + '">' + data.results[index].email + '</div>';
        addHtml += '<div class="city ' + index + '">' + data.results[index].location.city + '</div></div>';
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
    let id2 = parseInt(id);
    id = id2;
    if (id >= 1) {
      id -= 1;
    } else {
      id = 11;
    }
      modalBody(id);
  }

  function nextModal() {
    let id2 = parseInt(id);
    id = id2;
    //console.log("data2.length ", data2.length);
    if (id < (data2.length -1)) {
        id += 1;
      } else {
        id = 0;
      }
    modalBody(id);
  }

  function modalBody(id){
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

  function addSearchBox() {
console.log("Inside Search Box");
//Create Div to hold search box
  var searchDiv = document.createElement("div");
// add class student-search to div
  searchDiv.setAttribute("class", "employee-search" );
//create search field
  var searchInput = document.createElement("input");
// set attributes for input
  searchInput.setAttribute("id", "myInput");
  searchInput.setAttribute("placeholder", "Search for employees...");
  searchInput.setAttribute("onkeyup", 'eachEmployee()');
//create button
  var searchButton = document.createElement("button");
  searchButton.appendChild(document.createTextNode('Search'));
  searchButton.setAttribute("class", "btn btn-outline-secondary" );
//Add search field to div
  searchDiv.appendChild(searchInput);
//Add button to div
  searchDiv.appendChild(searchButton);
//Add Div
  var topDiv = document.getElementById('top');
  console.log("topDiv  ", topDiv);
//adds the entire searchDiv to the document
  topDiv.appendChild(searchDiv);
}

function eachEmployee(){

}

  $.ajax({
        url: "https://randomuser.me/api/?results=12&AU,CA,NZ,US,IE",
        type: 'get',
        dataType: 'jsonp',
        //jsonpCallback: randomUserData(data, textStatus, jqXHR),
        success: function(data, textStatus, jqXHR) {
            randomUserData(data, textStatus, jqXHR);
            addSearchBox();
        },
        error: function() {
            console.log('error with jsonp request');
        }
    });

 }(window));
