gCheckTest = true;

$(function() {
    if(gCheckTest){
        doTest();
    }
    activateButtons();

});


function activateButtons(){
    $("#uxButtonDoCalculation").click(function() {
        let wallpaperWetArray = [];

        let wallpaperLength = $("#wallpaper-length").val();
        let patternLength = $("#pattern-length").val();

        let wallpaperWet_1 =  $("#wallpaper-wet-1").val();
        let wallpaperWet_1_quantity =  $("#wallpaper-wet-1_quantity").val();

        wallpaperWetArray = wallpaperWetArray.concat( makeWetArray(wallpaperWet_1, wallpaperWet_1_quantity) );

        let wallpaperWet_2 =  $("#wallpaper-wet-2").val();
        let wallpaperWet_2_quantity =  $("#wallpaper-wet-2_quantity").val();
        
        wallpaperWetArray = wallpaperWetArray.concat( makeWetArray(wallpaperWet_2, wallpaperWet_2_quantity) );

        let wallpaperWet_3 =  $("#wallpaper-wet-3").val();
        let wallpaperWet_3_quantity =  $("#wallpaper-wet-3_quantity").val();

        wallpaperWetArray = wallpaperWetArray.concat( makeWetArray(wallpaperWet_3, wallpaperWet_3_quantity) );

        calculateWallpaperRollsNeeded(wallpaperLength, patternLength, wallpaperWetArray);


    });

  
}