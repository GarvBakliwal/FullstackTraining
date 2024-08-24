// TASK 5
// job_type (input)
// government / business / private
// if job_type government
// take salary input and if salary is greater than 50k
// print You can apply for loan
// otherwise print you can not apply for loan
// if job_type business than
// yearly turnover input
// if turnover greater than 20lakh than
// print you can apply for lean
// other wise
// print you can not apply for loan
// if job_type private
// no loan avaialbe for you

const prompt = require("prompt-sync")();
const jobType = prompt("Enter Your Job Type (government / business / private) : ");
switch (jobType) {
    case "government":
        {
            const salary = prompt("Enter Your Salary : ");
            if (salary < 50000) {
                console.log("You can not apply for loan");
            } else {
                console.log("You can apply for loan");
            }
            break;
        }
    case "business":
        {
            const salary = prompt("Enter your Yearly Turnover : ");
            if (salary < 2000000) {
                console.log("You can not apply for loan");
            } else {
                console.log("You can apply for loan");
            }
            break;
        }
    case "private":
        {
            console.log("No Loan available for you :( ");
            break;
        }
    default:
        console.log("Invalid Input! ");
        break;
}