const accounting = require('accounting');
const nightmare = require('nightmare')();


const params=process.argv.slice(2);
let url = params[0];
const minPrice = params[1];

async function checkPrice(url,minPrice) {

    console.log("Checking " + url + " ............")
    const priceString = await nightmare.
        goto(url)
        .wait("#priceblock_ourprice")
        .evaluate(()=> document.getElementById("priceblock_ourprice").innerText)
        .end();

    const priceNumber = accounting.unformat(priceString)
    console.log(priceNumber)

    if(priceNumber<minPrice){
        console.log("cheap")
    }else{
        console.log("expensive")
    }
}
checkPrice(url,minPrice);
