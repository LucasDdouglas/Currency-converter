
const button = document.getElementById("convert-button")
const select = document.getElementById("Select-Coins")

const dolar = 5.58
const euro = 6.34
const bitcoin = 267180.82

const ConvertValue = () => {

    const input = document.getElementById("input-real").value

    const RealValue = document.getElementById("Value-real")

    const ValueText = document.getElementById("Value-coins")


    RealValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)


    if (select.value === "US$ Dólar americano") {
        ValueText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        ValueText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(input / euro)
    }

    if (select.value === "Bitcoin") {
        ValueText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BTC' }).format(input / bitcoin)
    }
}

const ChangeSelect = () => {

    const CoinsName = document.getElementById("Coins-Name")
    const CountryFlag = document.getElementById("Country-Flag")

    if (select.value === "US$ Dólar americano") {
        CoinsName.innerHTML = "US$ Dólar americano"
        CountryFlag.src = "assets/estados-unidos (1) 1.svg"
    }


    if (select.value === "€ Euro") {
        CoinsName.innerHTML = "€ Euro"
        CountryFlag.src = "assets/euro.svg"
    }


    if (select.value === "Bitcoin") {
        CoinsName.innerHTML = "Bitcoin"
        CountryFlag.src = "assets/bitcoin.png"
    }
    ConvertValue()

}


button.addEventListener('click', ConvertValue)
select.addEventListener('change', ChangeSelect)