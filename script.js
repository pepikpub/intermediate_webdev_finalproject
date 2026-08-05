const calculateSimpleInterest = (principal, rate, time) => {
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(time);

  return (p * r * t) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  const p = Number(principal);
  const interest = Number(interestAmount);

  return p + interest;
};

const calculate = () => {
  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);

  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalPayableAmount(p, simpleInterest);

  let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateSimpleInterest,
    calculateTotalPayableAmount
  };
}
