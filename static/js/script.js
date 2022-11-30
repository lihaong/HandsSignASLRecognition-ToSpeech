$(document).ready(function(){
  $("#insert").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
	  try {
			$.ajax({
				url         : "/insert",
				type        : "POST",
				datatype    : 'json',
				success     : function(res){
				$(result).replaceWith(res)
			  }
			});
		}
		catch(e) {
			// Jika gagal memanggil API, tampilkan error di console
			console.log("Gagal !");
			console.log(e);
		}
    }, 1000)
  })

  $("#space").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
	  try {
			$.ajax({
				url         : "/space",
				type        : "POST",
				datatype    : 'json',
				success     : function(res){
				$(result).replaceWith(res)
			  }
			});
		}
		catch(e) {
			// Jika gagal memanggil API, tampilkan error di console
			console.log("Gagal !");
			console.log(e);
		}
    }, 1000)
  })

  $("#delete").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
	  try {
			$.ajax({
				url         : "/delete",
				type        : "POST",
				datatype    : 'json',
				success     : function(res){
				$(result).replaceWith(res)
			  }
			});
		}
		catch(e) {
			// Jika gagal memanggil API, tampilkan error di console
			console.log("Gagal !");
			console.log(e);
		}
    }, 1000)
  })

  $("#export").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
	  try {
			$.ajax({
				url         : "/export",
				type        : "POST",
				datatype    : 'json',
				success     : function(res){
				$(result).replaceWith(res)
				$(result).append('<audio controls>'+ '<source src="static/audio/exportSpeech.mp3" type="audio/mpeg">' + '</audio>')
			  }
			});
		}
		catch(e) {
			// Jika gagal memanggil API, tampilkan error di console
			console.log("Gagal !");
			console.log(e);
		}
    }, 1000)
  })


})

