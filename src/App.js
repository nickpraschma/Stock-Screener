import { useState, useEffect } from 'react';

import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'
import UserForm from './components/UserForm';
import Stock from './components/Stock';

const API_URL = 'http://www.omdbapi.com?apikey=5dad54a6'

// const movie1 = {
//     "Title": "The Amazing Spiderman T4 Premiere Special",
//     "Year": "2012",
//     "imdbID": "tt2233044",
//     "Type": "movie",
//     "Poster": "N/A"
// }

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
    // const [movies, setMovies] = useState([]);
    const [stocks, setStocks] = useState([]);

    const searchStocks = async (filters) => {
        console.log(filters);

        // SEND API REQUEST HERE
        
        // After API request is done, render the stocks to the user
        setStocks(fakeStocks);
    }

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`)
    //     const data = await response.json()
        
    //     setMovies(data.Search)
    // }

    // useEffect(() => {
    //     searchMovies('Spiderman')
    // }, [])

    return (
        <div className="app">
            <h1>Stock Screener</h1>
            <h2>Use the Filters Below</h2>
            <UserForm searchStocks={searchStocks}/> 
            {
                stocks.length > 0 && 
                <div>
                    {stocks.map((stock) => (
                        <Stock stock={stock}/>
                    ))}
                </div>
            }
        </div>
    )
}

export default App