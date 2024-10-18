let showAns = document.querySelector("#ans");

function calculate(myValue) {
    let display = document.querySelector("#display")
    if (display.value === "0" && !isNaN(myValue)) {
       
        display.value = myValue;
    } else {
        display.value += myValue;
    }
}

function clearDisplay() {
    let display = document.querySelector("#display")
    display.value = ""
}
function deleteDigit() {
    let display = document.querySelector("#display");
    display.value = display.value.slice(0, -1)
}

function answer(){
    let display = document.querySelector("#display")
    let myVal = display.value;
    myVal = myVal.replace(/÷/g, '/').replace(/×/g, '*');
    try {
        let myEval = eval(myVal);
        display.value = myEval; 
    } catch (error) {
        display.value = "Error"; 
    }
}
document.addEventListener('keydown', function(event) {
    let key = event.key;
    let validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace', 'Delete'];


    if (validKeys.includes(key)) {
        if (key === 'Enter') {
            answer();
        } else if (key === 'Backspace') {
            deleteDigit();
        } else if(key === 'Delete') {
            clearDisplay()
        } else {
          
            if (key === '*') {
                calculate('×');
            } else {
                calculate(key);
            }
        }
    }
});


showAns.addEventListener("click", answer)


// dark mode code starts here
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove("fa-solid");
    sunIcon.classList.add("fa-regular");
} else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add("fa-solid");
    sunIcon.classList.remove("fa-regular");
}

// মুন আইকনে ক্লিক করলে ডার্ক মোড অন
moonIcon.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.remove("fa-solid");
    sunIcon.classList.add("fa-regular");
});

sunIcon.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    sunIcon.classList.add("fa-solid");
    sunIcon.classList.remove("fa-regular");
});




// dark mode code ends here
