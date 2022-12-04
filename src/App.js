import { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm';
import Stock from './components/Stock';
import TopBar from './components/TopBar';
import TimSort from './TimSort';
import quicksort from "./components/tutorial";

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [sortingMethod, setSortingMethod] = useState("quicksort");
    const [resetFlag, setResetFlag] = useState(false);
    const [hasSearchAtLeastOnce, setHasSearchedAtLeastOnce] = useState(false);
    const [timeToSort, setTimeToSort] = useState(0);

    const searchStocks = async (filters) => {
        console.log("filters: ", filters);
        const response = await fetch(`https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=${filters.marketCapMoreThan}&marketCapLowerThan=${filters.marketCapLowerThan}&betaMoreThan=${filters.betaMoreThan}&betaLowerThan=${filters.betaLowerThan}&volumeMoreThan=${filters.volumeMoreThan}&volumeLowerThan=${filters.volumeLowerThan}&priceMoreThan=${filters.priceMoreThan}&priceLowerThan=${filters.priceLowerThan}&exchange=NASDAQ&limit=${filters.limit}&apikey=a5df1e34a66d2eeb25448eb9a1f2655f`);
        const data = await response.json();
        setStocks(data);
        console.log("stock data: ", data);

        setHasSearchedAtLeastOnce(true);
        // Reset sorting parameters when search button is clicked
        setResetFlag(resetFlag => !resetFlag);
    }

    // Sorts stocks alphabetically by symbol using built-in sorting algorithm
    const sortStocks = (sortBy, sortAscending) => {
        let currentStocks = [...stocks];

        const t0 = window.performance.now();
        if(sortingMethod === "timsort") {
            TimSort(currentStocks, sortingMethod, sortBy, sortAscending);
        }
        else {
            currentStocks = quicksort(currentStocks, sortBy, sortAscending);
        }
        const t1 = window.performance.now();
        console.log(`Time ${t1-t0}`);
        setStocks(currentStocks);
        setTimeToSort(t1-t0);
    }

    return (
        <div className="app">
            <h1>Stock Screener</h1>
            <h2>Created by Nikolas Praschma, Justin Adam, and Andrew Miller</h2>
            <h2>Use the search filters below to find stocks on the Nasdaq exchange</h2>
            <UserForm searchStocks={searchStocks} /> 
            {stocks.length > 0 && 
            <div>
                <h2>{stocks.length} match{stocks.length > 1 && 'es'} found! {stocks.length > 500 ? "Displaying first 500." : ""}</h2>
                <button className={`${sortingMethod === "quicksort" ? "activeButton" : "nonactiveButton"}`}
                    onClick={() => {setSortingMethod("quicksort")}}>
                Quicksort
                </button>
                <button
                    className={`${sortingMethod === "timsort" ? "activeButton" : "nonactiveButton"}`}
                    onClick={() => {setSortingMethod("timsort")}}>
                Timsort
                </button>  
                <span className="sortedMessage"> Sorted stocks in {timeToSort.toFixed(4)} ms.</span>
                <div className="grid">
                    <TopBar setParameters={sortStocks} reset={resetFlag}/>
                    {stocks.map((stock, index) => (
                        index < 500 && <Stock stock={stock}/>
                    ))}
                </div>
            </div>
            }
            {(hasSearchAtLeastOnce && stocks.length === 0) && <h2>No matches found. Try adjusting your search parameters.</h2>}
        </div>
    )
}

export default App
