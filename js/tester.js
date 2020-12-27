function doTest(){
    console.time();
    
    console.log("1. "+ arrayTester(makeWetArray, [100,100], [100 , 2]) );
    console.log("2. "+ arrayTester(makeWetArray, [100,100], ["100" , "2"]) );
    console.log("3. "+ arrayTester(makeWetArray, false, ["banan" , "2"]) );
    console.timeEnd();
   

    
}

function tester( testFunction, expetResolt, testArray){
    
    let resolt = testFunction( testArray[0], testArray[1]  );

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
        return "Test ok! (" +resolt +")";
    }
    
    return `Test fale!!! (resolt:${resolt}) <::::`;
}