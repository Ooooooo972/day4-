
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button'); // Assuming buttons have the class "button"
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=")  
            {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }
            string = ""; // Reset string after evaluation
            }
         else if (e.target.innerHTML == "C") 
            {
            string = " ";
            input.value = string;
            }else if (e.target.innerHTML == "AC") 
                {
                string = "";
                input.value = string;
                }
         else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

