$(function(){
    window.setInterval(function(){
        requestData()
        }, 1000)
        function requestData(){

            $.ajax({
                url: '/text',
                type: 'POST',
                datatype: 'json',
                success: function(data) {
                $(result).replaceWith(data)
                }

            });
        }
});
//

$("#click").click(function(e) {
    e.preventDefault();

    setTimeout(function() {
	  try {
			$.ajax({
				url: '/text',
                type: 'POST',
                datatype: 'json',
                success: function(data) {
                $(result).replaceWith(data)
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


  $(document).ready(function(){
    $('#klik').click(function(){
        $.ajax({
                url: '/text',
                type: 'POST',
                datatype: 'json',
                success: function(data) {
                    $('#result').text(data.words)
                }

            });
    })
})