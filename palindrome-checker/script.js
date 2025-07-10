function checkPalindrome() {
  const input = document.getElementById('input').value;
  const normalized = input.replace(/[\W_]/g, '').toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  const result = document.getElementById('result');
  if (normalized && normalized === reversed) {
    result.textContent = `"${input}" is a palindrome!`;
    result.style.color = "green";
  } else {
    result.textContent = `"${input}" is not a palindrome.`;
    result.style.color = "red";
  }
}