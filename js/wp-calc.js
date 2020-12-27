function calculateWallpaperRollsNeeded(wallpaperLength, patternLength, wallpaperWetArray){
    wallpaperLength = parseInt(wallpaperLength);
    patternLength = parseInt(patternLength);


    let wallpaperRolls = 1;
    let thisWallpaper = wallpaperLength;
    let thisWetLength;
    let randomWet = 0;
    let randomDraws = 0;

    while (wallpaperWetArray.length > 0) {
        if(( randomDraws >= wallpaperWetArray.length) || (thisWallpaper <= patternLength) ){
            randomDraws = 0;
            wallpaperRolls++;
            thisWallpaper = wallpaperLength;
        }

        randomWet = getRandomWetFromArray(wallpaperWetArray);
        randomDraws++;

        thisWetLength = getWetlengthAsNumber(wallpaperWetArray ,randomWet , patternLength);

        
        if( (thisWallpaper - thisWetLength ) >= 0 ){
            thisWallpaper = thisWallpaper - thisWetLength;
            wallpaperWetArray.splice(randomWet, 1);
            randomDraws = 0;
        }  
    }

    return wallpaperRolls;
}

function getRandomWetFromArray(array){
    return Math.floor(Math.random() * array.length);
}

function getWetlengthAsNumber(array,index, extraNumber){
    return  parseInt(array[index]) + extraNumber;
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

        