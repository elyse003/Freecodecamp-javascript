// Function to check if input is a palindrome
function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Reverse the cleaned input
    const reversedInput = cleanedInput.split('').reverse().join('');
    // Check if cleaned input matches reversed input
    return cleanedInput === reversedInput;
  }
  
  // Event listener for button click
  document.getElementById('check-btn').addEventListener('click', () => {
    const textInput = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
  
    // Clear previous results
    resultElement.textContent = '';
    resultElement.classList.remove('error');
  
    // Check for empty input
    if (!textInput.trim()) {
      alert('Please input a value');
      return;
    }
  
    // Check if input is a palindrome
    const isPalin = isPalindrome(textInput);
    if (isPalin) {
      resultElement.textContent = `${textInput} is a palindrome`;
    } else {
      resultElement.textContent = `${textInput} is not a palindrome`;
      resultElement.classList.add('error');
    }
  });
  