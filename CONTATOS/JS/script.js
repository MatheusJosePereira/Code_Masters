$(".input-field").on("focus", function(){
   if($(".border-danger").not(this).length){
        $(".border-danger").removeClass("border-danger");

   }
   $(this).next().toggleClass("border-danger");
})