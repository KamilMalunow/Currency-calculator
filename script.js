{
    const switchfunction = (currency, amount) => {

        const EUR = 4.53;
        const USD = 3.95;
        const GBP = 5.42;


        switch (currency) {
            case "EUR":
                return amount / EUR;


            case "USD":
                return amount / USD;


            case "GBP":
                return amount / GBP;


        }
    };

const onFormsubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");


    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = switchfunction(currency, amount);


    const resultfunction = (amount, currency, resultElement) => {
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    resultfunction(amount, currency, resultElement);
};

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormsubmit);
    };
    init();
}