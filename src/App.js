import { useState, useEffect } from 'react';
import './App.css'
import UserForm from './components/UserForm';
import Stock from './components/Stock';
import TopBar from './components/TopBar';

const fakeStocks = [ 
    {
    "symbol" : "MSFT",
    "companyName" : "Microsoft Corporation",
    "marketCap" : 1391637040000,
    "sector" : "Technology",
    "beta" : 1.2310280000000000111270992420031689107418060302734375,
    "price" : 183.509999999999990905052982270717620849609375,
    "lastAnnualDividend" : 1.939999999999999946709294817992486059665679931640625,
    "volume" : 54536583,
    "exchange" : "Nasdaq Global Select",
    "exchangeShortName" : "NASDAQ"
    },
    {
        "symbol" : "AAPL",
        "companyName" : "Apple Inc.",
        "marketCap" : 1382174560000,
        "sector" : "Technology",
        "beta" : 1.2284990000000000076596506914938800036907196044921875,
        "price" : 318.8899999999999863575794734060764312744140625,
        "lastAnnualDividend" : 3.0800000000000000710542735760100185871124267578125,
        "volume" : 51500795,
        "exchange" : "Nasdaq Global Select",
        "exchangeShortName" : "NASDAQ"
    }, 
    {
        "symbol" : "AMZN",
        "companyName" : "Amazon.com Inc.",
        "marketCap" : 1215457260000,
        "sector" : "Technology",
        "beta" : 1.5168630000000000723758830645238049328327178955078125,
        "price" : 2436.8800000000001091393642127513885498046875,
        "lastAnnualDividend" : 0,
        "volume" : 6105985,
        "exchange" : "Nasdaq Global Select",
        "exchangeShortName" : "NASDAQ"
    }
]

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [sortingMethod, setSortingMethod] = useState("quicksort");

    // useEffect(() => {
    //     console.log("Stocks changed");
    // }, [stocks])

    const searchStocks = async (filters) => {
        console.log(filters);
        const response = await fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${filters.marketCapMoreThan}&marketCapLowerThan=${filters.marketCapLowerThan}&betaMoreThan=${filters.betaMoreThan}&betaLowerThan=${filters.betaLowerThan}&volumeMoreThan=${filters.volumeMoreThan}&volumeLowerThan=${filters.volumeLowerThan}&priceMoreThan=${filters.priceMoreThan}&priceLowerThan=${filters.priceLowerThan}&exchange=NASDAQ&limit=${filters.limit}&apikey=a5df1e34a66d2eeb25448eb9a1f2655f`);
        const data = await response.json();
        setStocks(data);
        console.log((data));
    }

    // Sorts stocks alphabetically by symbol using built-in sorting algorithm
    const sortStocks = () => {
        let currentStocks = [...stocks];
        currentStocks.sort((a, b) => a.symbol.localeCompare(b.symbol));
        setStocks(currentStocks);
    }

    return (
        <div className="app">
            <h1>Stock Screener</h1>
            <h2>Use the Filters Below</h2>
            <UserForm searchStocks={searchStocks}/> 
            {stocks.length > 0 && 
            <div>
                <h2>{stocks.length} matches found! {stocks.length > 500 ? "Displaying first 500." : ""}</h2>
                <button className={`${sortingMethod === "quicksort" ? "activeButton" : "nonactiveButton"}`}
                    onClick={() => {setSortingMethod("quicksort")}}>
                Quicksort
                </button>
                <button
                    className={`${sortingMethod === "timsort" ? "activeButton" : "nonactiveButton"}`}
                    onClick={() => {setSortingMethod("timsort")}}>
                Timsort
                </button>  
                <button onClick={sortStocks}>Sort stocks</button>
                <div className="grid">
                    <TopBar />
                    {stocks.map((stock, index) => (
                        index < 500 && <Stock stock={stock}/>
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

export default App
