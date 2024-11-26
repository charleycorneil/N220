### Final Project Outline

Final Project

### Github Link

### Major Features

**Login Form Details**

DOM references:

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

- These are used to access the form elements and corresponding error messages for validation

If-else:

if (nameInput.value.trim() === '') {
nameError.textContent = 'Name is required.';
valid = false;
} else {
nameError.textContent = '';
}
if (!emailInput.value.includes('@')) {
emailError.textContent = 'Email must include @.';
valid = false;
} else {
emailError.textContent = '';
}

- These checks confirm the Name and Email. If the checks fails, error messages are displayed.

Events:

form.addEventListener('submit', function(event) {
event.preventDefault();
// Validation logic
});

- The submit event is interrupted to stop the form submission and run custom validation logic

Data Types:
nameInput.value: String - Holds the user's input for the name field.
emailInput.value: String - Holds the user's input for the email field.
valid: Boolean - Tracks whether the form validation passed or failed.

**Dashboard Details**

DOM references:

const successMessage = document.getElementById('successMessage');

successMessage: Refers to the <div> element containing the success message. This element is initially hidden and is displayed only after successful form submission.

If-else:

if (valid) {
successMessage.style.display = 'block';
form.style.display = 'none';
}

- The if block makes sure that the success message is shown only when everything is validated. If invalid, the success message remains hidden, and the user is prompted to correct the input

- The if checks whether the form is valid (valid === true).

  - If the form passes validation:
    -The successMessage element's display is set to 'block', making it visible.
    -The form is hidden by setting its property to 'none'.
    -If the form is not valid, this block is skipped.

Data Type:

- successMessage.style.display: String - decides whether the success message is shown or hidden ('block' or 'none').
- The same submit event logic from the Login Form applies here as the dashboard is displayed post-validation.

**Task Manipulation Details**

DOM References

- These are the same as the ones above.

Loops

validationTasks.forEach(task => {
if (!task.isValid) {
valid = false;
}
});

- No loops are really used here because each field is being individually validated . The function of it can be extended using an array or an object.

If-else:

if (nameInput.value.trim() === '') {
nameError.textContent = 'Name is required.';
valid = false;
} else {
nameError.textContent = '';
}

if (!emailInput.value.includes('@')) {
emailError.textContent = 'Email must include @.';
valid = false;
} else {
emailError.textContent = '';
}

- Each fields validation is checked individually. If it fails, an error message is appears, and is set to false.

Data

const validationTasks = [
{ field: 'name', isValid: nameInput.value.trim() !== '' },
{ field: 'email', isValid: emailInput.value.includes('@') }
];

- An array of objects represents validation tasks containing:

  -field: The name of the field being validated.
  -isValid: indicating whether the field passes validation.

- This data structure can be expanded for additional fields.
