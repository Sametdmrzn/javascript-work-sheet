// for(let i =1; i<=10; i++){
//     for(let j = 1; j<=15; j++){
//         for(let k =1; k<=10; k++){
//             console.log(i+"x"+j+"x"+k+"="+ (i*j*k));
//         }
//     }
//     console.log("--------------------------------------------")
// }
//yukarıdaki kodlar 3 basamaklı sayı çarpım kodlarıdır.




// let sayi = Number(prompt("Lütfen bir sayı giriniz"));
// let sonuc =true;

// for(let i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         //asal değildir
//         sonuc=false;
//         break;
//     }
// }
// if(sonuc){
//     alert(sayi+ "asaldır.");
// }else{
//     alert(sayi + "asal değildir!");
// }
//yukarıdaki kodlar asal sayı bulma kodlarıdır.




// let sayi = Number(prompt("Bir Sayı Giriniz..."));
// let carpim=1;

// for(let i =1; i<=sayi; i++){
//     carpim*=i;
// }
// alert("Sonuç=" + carpim);
// yukarıdaki kodlar faktöriyele bulma kodlarıdır.




// let sayi = prompt("Bir sayi giriniz");
// let toplam =0;
// for(let i=0; i<sayi.length; i++){
//     let rakam = sayi.charAt(i);
//     toplam+=rakam*rakam*rakam
// }

// if(sayi==toplam){
//     alert("Armstrong sayısıdır")
// }else{
//     alert("Armstrong sayısı değildir");
// }
// Yukarıdaki kodlar ARMSTRONG sayısını bulma kodlarıdır.
