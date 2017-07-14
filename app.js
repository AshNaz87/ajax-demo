$(document).ready(function() {

// listen to click on fetch button
  // then fetch repositories from GitHub using AJAX GET request
    // if success => append repos
    // if error => display error message in some way

  $("#fetch-button").click(function() {

    var userName = $("#username").val();

    $.ajax({
      type: "GET",
      url: "https://api.github.com/users/" + userName + "/repos",
      success: function(data) {
        $("#repos").empty();
        data.forEach(function(repo) {
          $("#repos").append("<li>" + repo.full_name + "</li>");
        });
      },
      error: function(jqXHR) {
        console.error(jqXHR.responseText);
      }
    });
  });
});
