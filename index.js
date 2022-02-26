const readLineSync=require('readline-sync');

console.log("This is Utility Apps \n");
console.log("Options: \n 1. URL Encoder/Decoder\n 2. Base64 Encoding/Decoding\n 3. String hashing\n 4. Epoch Converters\n 5. Binary/Decimal/Hex/Octal Converters\n 6. RGB<->HEX converter\n 7. Unit Converters\n");

let input = readLineSync.question('Please choose your option: ');

switch(input){
  case "1":
    urlEnDec();
    break;
  case "2":
    B64func();
    break;
  case "3":
    stringHashing();
    break;
  case "4":
    epochConverter();
    break;
  case "5":
    valueConverter();
    break;
  case "6":
    RgbHexConverter();
    break;
  case "7":
    unitConverter();
    break;
  default:
    console.log("Please choose the correct option! \n");
}

function urlEnDec() {
  console.log("Do you want to \n1. Encode\t2. Decode?\n");
  let input1 = readLineSync.question();
  let urlInput;
  
  switch(input1){
      
    case "1":
      urlInput= readLineSync.question("\nEnter the URL:\n");
      console.log(encodeURIComponent(urlInput));
      break;
      
    case "2":
      urlInput= readLineSync.question("\nEnter the URL:\n");
      console.log(decodeURIComponent(urlInput));
      break;
      
    default:
      console.log("Please choose the correct option! \n")
  }
}

function B64func() {
  console.log("\nDo you want to:\n 1. Base64 Encoding\n 2. Base64 Decoding");
  let input2 = readLineSync.question();
  let baseInput;
  
  switch(input2){
      
    case "1":
      baseInput= readLineSync.question("\nEnter the value:\n");
      console.log(btoa(baseInput));
      break;
      
    case "2":
      baseInput= readLineSync.question("\nEnter the value:\n");
      console.log(atob(baseInput));
      break;
    
    default:
      console.log("Please choose the correct option!\n")
  }
}

function stringHashing() {
  console.log("\nDo you want to:\n1. md5\n2. sha-1\n3. sha-256\n4. sha-512\n");
  let input3 = readLineSync.question();
  let baseInput;
  
  switch(input3){
    case "1":
      baseInput= readLineSync.question("\nEnter the value:\n");
      const crypto = require('crypto');
      const algo = 'md5';
      const hash = crypto.createHash(algo).update(baseInput).digest('hex');
      console.log(hash);      
      break;
    
    case "2":
      baseInput= readLineSync.question("\nEnter the value:\n");
      const crypto1 = require('crypto');
      const algo1 = 'sha1';
      const hash1 = crypto1.createHash(algo1).update(baseInput).digest('hex');
      console.log(hash1);
      break;

    case "3":
      baseInput= readLineSync.question("\nEnter the value:\n");
      const crypto2 = require('crypto');
      const algo2 = 'sha256'; 
      const hash2 = crypto2.createHash(algo2).update(baseInput).digest('hex');
      console.log(hash2);
      break;

    case "4":
      baseInput= readLineSync.question("\nEnter the value:\n");
      const crypto3 = require('crypto');
      const algo3 = 'sha512'; 
      const hash3 = crypto3.createHash(algo3).update(baseInput).digest('hex');
      console.log(hash3);
      break;  
      
    default:
      console.log("Please choose the correct option! \n")
  }
}

function epochConverter() {
  console.log("\nDo you want to:\n 1. Epoch to Human Date\n 2. Human date to Epoch");
  let input4 = readLineSync.question();
  let epInput;
  
  switch(input4){
    case "1":
      epInput= readLineSync.question("\nEnter the Epoch value:\n");
      epInput=parseInt(epInput);
      console.log(epochtoDate(epInput));
      break;
      
    case "2":
      console.log(DatetoEpoch());
      break;
      
    default:
      console.log("Please choose the correct option! \n")
  }
}
  
function valueConverter(){
  console.log("\nDo you want to:\n 1. BinaryToDecimal\n 2. BinaryToHex");
  let input5 = readLineSync.question();
  let valueInput;
  
  switch(input5){
    case "1":
      valueInput= readLineSync.question("\nEnter the Binary Number:\n");
      console.log(parseInt(valueInput,2));
      break;
      
    case "2":
       valueInput= readLineSync.question("\nEnter the Binary Number:\n");
      console.log(parseInt(valueInput,2).toString(16).toUpperCase());
      break;
      
    default:
      console.log("Please choose the correct option! \n")
      
  }
}  

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
  
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
  
function RgbHexConverter() {
  console.log("\nDo you want to:\n 1. RBG to HEX\n 2. HEX to RGB");
  let input6 = readLineSync.question();
  let urlInput;
  
  switch(input6){    
    case "1":
      let r= readLineSync.question("\nEnter the value of R:\n");
      let g= readLineSync.question("\nEnter the value of G:\n");
      let b= readLineSync.question("\nEnter the value of B:\n");

      r=parseInt(r);
      g=parseInt(g);
      b=parseInt(b);  
      
      let ans= "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); ; 
      console.log(ans);
      break;
      
    case "2":
      urlInput= readLineSync.question("\nEnter the HEX value:\n");
      console.log(hexToRgb(urlInput));
      break;
      
    default:
      console.log("Please choose the correct option! \n")
  }
}
  
function unitConverter(){
  console.log("\nDo you want to:\n 1. Kilometer to meter\n 2. Meter to Kilometer");
  let input7 = readLineSync.question();
  let Input;
  
  switch(input7){    
    case "1":
      Input= readLineSync.question("\nEnter the km value:\n");
      console.log(parseInt(Input)*1000);  
      break;
      
    case "2":
      Input= readLineSync.question("\nEnter the m value:\n");
      console.log(Input/1000);
      break;
      
    default:
      console.log("Please choose the correct option.\n")
  }
}


function epochtoDate(val){
  var myDate = new Date(val);
  return (myDate.toGMTString());
 
}
  
function DatetoEpoch(){
  let year= readLineSync.question("\nEnter the value of year: ");
  let month= readLineSync.question("\nEnter the value of month: ");
  let day= readLineSync.question("\nEnter the value of day: ");
  let hours= readLineSync.question("\nEnter the value of hours: ");
  let min= readLineSync.question("\nEnter the value of min: ");
  let seconds= readLineSync.question("\nEnter the value of seconds: ");
  // let millisec= readLineSync.question("\nEnter the value of milliseconds: ");

  year=parseInt(year);
  month=parseInt(month);
  day=parseInt(day);
  hours=parseInt(hours);
  min=parseInt(min);
  seconds=parseInt(seconds);

  var myDate=new Date(year,month,day,hours,min,seconds);

  var myEpoch=myDate.getTime()/1000;
  console.log(myEpoch);
}