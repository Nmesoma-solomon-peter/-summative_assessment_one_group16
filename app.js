// Variation 2: Job Application Form
// You are designing a job application form for a fictional company.

// Required Fields:
// Full Name: Letters and spaces only
// Email: Valid email format
// Phone Number: Format 123-456-7890
// LinkedIn Profile URL: Valid URL in the form https://www.linkedin.com/usernameLinks to an external site.
// Cover Letter: No special characters
// Expected Salary: Valid number with up to two decimal places 

// Linking form elements to JS variables
const mainform = document.querySelector("#form");
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const linkedinInput = document.querySelector("#linkedin");
const coverLetterInput = document.querySelector("#coverLetter");
const SalaryInput = document.querySelector("#salary");
const submitBtn = document.querySelector("#submit");

// Regex patterns for validation
const fullNameRegex = /^[A-Za-z]+ [A-Za-z\s]+$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\d{3})-\d{3}-\d{4}$/;
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\//;
const coverLetterRegex = /^[a-zA-Z0-9\s.,!?]*$/;
const expectedSalarayRegex = /^\d+(\.\d{1,2})?$/;

// Event listener for form submission
mainform.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Validate Full Name
    let nameInputValue = nameInput.value;
    if (fullNameRegex.test(nameInputValue)) {
        // Validate Email
        if (EmailRegex.test(emailInput.value)) {
            // Validate Phone Number
            if (phoneRegex.test(phoneInput.value)) {
                // Validate LinkedIn URL
                if (linkedinRegex.test(linkedinInput.value)) {
                    // Validate Cover Letter
                    if (coverLetterRegex.test(coverLetterInput.value)) {
                        // Validate Expected Salary
                        if (expectedSalarayRegex.test(SalaryInput.value)) {
                            alert("Successfully Submitted!!");
                            // Reload the page after form submission
                            setTimeout(function() {
                                location.reload();
                            }, 1000); // 1-second delay
                        } else {
                            alert("Invalid salary range. Please use the right pattern as shown in the placeholder");
                        }
                    } else {
                        alert("No special characters required in the cover letter");
                    }
                } else {
                    alert("Invalid LinkedIn URL");
                }
            } else {
                alert("Invalid Phone Number format");
            }
        } else {
            alert("Invalid email format");
        }
    } else {
        alert("Full Name must contain only letters and spaces");
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
