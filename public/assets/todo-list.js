$(document).ready(function(){

  $('form').on('submit', function(){

      let item = $('form input');
      let todo = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
      return false;
  });

  $('li').on('click', function(){

      // let item = $(this).text().replace(/ /g, "-");

      // console.log($(this)); return false;

      let id = $(this).attr("value");

      // console.log(item);  return false;

      $.ajax({
        type: 'DELETE',
        url: '/todo/' + id,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
