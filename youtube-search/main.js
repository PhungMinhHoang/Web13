function chan(event) {
    event.preventDefault()
}

function Search() {
    let a = $("#keyword").val();
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + a + "&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw",
        type: "GET",
        data: $("#keyword").serialize(),
        success: function (body) {
            let step= Math.floor(body.pageInfo.totalResults/body.pageInfo.resultsPerPage)+1;
            let loop = 1;
            while (loop <= step) {
                let first =(loop-1)*body.pageInfo.resultsPerPage;
                let last = first + body.pageInfo.resultsPerPage ;
                let i;
                for ( i=first; i < last; i++) {
                    let b = body.items[i]
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
                if(i==body.pageInfo.totalResults) break;
                $(document).ready(function(){
                    $(window).scroll(function(){
                        if($(window).scrollTop()==$(document).height()-$(window).height()){                     
                            loop+=1;
                        }
                    });
                });
            }
        },
        error: function (body) {

        }
    })
}


// for (let i = 0; i < body.pageInfo.resultsPerPage; i++) {
//     let b = body.items[i]
//     $("#result-list").append(
//         `
//         <a class="result col-md-12" href="https://www.youtube.com/watch?v=${b.id.videoId}" target="_blank">
//             <img src="${b.snippet.thumbnails.medium.url}" alt=""/>
//             <div class="video_info">
//                 <h2 class="title">${b.snippet.title}</h2>
//                 <p class="description">${b.snippet.description}</p>
//                 <span>View>></span>
//             </div>
//         </a>
//         `
//     )
// }