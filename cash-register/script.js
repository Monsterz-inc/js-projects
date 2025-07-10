function calculateChange() {
  const price = parseFloat(document.getElementById('price').value);
  const paid = parseFloat(document.getElementById('paid').value);
  const output = document.getElementById('output');
  if (isNaN(price) || isNaN(paid) || paid < price) {
    output.textContent = "Insufficient payment or invalid input.";
    output.style.color = "red";
    return;
  }
  let change = Math.round((paid - price) * 100); // cents
  const denominations = [
    { name: "$20", value: 2000 },
    { name: "$10", value: 1000 },
    { name: "$5", value: 500 },
    { name: "$1", value: 100 },
    { name: "25¢", value: 25 },
    { name: "10¢", value: 10 },
    { name: "5¢", value: 5 },
    { name: "1¢", value: 1 }
  ];
  let result = "Change: ";
  denominations.forEach(denom => {
    const count = Math.floor(change / denom.value);
    if (count > 0) {
      result += `${count} x ${denom.name} `;
      change -= count * denom.value;
    }
  });
  output.textContent = result;
  output.style.color = "green";
}