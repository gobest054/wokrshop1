const currency_one = document.getElementById("currency-one");
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const ratetext = document.getElementById('rate');
const swap = document.getElementById('btn');


currency_one.addEventListener('change',calculatemoney);
currency_two.addEventListener('change',calculatemoney);

amount_one.addEventListener('input',calculatemoney);
amount_two.addEventListener('input',calculatemoney); 



function calculatemoney(){
    const one = currency_one.value;
    const two = currency_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`)
    .then(res=>res.json())
    .then(data=>{
        const rate=data.rates[two];
        ratetext.innerText= `1${one} = ${rate}${two}`;
        //console.log(data.rates[two]);
        amount_two.value=(amount_one.value*rate).toFixed(2);
    })
}
    swap.addEventListener('click',() =>{
            const temp = currency_one.value; // ต้นทาง
            currency_one.value=currency_two.value;
            currency_two.value = temp;
            calculatemoney();
        }
    )
calculatemoney();