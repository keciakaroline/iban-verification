export function letterValue(string) {
  let toLowerCase = string.toLowerCase();
  const let_num = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    g: 16,
    h: 17,
    i: 18,
    j: 19,
    k: 20,
    l: 21,
    m: 22,
    n: 23,
    o: 24,
    p: 25,
    q: 26,
    r: 27,
    s: 28,
    t: 29,
    u: 30,
    v: 31,
    w: 32,
    x: 33,
    y: 34,
    z: 35,
  };

  if (toLowerCase.length === 1) {
    return let_num[toLowerCase] || "";
  } else {
    return toLowerCase.split("").map(letterValue);
  }
}
//console.log(letterValue("LI"));

// function alphab(letter) {
//   const result =
//     letter.charCodeAt(0) - (letter === letter.toLowerCase() ? 87 : 55);
//   if (letter.length === 1) {
//     return result;
//   }
// }
// console.log(alphab("A"));

export function reOrderIban(iban) {
  const countryCodeDigit = iban.slice(0, 4);
  const bankCodeAccNumber = iban.slice(4, iban.length);
  return bankCodeAccNumber + countryCodeDigit;
}
