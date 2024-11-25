for(let i =1; i<=10; i++){
    for(let j = 1; j<=15; j++){
        for(let k =1; k<=10; k++){
            console.log(i+"x"+j+"x"+k+"="+ (i*j*k));
        }
    }
    console.log("--------------------------------------------")
}
//yukarıdaki kodlar 3 basamaklı sayı çarpım kodlarıdır.




let sayi = Number(prompt("Lütfen bir sayı giriniz"));
let sonuc =true;

for(let i=2; i<=Math.floor(sayi/2); i++){
    if(sayi%i==0){
        //asal değildir
        sonuc=false;
        break;
    }
}
if(sonuc){
    alert(sayi+ "asaldır.");
}else{
    alert(sayi + "asal değildir!");
}
//yukarıdaki kodlar asal sayı bulma kodlarıdır.