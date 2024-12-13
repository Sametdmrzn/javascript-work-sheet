let binary = "1110110";

function convertBinaryToDecimal(samet){
    let toplam =0;
    let ust    =0;

    for(let i=binary.length-1; i>=0; i-- ){
        toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }

    console.log("Sonuç" + toplam);
}

convertBinaryToDecimal();