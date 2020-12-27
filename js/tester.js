function doTest(){
    console.time();
    
    console.log("1. "+ arrayTester(makeWetArray, [100,100], [100 , 2]) );
    console.log("2. "+ arrayTester(makeWetArray, [100,100], ["100" , "2"]) );
    console.log("3. "+ tester(calculateWallpaperRollsNeeded, 2 , [100, 2, [30,30,30,30]]) );
    console.log("4. "+ tester(calculateWallpaperRollsNeeded, 3 , [1005, 20, [300,300,240,240,240, 250, 120, 280]]) );
    console.log("5. "+ tester(calculateWallpaperRollsNeeded, 1 , [1005, 0, [250]]) );


    console.timeEnd();
   

    
}

function tester( testFunction, expetResolt, testArray){
    
    let resolt = testFunction( testArray[0], testArray[1], testArray[2]  );

    if(resolt === expetResolt){
        return "Test ok! (" +resolt +")";
    }
    return "Test fale! (" +resolt +") <::::";
}

function arrayTester( testFunction, expetResolt, testArray){
    
    let resolt = testFunction( testArray[0], testArray[1]  );
    let returnResolt = false;

    if( Array.isArray(resolt) ){
        for(var i= 0; i < resolt.length; i++){
            
            if (resolt[i] === expetResolt[i] ){
                returnResolt = true;
            }else{
                returnResolt = false;
            }
        }
    }
    if( !Array.isArray(resolt) ){
        if(resolt === expetResolt){
            returnResolt = true;
        }else{
            returnResolt = false;
        }
    }

    if(returnResolt){
        return `Test ok! (${resolt})`;
    }
    
    return `Test fale!!! (resolt:${resolt}) <::::`;
}