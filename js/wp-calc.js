function calculateWallpaperRollsNeeded(wallpaperLength, patternLength, wallpaperWetArray){
    console.log(`wallpaperLength: ${wallpaperLength}`);
    console.log(`patternLength: ${patternLength}`);
    console.log(`wallpaperWetArray: ${wallpaperWetArray}`);
}


function makeWetArray(wallpaperWet, quantity){
    var wetArray = [];
    var n;   
    
    wallpaperWet = parseInt(wallpaperWet);
    quantity = parseInt(quantity);

    if( isNaN(wallpaperWet)){
        return false;
    }
    
    if( isNaN(wallpaperWet)){
        return false;
    }

    
    for (n = 0; n < quantity; n++) {
        wetArray.push(wallpaperWet);
    }

    return wetArray;
}

        