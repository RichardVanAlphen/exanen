$(document).ready(function(){
    $('#btnBlog').on('click', function(){
        $.ajax({
        url: '../html/blogArtiekelen.html',
        success: function(data){
            //laad pagina in div
        },
        error: function(){
            alert('Heeft de pagina niet kunnen laden.');
        }
        })
    })
});

