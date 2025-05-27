$(document).ready(function(){
    $('#btnBlog').on('click', function(){
        $.ajax({
        url: '../html/blogArtiekelen.html',
        success: function(data){
            alert('Heeft de pagina wel kunnen laden.');
        },
        error: function(){
            alert('Heeft de pagina niet kunnen laden.');
        }
        })
    })
});

