$(document).ready(function () {

    $('#search-button').click(function () {
        var searchText = $('#search').val();
        var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search=" +searchText+ "&format=json&callback=?";

    $.ajax({
        type:"GET",
        url:url,
        async:false,
        dataType: "json",
        success: function (data) {
            $('#output').html('');
            for(var i=0; i<data[1].length; i++){
                var link = data[3][i];
                var description = data[2][i];
                var heading = data[1][i];

                $('#output').append("<li class='list-group-item'><a href="+link+">"+heading+"</a><p>"+description+"</p></li>");
            }
        },
        error: function (errorMessage) {
            console.log('Error')
        }
    })

    });
});
