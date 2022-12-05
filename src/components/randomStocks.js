
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//code used from this citation: https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Javascript%20creates%20pseudo%2Drandom%20numbers,it%20will%20never%20be%201.
function generateRandomDecimalInRangeFormatted(min, max, places) {
    let value = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value).toFixed(places);
}

function getRandomPrice()
{
    const cap = getRandomInt(11) * 10000;
    return generateRandomDecimalInRangeFormatted(0, cap, 4);
}

class randomStock{
    constructor(sector , industry , price , name , beta , volume , symbol , marketCap) {
        this.price = price;
        this.beta = beta;
        this.volume = volume;
        this.symbol = symbol;
        this.marketCap = marketCap;
    }
}

const sectors = Array("Energy", "Technology", "Industrials", "Financial Services", "Basic Materials", "Communication Services", "Consumer Defensive", "Healthcare", "Real Estate", "Utilities", "Industrial Goods", "Financial", "Services", "Conglomerates");
const industries = Array("Autos" , "Banks" , "Banks Diversified" , "Software" , "Banks Regional" , "Beverages Alcoholic" , "Beverages Brewers" , "Beverages Non-Alcoholic")
const endNames = Array("LLC" , "Management" ,"Inc" ,"Capital" ,"Advisors" ,"Group" ,"Services" , "Foundation" , "Partners" ,"Advisory" ,"Associates" ,"Corporation","Company","Corp","Global","Solutions","Fund","Strategies" ,"Retirement" ,"Consultants" ,"Hill" ,"Strategies" ,"New" ,"Strategic" ,"Portfolio" ,"Counsel" , "Solutions" , "Numerics");
const middleNames = Array("News" , "Equipment" , "Techniques" , "Layers" , "Utensils" , "Foods" , "Oils" , "Instruments" , "Engineering" , "Construction" , "Fencing" , "Oranges" , "Markers" , "Pencils" , "Rods" , "Bricks" , "Housing" , "Training", "Cotton", "Corn", "Paint", "Hats", "Apples", "Bottles", "Shoes", "Pretzels", "Windows", "Framing", "Airports", "Armies", "Breakfast", "Cameras", "Optics", "Carpet", "Insects", "Refrigerators", "Rockets", "Stones", "Tutors", "Doctors", "Flowers", "Garages" );
const beginningNames = Array("James" , "Soft" , "Hard" , "Intense" , "Cyber" , "Sarah's" , "James'" , "Simon's" , "Ella's" , "Justin's" , "Ethan's" , "Joey's" , "Hooper's" , "Nick's" , "Andrew's" , "Red" , "Purple" , "Blue" , "Oceanic" , "Super" , "Duper" , "Computer" ,"Scientific" ,"Abstract" ,"Geometric" ,"Triangular" ,"Rectangular" ,"Bart" ,"Beavis" ,"Butthead" ,"Plant" ,"Hurricane" ,"Tornado" ,"Java" ,"C++" ,"Python" ,"App" ,"Public" ,"Spider" ,"Brave" ,"Bright" ,"Dark" ,"Gloomy" ,"Cloudy" ,"Rainy" ,"Colorful" ,"Alive" ,"Delightful" ,"Funny" ,"Perfect" ,"Nutty" ,"Sparkling");

function generate2WayName()
{
    let twoWayName = "";
    twoWayName += beginningNames.at(getRandomInt(beginningNames.length));
    twoWayName += " ";
    twoWayName += endNames.at(getRandomInt(endNames.length));
    return twoWayName;
}

function generate3WayName()
{
    let threeWayName = "";
    threeWayName += beginningNames.at(getRandomInt(beginningNames.length));
    threeWayName += " ";
    threeWayName += middleNames.at(getRandomInt(middleNames.length));
    threeWayName += " ";
    threeWayName += endNames.at(getRandomInt(endNames.length));
    return threeWayName;
}

function generateRandomName()
{
    let firstOrLast = getRandomInt(2);
    if(firstOrLast === 0)
    {
        return generate2WayName();
    }
    else
    {
        return generate3WayName();
    }

}

function generateRandomVolume()
{
    return generateRandomDecimalInRangeFormatted(500 , 10000000 , 0);
}

function generateRandomBeta()
{
    return generateRandomDecimalInRangeFormatted(1 , 2.3, 4);
}

function getSymbolFromName(name)
{
    name.toLowerCase();
    let spot1, spot2;
    let symbol = "";
    let count = 0;
    let cont = false;
    symbol += name.at(0);
    for(let i = 0; i < name.length; i++)
    {
        cont = false;
        if(name.at(i) === ' ') {
            count++;
            cont = true;
        }
        if(count === 1 && cont === true)
            spot1 = i;
        if(count === 2 && cont === true)
            spot2 = i;
    }
    if(count === 1)
    {
        symbol += name.at(spot1-1) + name.at(spot1+1) + name.at(name.length-1);
    }
    else
    {
        symbol += name.at(spot1+1) + name.at(spot2+1);
    }
    symbol.toUpperCase();
    for(let i = 0; i < symbol.length; i++)
    {

    }
    return symbol;
}

function printStock(stock1)
{
    console.log("Price: " + stock1.price);
    console.log("Beta: " + stock1.beta);
    console.log("Volume: " + stock1.volume);
    console.log("Symbol: " + stock1.symbol);
    console.log("MarketCap: " + stock1.marketCap);
    console.log();
}


function createRandomStock()
{
    let randomPrice , randomSector , randomIndustry , randomName , beta , volume , symbol , randomMarketCap;
    randomSector = sectors.at(getRandomInt(14));
    randomIndustry = industries.at(getRandomInt(8));
    randomPrice = parseFloat(getRandomPrice());
    randomName = generateRandomName();
    beta = parseFloat(generateRandomDecimalInRangeFormatted(1 , 5.5, 4));
    volume = parseFloat(generateRandomVolume());
    symbol = getSymbolFromName(randomName);
    symbol = symbol.toUpperCase();
    randomMarketCap = randomPrice * generateRandomVolume(1000 , 10000 , 2);
    let stock1 = new randomStock(randomSector , randomIndustry  , randomPrice , randomName , beta , volume , symbol , randomMarketCap);
    printStock(stock1);
    return stock1;

}



function getRandomStocks()
{
    let a = Array(100000);
    for(let i = 0; i < a.length; i++)
    {
        a[i] = createRandomStock();
    }
    return a;

}

export default getRandomStocks;