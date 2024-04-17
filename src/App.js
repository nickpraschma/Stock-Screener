import { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm';
import Stock from './components/Stock';
import TopBar from './components/TopBar';
import TimSort from './sorting_algorithms/TimSort';
import quicksort from "./sorting_algorithms/QuickSort";
import getRandomStocks from './components/randomStocks';

const App = () => {
    const [stocks, setStocks] = useState([]);
    const [sortingMethod, setSortingMethod] = useState("quicksort");
    const [resetFlag, setResetFlag] = useState(false);
    const [hasSearchAtLeastOnce, setHasSearchedAtLeastOnce] = useState(false);
    const [timeToSort, setTimeToSort] = useState(0);

    const searchStocks = async (filters) => {
        console.log("filters: ", filters);

        if (filters && filters.limit === "100000") {
            const randomlyGeneratedStocks = getRandomStocks();
            setStocks(randomlyGeneratedStocks);
            console.log("random stocks: ", randomlyGeneratedStocks);
        } else {
            // Constructing API URL dynamically based on filters
            const baseUrl = 'https://financialmodelingprep.com/api/v3/stock-screener';
            const queryParams = new URLSearchParams({
                ...filters,
                exchange: 'NASDAQ',
                apikey: '5152df9e5755a580014265eef919313a'
            });

            const response = await fetch(`${baseUrl}?${queryParams.toString()}`);
            const data = await response.json();
            setStocks(data);
            console.log("stock data: ", data);
        }

        setHasSearchedAtLeastOnce(true);
        setResetFlag(resetFlag => !resetFlag);
    }

    const sortStocks = (sortBy, sortAscending) => {
        let currentStocks = [...stocks];
        const t0 = window.performance.now();
        if (sortingMethod === "timsort") {
            TimSort(currentStocks, sortBy, sortAscending); // Updated to remove unnecessary parameter
        } else {
            currentStocks = quicksort(currentStocks, sortBy, sortAscending);
        }
        const t1 = window.performance.now();
        setStocks(currentStocks);
        setTimeToSort(t1 - t0);
        console.log(`Sorted stocks in ${(t1 - t0).toFixed(1)} ms.`);
    }

    return (
        <div className="app">
            <h1>Stock Screener</h1>
            <h2>Created by Nikolas Praschma, Justin Adam, and Andrew Miller</h2>
            <h2>Use the search filters below to find stocks on the Nasdaq exchange</h2>
            <UserForm searchStocks={searchStocks} /> 
            {stocks.length > 0 && (
                <div>
                    <h2>{stocks.length} match{stocks.length > 1 ? 'es' : ''} found! {stocks.length > 500 ? "Displaying first 500." : ""}</h2>
                    <button className={`${sortingMethod === "quicksort" ? "activeButton" : "nonactiveButton"}`}
                        onClick={() => setSortingMethod("quicksort")}>
                        Quicksort
                    </button>
                    <button className={`${sortingMethod === "timsort" ? "activeButton" : "nonactiveButton"}`}
                        onClick={() => setSortingMethod("timsort")}>
                        Timsort
                    </button>  
                    <span className="sortedMessage"> Sorted stocks in {timeToSort.toFixed(1)} ms.</span>
                    <div className="grid">
                        <TopBar setParameters={sortStocks} reset={resetFlag}/>
                        {stocks.slice(0, 500).map((stock, index) => <Stock key={index} stock={stock}/>)}
                    </div>
                </div>
            )}
            {hasSearchAtLeastOnce && stocks.length === 0 && <h2>No matches found. Try adjusting your search parameters.</h2>}
        </div>
    )
}

export default App;
