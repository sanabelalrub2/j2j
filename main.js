 
const exchangeRates = {
    dollar: 3.3,
    dinar: 0.2,
    nis: 1   
};


function convertCurrency () 
 {   
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("exchange").value;

    
    var result = amount * exchangeRates[currency];

    
    document.querySelector(".result").textContent = result.toFixed(2);

    
    return false;
}
