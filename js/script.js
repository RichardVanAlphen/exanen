$(document).ready(function(){
    $.ajax({
    url: '../html/blogArtiekelen.html',
    success: function(data){
        $('#inhoud').append(data)
    },
    error: function(){
        alert('Er is een fout opgetreden!');
    }
    });
});
