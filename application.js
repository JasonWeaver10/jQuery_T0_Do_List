$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
        dataType: 'json',
        success: function (response, textStatus) {
          let tasksArray = response.tasks;
          // response is a parsed JavaScript object instead of raw JSON
          for(let i=0; i < tasksArray.length; i++) {
            var checks = tasksArray[i].completed;
            if(checks) {
              $('.mainList').append("<div class='todo' id="+ (tasksArray[i].id) +"><p>"+ (tasksArray[i].content) + "</p><button class='remove'>Remove ToDo</button><button class='edit'>Edit ToDo</button><label>Completed?</label><input name='"+ tasksArray[i].id +"' type='radio' id='yes' checked>Yes<input name='"+ tasksArray[i].id +"' type='radio' id='no'>No<hr></div>");

            }else {
              $('.mainList').append("<div class='todo' id="+ (tasksArray[i].id) +"><p>"+ (tasksArray[i].content) + "</p><button class='remove'>Remove ToDo</button><button class='edit'>Edit ToDo</button><label>Completed?</label><input name='"+ tasksArray[i].id +"' type='radio' id='yes'>Yes<input name='"+ tasksArray[i].id +"' type='radio' id='no' checked>No<hr></div>");

            }
            
          
          };
          

        },
        error: function (request, textStatus, errorMessage) {
          console.log(errorMessage);
        }
      });

   
});




//Get Todo
var getTodo = function () {
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
    dataType: 'json',
    success: function (response, textStatus) {
      let tasksArray = response.tasks;
      // response is a parsed JavaScript object instead of raw JSON
      for(let i=0; i < tasksArray.length; i++) {
        var checks = tasksArray[i].completed;
        if(checks) {
          $('.mainList').append("<div class='todo' id="+ (tasksArray[i].id) +"><p>"+ (tasksArray[i].content) + "</p><button class='remove'>Remove ToDo</button><button class='edit'>Edit ToDo</button><label>Completed?</label><input name='"+ tasksArray[i].id +"' type='radio' id='yes' checked>Yes<input name='"+ tasksArray[i].id +"' type='radio' id='no'>No<hr></div>");

        }else {
          $('.mainList').append("<div class='todo' id="+ (tasksArray[i].id) +"><p>"+ (tasksArray[i].content) + "</p><button class='remove'>Remove ToDo</button><button class='edit'>Edit ToDo</button><label>Completed?</label><input name='"+ tasksArray[i].id +"' type='radio' id='yes'>Yes<input name='"+ tasksArray[i].id +"' type='radio' id='no' checked>No<hr></div>");

        } 
      
      };
      

    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

//Remove ToDo
$(document).on('click', ".remove", function () {
     let dId = $(this).parent().attr("id");
     $("#" + dId ).remove();
    $.ajax({
        type: 'DELETE',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/'+ dId +'?api_key=134',
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
  var newText = $('.new').val();
  $('.new').val('');
    $.ajax({
    type: 'POST',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=134',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: newText
      }
    }),
      success: function (response, textStatus) {
        console.log(response);
        $(".todo").remove();
        getTodo();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }

    });

   

    
});

//Edit ToDO
$(document).on('click', '.edit', function () {
  $(this).parent().append('<input class="editInput" placeholder="New Task Text" type="text"></input><button class="submit">Submit</button>');
  let editId = $(this).parent().attr("id");
  $('.todo').on('click', '.submit', function () {
    var editText = $('.editInput').val();
    $.ajax({
      type: 'PUT',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/'+editId+'?api_key=134',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        task: {
          content: editText
        }
      }),
      success: function (response, textStatus) {
        console.log(response);
        $('.editInput').remove();
        $('.submit').remove();
        $(".todo").remove();
        getTodo();
      },
      error: function (request, textStatus, errorMessage) {
        console.log(errorMessage);
      }
    });
  })
    
});

//Mark Completed
$(document).on('click', '#yes', function () {
  let yesId = $(this).parent().attr("id");
  $(this).next().val();

    $.ajax({
        type: 'PUT',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/'+yesId+'/mark_complete?api_key=134',
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

//Mark Incomplete
$(document).on('click', '#no', function () {
  let noId = $(this).parent().attr("id");

  $.ajax({
      type: 'PUT',
      url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/'+noId+'/mark_active?api_key=134',
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

