let count = 0;
function cc(card) {
  if (card >= 2 && card < 7) {
    count += 1;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count -= 1;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

console.log(cc(7));
console.log(cc(8));
console.log(cc(9));
