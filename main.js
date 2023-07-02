const btn = document.querySelectorAll(".button");
const display = document.getElementById('display');
const opr = document.querySelectorAll(".opreator");
const clear = document.getElementById('clear');
const del = document.getElementById('delete');
const sort = document.getElementById("bEquals")
const opreator = ['+', "-", '*', '/', '%', "."]


// getting all the buttons to be displayed while clicked on
btn.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.innerText
       
    })
});


// delete btn
function det() {
    let myArray = display.value;
    let x = myArray.slice(0, myArray.length - 1);
    display.value = x;
};
del.addEventListener('click', det);



// getting all the buttons to be displayed while click on
opr.forEach(op => {
    op.addEventListener("click", (e) => {
        let mArray = display.value;
        let last = mArray.slice(-1);
        let event = e.target.innerText;
         
        
        if (event == last) {
           display.value += "" 
        } else if (display.value == "" ) {
            if (event == ".") {
                display.value += '0.'
            } else {
                display.value == ""
                alert('invalid format used')
            }
            
        } else if (opreator.includes(last)) {
            det()
            display.value += event
        }else {
            display.value += op.innerText
         }

    })
});


// all clear button
clear.addEventListener('click', () => {
    display.value = ""
});


// evaluating inputed data
sort.addEventListener('click', () => {
    try {
         if (display.value == "") {
        display.value == ""
        } else {
        let sorted = eval(display.value);
        display.style.fontSize = "1.5rem"
        display.value = sorted; 
        }
     }
     catch(err) {
        alert('invalid format used \r\n check what you inputed')
     }  
  });



