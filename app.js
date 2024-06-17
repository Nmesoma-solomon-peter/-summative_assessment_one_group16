// Variation 2: Job Application Form
// You are designing a job application form for a fictional company.

// Required Fields:
// Full Name: Letters and spaces only
// Email: Valid email format
// Phone Number: Format 123-456-7890
// LinkedIn Profile URL: Valid URL in the form https://www.linkedin.com/usernameLinks to an external site.
// Cover Letter: No special characters
// Expected Salary: Valid number with up to two decimal places 


// linking form elements to js variables
const name = document.querySelector("#fullName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const linkedin = document.querySelector("#linkedin");
const coverLetter = document.querySelector("#coverLetter");
const Salary = document.querySelector("#salary");

// regex patterns 
const fullNameRegex = /^[A-Za-z\s]+$/
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^(\d{3})-\d{3}-\d{4}$/
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/[a-zA-Z0-9_-]+$/
const coverLetterRegex = /^[a-zA-Z0-9\s.,!?]*$/
const expectedSalarayRegex = /^\d+(\.\d{1,2})?$/

