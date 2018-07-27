function chan(event) {
    event.preventDefault()
}
var check = 0;
var nextPage = '';
function Search(next = '') {
    let a = $("#keyword").val();
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + a + "&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=" + next,
        type: "GET",
        data: $("#keyword").serialize(),
        success: function (body) {
            check = 1;
            nextPage = body.nextPageToken;
            for (i = 0; i < 25; i++) {
                let b = body.items[i];
                $("#result-list").append(
                    `
                        <a class="result col-md-12" href="https://www.youtube.com/watch?v=${b.id.videoId}" target="_blank">
                            <img src="${b.snippet.thumbnails.medium.url}" alt=""/>
                            <div class="video_info">
                                <h2 class="title">${b.snippet.title}</h2>
                                <p class="description">${b.snippet.description}</p>
                                <span>View>></span>
                            </div>
                        </a>
                        `
                )
            }
        },
        error: function (body) {

        }
    });
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).height() - $(window).height() - $(window).scrollTop() < 2) {
            if (check == 1) Search(nextPage);
        }
    });
});
$(document).ready(function (){
    $("#btnSearch").click(function(){
        $("#result-list").empty();
    });  
});
