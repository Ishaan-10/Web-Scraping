const accounting = require('accounting');
const nightmare = require('nightmare')();
const sendMail = require('./mailConfig');


// const params=process.argv.slice(2);
// let url = params[0];
// const minPrice = params[1];

async function checkPrice(url,minPrice,id) {

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
        await sendMail(id,`${priceNumber}`)
    }else{
        console.log("expensive")
    }
}
const url = "https://www.amazon.in/Redgear-Pro-Wireless-Gamepad-Black/dp/B0756CLQWL"
const minPrice = 1800
const id = 'ishaanbholayo@gmail.com';

checkPrice(url,minPrice,id);