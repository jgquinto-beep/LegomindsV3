    /*welcome to ze scriptz*/
    function backbutton(){
        window.history.back();
    };

    document.getElementById("favourite").addEventListener("click", 
        function(){
            var img = document.getElementById("hartbtn");

            if (img.src.includes("/Imagesv3/Hartba.png")) {
                img.src = "/Imagesv3/hartyungred.png"; // Change to second image
            } else {
                img.src = "/Imagesv3/Hartba.png"; // Change back to first image
            }
        });

    