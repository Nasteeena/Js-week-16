let sendresults = document.getElementById('sendresults');
let typeOfCars = document.querySelector("select");
let option;
let ranges = document.getElementById('myrange').addEventListener('change', function(){
    sendresults.innerHTML = this.value;
});

function sumChecked(a,b) {
    return a + b;
}

function totalHtml() {
    totalSpan = document.querySelector('.total span');
    totalSpan.innerHTML = totalSum;
} 

const select = document.querySelector('select');
select.addEventListener('change', () => {
    option = typeOfCars.options[typeOfCars.selectedIndex].value;

    console.log(option);
})


function getAllCheckedInputs() {
    let arrayChecked = [];

    let ranges = document.querySelector('.range1');
    arrayChecked.push(parseInt(ranges.value));


    let checkedInputs = document.querySelectorAll('.calc input:checked');
    for (checkedInput of checkedInputs) {
        if (checkedInput) {
            arrayChecked.push(parseInt(checkedInput.value));
            totalSum = arrayChecked.reduce(sumChecked);
            totalHtml(totalSum); 
        }
    }
}

getAllCheckedInputs();


let allInputs = document.querySelectorAll('.calc input');
for (allInput of allInputs) {
    if (allInput) {
        allInput.addEventListener('change', function() {
            getAllCheckedInputs();
        })
    }
}


