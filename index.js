// function handlebarsSetup(data) {
//   //put any handlebars setup in here
//   // Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
//   var source   = $("#repositorie-template")[0].innerHTML;
//   var template = Handlebars.compile(source);
//   var repoList = template(data.response.docs)
// }

// $(document).ready(function (){
//   handlebarsSetup()
// });

function searchRepositories(){
  let query = $('#searchTerms').val()
  $.get( `https://api.github.com/repositories?q=${query}`, function( data ) {
  $( ".result" ).html( data );
  showRepositories(data);
}).fail(function(err) {
    displayError()
  });
}



function showRepositories(data){
  debugger
  var src = $("#repo-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var repoList = template(data)
  $("#results").append(repoList)
}

function displayError(){
  $("#errors").append("<li>I'm sorry, there's been an error. Please try again.</li>")
}
