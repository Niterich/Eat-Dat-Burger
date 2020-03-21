$(document).ready(function() {
 
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        const newBurger = 
        {
            burger_name: $("#ba").val().trim(),
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });

    $(".change-devoured").on("click", function(event){
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");
        const newDevourState = 
            {
                devoured: newDevour
            };
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newDevourState
            }).then(function(res){
                location.reload();
            });
    });


});
