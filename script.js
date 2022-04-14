
const button = document.getElementById("convert-button")
const select = document.getElementById("Select-Coins")

const ConvertValue = async () => {

    const input = document.getElementById("input-real").value

    const RealValue = document.getElementById("Value-real")

    const ValueText = document.getElementById("Value-coins")

    const quotes = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = quotes.USDBRL.high
    const euro = quotes.EURBRL.high
    const bitcoin = quotes.BTCBRL.high


    RealValue.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(input)


    if (select.value === "US$ Dólar Americano") {
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

    if (select.value === "US$ Dólar Americano") {
        CoinsName.innerHTML = "US$ Dólar Americano"
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