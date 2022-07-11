export function checkIbanNumbers(inputIban) {
  const ibanCountryLength = {
    LI: 21,
  };

  let iban = String(inputIban)
    .toUpperCase() //change to upper case
    .replace(/[^A-Z0-9]/g, ""); //remove anything that is not a letter or number
  //console.log("iban:", iban);
  let ibanMatch = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/); //check if iban has this format
  //console.log("ibanMatch:", ibanMatch);
  //console.log(ibanCountryLength[ibanMatch[1]]);

  // @ts-ignore
  if (!ibanMatch || iban.length !== ibanCountryLength[ibanMatch[1]]) {
    return alert("not a valid IBAN");
  } else {
    // // @ts-ignore
    let reOrderIban = (ibanMatch[3] + ibanMatch[1] + ibanMatch[2]).replace(
      /[A-Z]/g,
      // @ts-ignore
      function (letter) {
        return letter.charCodeAt(0) - 55;
      }
    );
    //console.log("reOrderIban:", reOrderIban);
    return modulo97(reOrderIban);
  }
}
//console.log(checkIbanNumbers("LI21 0881 0000 2324 013A A"));

function modulo97(string) {
  let remainder = string;

  while (remainder.length > 2) {
    let block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97) + remainder.slice(block.length);
  }
  let checkSum = parseInt(remainder, 10) % 97;

  if (checkSum === null) {
    alert("Not a valid IBAN");
  } else {
    alert("Is a valid IBAN");
  }
}
