// *************** javascript code ****************************

// document.getElementById('passwordLength').addEventListener('input', updatePasswordLengthLabel);
// document.getElementById('generatePasswordBtn').addEventListener('click', generatePassword);
// document.getElementById('copyPasswordBtn').addEventListener('click', copyPassword);
// document.getElementById('refreshPasswordBtn').addEventListener('click', refreshPassword);

// function updatePasswordLengthLabel() {
//     const lengthSlider = document.getElementById('passwordLength');
//     const lengthLabel = document.getElementById('passwordLengthLabel');
//     lengthLabel.textContent = `Length: ${lengthSlider.value}`;
//     lengthSlider.classList.toggle('invalid', lengthSlider.value < 10);
// }

// function generatePassword() {
//     const length = document.getElementById('passwordLength').value;
//     const lowercase = document.getElementById('lowercaseCheckbox').checked;
//     const uppercase = document.getElementById('uppercaseCheckbox').checked;
//     const numbers = document.getElementById('numbersCheckbox').checked;
//     const symbols = document.getElementById('symbolsCheckbox').checked;

//     const password = generateRandomPassword(length, lowercase, uppercase, numbers, symbols);

//     const generateBtn = document.getElementById('generatePasswordBtn');
//     generateBtn.classList.remove('btn-danger');
//     generateBtn.classList.add('btn-success');
//     generateBtn.textContent = 'Password Generated';

//     const copyBtn = document.getElementById('copyPasswordBtn');
//     copyBtn.classList.remove('disabled');
//     document.getElementById('generatedPassword').value = password;
// }

// function generateRandomPassword(length, lowercase, uppercase, numbers, symbols) {
//     let chars = '';
//     if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
//     if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (numbers) chars += '0123456789';
//     if (symbols) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

//     let password = '';
//     while (password.length < length) {
//         const randomChar = chars[Math.floor(Math.random() * chars.length)];
//         password += randomChar;
//     }

//     return password;
// }

// function copyPassword() {
//     const passwordInput = document.getElementById('generatedPassword');
//     const generatedPassword = passwordInput.value;

//     if (generatedPassword) {
//         passwordInput.select();
//         document.execCommand('copy');
//         alert('Password copied to clipboard!');
//     } else {
//         alert('Generate a password first before copying!');
//     }
// }

// function refreshPassword() {
//     const generateBtn = document.getElementById('generatePasswordBtn');
//     generateBtn.classList.remove('btn-success');
//     generateBtn.classList.add('btn-danger');
//     generateBtn.textContent = 'Generate Password';

//     const copyBtn = document.getElementById('copyPasswordBtn');
//     copyBtn.classList.add('disabled');

//     document.getElementById('generatedPassword').value = '';
// }

// **********************Jquery code*******************

// Event listeners

$("#passwordLength").on("input", updatePasswordLengthLabel);
$("#generatePasswordBtn").on("click", generatePassword);
$("#copyPasswordBtn").on("click", copyPassword);
$("#refreshPasswordBtn").on("click", refreshPassword);

//  Update password length label

function updatePasswordLengthLabel() {
	const lengthSlider = $("#passwordLength");
	const lengthLabel = $("#passwordLengthLabel");
	lengthLabel.text(`Length: ${lengthSlider.val()}`);
	lengthSlider.toggleClass("invalid", lengthSlider.val() < 10);
}

// Generate Password
function generatePassword() {
	const length = $("#passwordLength").val();
	const lowercase = $("#lowercaseCheckbox").is(":checked");
	const uppercase = $("#uppercaseCheckbox").is(":checked");
	const numbers = $("#numbersCheckbox").is(":checked");
	const symbols = $("#symbolsCheckbox").is(":checked");

	const password = generateRandomPassword(
		length,
		lowercase,
		uppercase,
		numbers,
		symbols
	);

	const generateBtn = $("#generatePasswordBtn");
	generateBtn
		.removeClass("btn-danger")
		.addClass("btn-success")
		.text("Password Generated");

	const copyBtn = $("#copyPasswordBtn");
	copyBtn.removeClass("disabled");
	$("#generatedPassword").val(password);
}

// Generate Random Password
function generateRandomPassword(
	length,
	lowercase,
	uppercase,
	numbers,
	symbols
) {
	let chars = "";
	if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
	if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (numbers) chars += "0123456789";
	if (symbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

	let password = "";
	while (password.length < length) {
		const randomChar = chars[Math.floor(Math.random() * chars.length)];
		password += randomChar;
	}

	return password;
}

// explanation of line 136
// This line of code is used to pick a random character from a string named chars.

// Let's break it down:

// Math.random(): This part generates a random number between 0 and 1 (including 0 but not 1). So it could be something like 0.5, 0.123, and so on.

// Math.random() * chars.length: Now, this random number is multiplied by the length of the chars string. For example, if chars is "abcde" (5 characters long), Math.random() might give you 0.6, and multiplying this by 5 gives 3 (0.6 * 5 = 3).

// Math.floor(...): This function rounds down the number to the nearest whole number. So, if we got 3 from the previous step, it stays 3. If we got 3.7, it would become 3.

// chars[...]: Finally, this uses the whole number from the previous step to pick a character from the chars string at that position. Strings are like a list of characters, and each character has a position or index, starting from 0. So, if our final number is 3, and chars is "abcde", it picks the 4th character (because we start counting from 0), which is 'd'.

// In summary, that line creates a random number, uses it to pick a position in the chars string, and then gets the character at that position, effectively selecting a random character from the string chars.

// *************** copy password ***************

function copyPassword() {
	const passwordInput = $("#generatedPassword");
	const generatedPassword = passwordInput.val();

	if (generatedPassword) {
		passwordInput.select();
		document.execCommand("copy");
		alert("Password copied to clipboard!");
	} else {
		alert("Generate a password first before copying!");
	}
}

// Refresh Password

function refreshPassword() {
	const generateBtn = $("#generatePasswordBtn");
	generateBtn
		.removeClass("btn-success")
		.addClass("btn-danger")
		.text("Generate Password");

	const copyBtn = $("#copyPasswordBtn");
	copyBtn.addClass("disabled");

	$("#generatedPassword").val("");
}
