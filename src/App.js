import { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm';
import Stock from './components/Stock';
import TopBar from './components/TopBar';

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [sortingMethod, setSortingMethod] = useState("quicksort");
    const [resetFlag, setResetFlag] = useState(false);

    const searchStocks = async (filters) => {
        console.log("filters: ", filters);
        const response = await fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${filters.marketCapMoreThan}&marketCapLowerThan=${filters.marketCapLowerThan}&betaMoreThan=${filters.betaMoreThan}&betaLowerThan=${filters.betaLowerThan}&volumeMoreThan=${filters.volumeMoreThan}&volumeLowerThan=${filters.volumeLowerThan}&priceMoreThan=${filters.priceMoreThan}&priceLowerThan=${filters.priceLowerThan}&exchange=NASDAQ&limit=${filters.limit}&apikey=a5df1e34a66d2eeb25448eb9a1f2655f`);
        const data = await response.json();
        setStocks(data);
        console.log("stock data: ", data);

        // Reset sorting parameters when search button is clicked
        setResetFlag(resetFlag => !resetFlag);
    }

    // Sorts stocks alphabetically by symbol using built-in sorting algorithm
    const sortStocks = (sortBy, sortAscending) => {
        let currentStocks = [...stocks];

        /*
        Use the following three parameters to sort the stocks using custom sorting algorithm
        1. sortingMethod (either "timsort" or "quicksort"), 
        2. sortBy (either "symbol", "price", "marketCap", "volume", or "beta"),
        3. sortAscending (either true or false)
        */
        console.log("Inside of sortStocks(), sortingMethod is", sortingMethod);
        console.log("Inside of sortStocks(), sortBy is ", sortBy);
        console.log("Inside of sortStocks(), sortAscending is ", sortAscending);
        if (sortAscending) {
            currentStocks.sort((a, b) => a.price - b.price);
        }
        else {
            currentStocks.sort((a, b) => b.price - a.price);
        }
        setStocks(currentStocks);
    }

    return (
        <div className="app">
            <h1>Stock Screener</h1>
            <h2>Created by Nikolas Praschma, Justin Adams, and Andrew Miller</h2>
            <h2>Use the Search Filters Below</h2>
            <UserForm searchStocks={searchStocks} /> 
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
                <div className="grid">
                    <TopBar setParameters={sortStocks} reset={resetFlag}/>
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
