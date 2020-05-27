$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
        dataType: 'json',
        success: function (response, textStatus) {
          console.log(response);
          // response is a parsed JavaScript object instead of raw JSON
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });



});


//Get Todo
$(document).on('click', )
    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
        dataType: 'json',
        success: function (response, textStatus) {
        console.log(response);
        // response is a parsed JavaScript object instead of raw JSON
        },
        error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
        }
  });

//Remove ToDo
$(document).on('click', ".delete", function () {
    // $(this).
    $.ajax({
        type: 'DELETE',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/78?api_key=134',
        success: function (response, textStatus) {
          console.log(response);
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });
}); 

//Add new ToDo
$(document).on('click', '.add', function () {
    $.ajax({
        type: 'POST',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
        dataType: 'json',
        success: function (response, textStatus) {
          console.log(response);
          // response is a parsed JavaScript object instead of raw JSON
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });

});

//Edit ToDO
$(document).on('click', '.edit', function () {
    $.ajax({
        type: 'PUT',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/78?api_key=134',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({
          task: {
            content: 'Wash very dirty dishes!'
          }
        }),
        success: function (response, textStatus) {
          console.log(response);
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });

});

//Change Completed
$(document).on('click', '.completed', function () {
    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
        dataType: 'json',
        success: function (response, textStatus) {
          console.log(response);
          // response is a parsed JavaScript object instead of raw JSON
        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });

});

