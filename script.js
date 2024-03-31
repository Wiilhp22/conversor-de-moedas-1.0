const convertButton = document.querySelector(".botaoconverter")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const brasil = document.querySelector(".moedabrasil")
  const usa = document.querySelector(".moedaamericana")

  console.log(currencySelect.value)

  const dolarToday = 5.02
  const euroToday = 5.42


  if (currencySelect.value == "dolar") {

    usa.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

  }

  if (currencySelect.value == "euro") {

    usa.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

  }
  brasil.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const bandera = document.querySelector(".bandera")
  if (currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    bandera.src ="./assets/euro.png"
  }

  if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar"
    bandera.src ="./assets/dolar.png"
  }
  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
