// Function to fetch currency rates from an external API
async function fetchCurrencyRates() {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return null;
  }
}

// Function to populate currency options in the select elements
async function populateCurrencyOptions() {
  const rates = await fetchCurrencyRates();
  if (rates) {
    const baseCurrencySelect = document.getElementById("baseCurrency");
    const targetCurrencySelect = document.getElementById("targetCurrency");
    
    for (const currency in rates) {
      const option1 = new Option(currency, currency);
      const option2 = new Option(currency, currency);
      baseCurrencySelect.add(option1);
      targetCurrencySelect.add(option2);
    }
  }
}

// Function to convert currency
async function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const baseCurrencySelect = document.getElementById("baseCurrency");
  const targetCurrencySelect = document.getElementById("targetCurrency");
  const convertedAmountParagraph = document.getElementById("convertedAmount");
  const conversionDateParagraph = document.getElementById("conversionDate");

  const amount = parseFloat(amountInput.value);
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  const rates = await fetchCurrencyRates();
  if (rates) {
    const conversionRate = rates[targetCurrency] / rates[baseCurrency];
    const convertedAmount = amount * conversionRate;

    convertedAmountParagraph.textContent = `${amount.toFixed(2)} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    conversionDateParagraph.textContent = `Conversion Date: ${new Date().toLocaleString()}`;
  }
}

// Function to reset currency converter
function resetConverter() {
  document.getElementById("amount").value = "";
  document.getElementById("baseCurrency").selectedIndex = 0;
  document.getElementById("targetCurrency").selectedIndex = 0;
  document.getElementById("convertedAmount").textContent = "";
  document.getElementById("conversionDate").textContent = "";
}

// Populate currency options on page load
document.addEventListener("DOMContentLoaded", () => {
  populateCurrencyOptions();
  document.getElementById("convertButton").addEventListener("click", convertCurrency);
  document.getElementById("resetButton").addEventListener("click", resetConverter); // Add event listener for reset button
});
