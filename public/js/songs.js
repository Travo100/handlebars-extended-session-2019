$(".fav-song").on("click", function(e) {
    e.preventDefault();
    console.log("Clicked the button");

    let id = $(this).attr("data-id");
    console.log(id);

    $.ajax({
        url: `/api/song/${id}`,
        method: "PUT"
    }).then(function(response) {
        console.log(response);
        location.reload();
    });
});

