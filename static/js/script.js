$(document).ready(function(){
var x = "{{ x }}";
if (x.trim() !== "") {
$('#result').removeClass('hidden');
}


  $("#insert").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
      try {
        $.ajax({
          url         : "/insert",
          type        : "POST",
          datatype    : 'json',
          success     : function(res){
            $("#result").replaceWith(res)
          }
        });
      }
      catch(e) {
        // Jika gagal memanggil API, tampilkan error di console
        console.log("Gagal !");
        console.log(e);
      }
    }, 1000)
  });

  $("#space").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
      try {
        $.ajax({
          url         : "/space",
          type        : "POST",
          datatype    : 'json',
          success     : function(res){
            $("#result").replaceWith(res)
          }
        });
      }
      catch(e) {
        // Jika gagal memanggil API, tampilkan error di console
        console.log("Gagal !");
        console.log(e);
      }
    }, 1000)
  });

  $("#delete").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
      try {
        $.ajax({
          url         : "/delete",
          type        : "POST",
          datatype    : 'json',
          success     : function(res){
            if(res.status === 'success') {
              $("#result").text(res.updated_text);
            }
          }
        });
      }
      catch(e) {
        // Jika gagal memanggil API, tampilkan error di console
        console.log("Gagal !");
        console.log(e);
      }
    }, 1000)
  });
});
