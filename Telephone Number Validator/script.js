const validPhoneNumberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?\d{3}[\s-]?\d{4})$/;

document.getElementById('check-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        alert('Please provide a phone number');
        return;
    }

    if (validPhoneNumberRegex.test(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
        resultsDiv.style.color = 'red';
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
});