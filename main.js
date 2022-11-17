const adviceNumber = document.querySelector('.advice-number');
const quote = document.querySelector('.quote');
const randomBtn = document.querySelector('.random');


function getQuote() {
    fetch('https://api.adviceslip.com/advice').then(response => {
    return response.json();
}).then(data => {
    const dataObj = data.slip;
    quote.innerHTML = `"${dataObj.advice}"`;
    adviceNumber.innerHTML = `${dataObj.id}`;
}).catch(error => {
    console.log(error);
});
};

randomBtn.addEventListener('click', getQuote);
