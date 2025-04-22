let dolar = 5.81

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")



usdInput.addEventListener("keyup", () => {
    usdInput.value = formatcurrency(usdInput.value)
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    brlInput.value = formatcurrency(brlInput.value)
    convert("brl-to-usd")
})

usdInput.value = "1000,00"
convert("usd-to-brl")

function formatcurrency(value) {
    let fixedvalue = fixvalue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    return formatter.format(fixedvalue)
}

function fixvalue(value) {
    let fixedvalue = value.replace(",", ".")
    let floatvalue = parseFloat(fixedvalue)
    if(floatvalue == NaN) {
        floatvalue = 0
    }
    return floatvalue
}

function convert(type) {
    if(type == "usd-to-brl"){
        let fixedvalue = fixvalue(usdInput.value)

        let result = fixedvalue * dolar
        result = result.toFixed(2)

        brlInput.value = formatcurrency(result)
    }

    if(type == "brl-to-usd"){
        let fixedvalue = fixvalue(brlInput.value)

        let result = fixedvalue / dolar
        result = result.toFixed(2)

        usdInput.value = formatcurrency(result)
    }
}
