const first_curr = document.getElementById('first_currency');
const second_curr = document.getElementById('second_currency');

const first_value = document.getElementById('first_amount');
const second_value = document.getElementById('second_amount');

const rate_element = document.getElementById('rate');


function solve(){
	const source = first_curr.value;
	const des = second_curr.value;

	async function getExchangeRate(){
		try{
			const result = await fetch(`https://api.exchangerate-api.com/v4/latest/${source}`);
			const data = await result.json();
			const rate = data.rates[des];
			rate_element.innerText = `1 ${source} = ${rate} ${des}`;
			second_value.value = (first_value.value * rate).toFixed(2);
		}
		catch(error){
			alert(error);
		}
	}
	getExchangeRate();
}


first_curr.addEventListener('change', solve);
second_curr.addEventListener('change', solve);
first_value.addEventListener('input', solve);
second_value.addEventListener('input', solve);

solve();

