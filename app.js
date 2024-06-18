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
const nameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const linkedinInput = document.querySelector("#linkedin");
// const coverLetterInput = document.querySelector("#coverLetter");
// const SalaryInput = document.querySelector("#salary");
const submitBtn = document.querySelector("#submit");

// regex patterns
const fullNameRegex = /^[A-Za-z]+ [A-Za-z\s]+$/
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^(\d{3})-\d{3}-\d{4}$/
// const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+$/
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\//
const coverLetterRegex = /^[a-zA-Z0-9\s.,!?]*$/
const expectedSalarayRegex = /^\d+(\.\d{1,2})?$/


https://www.linkedin.com/in/nmesoma-peter-5785b9209/

submitBtn.addEventListener("click",()=>{
    let nameInputValue = nameInput.value;
    if(fullNameRegex.test(nameInputValue)){
        if(EmailRegex.test(emailInput.value)){
            if(phoneRegex.test(phoneInput.value)){
                if(linkedinRegex.test(linkedinInput.value)){

                }else{
                    alert("invalid Url");
                }
            }else{
                alert("Invalid Phone Number format");
            }
        }else{
            alert("wrong email format");
        }
    }else{
        alert("name must be in pairs and must not contain special characters or numbers")
    }

})