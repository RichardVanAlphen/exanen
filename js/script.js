$(document).ready(function(){
    $.ajax({
    url: '../html/blogArtiekelen.html',
    success: function(data){
        alert('Heeft de pagina wel kunnen laden.');
        $('#inhoud').append(data)
    },
    error: function(){
        alert('Heeft de pagina niet kunnen laden.');
    }
    });
});
