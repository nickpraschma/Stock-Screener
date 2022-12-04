 import { useState } from "react";

const UserForm = ({ searchStocks }) => {
    const [filters, setFilters] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const {marketCapLowerThan, marketCapMoreThan, priceLowerThan, priceMoreThan, 
        betaLowerThan, betaMoreThan, volumeLowerThan, volumeMoreThan,
        limit} = filters;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({...prevFilters, [name]: value}));
    }

    const handleSave = async () => {
        setIsLoading(true);
        await searchStocks(filters);
        setIsLoading(false);
    }

    const showDialog = () => {
        alert('This parameter will limit the maximum number of stocks that the website will fetch.\n\nIf exactly 100000 is entered, 100000 randomly generated stocks will be returned.');
    }

    return (
            <div className="form">
                <div>
                    <span>Marketcap </span>
                    <span>between </span> 
                    <input name="marketCapMoreThan" type="number" value={marketCapMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="marketCapLowerThan" type="number" value={marketCapLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Price </span>
                    <span>between </span> 
                    <input name="priceMoreThan" type="number" value={priceMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="priceLowerThan" type="number" value={priceLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Volume </span>
                    <span>between </span> 
                    <input name="volumeMoreThan" type="number" value={volumeMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="volumeLowerThan" type="number" value={volumeLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Beta </span>
                    <span>between </span> 
                    <input name="betaMoreThan" type="number" value={betaMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="betaLowerThan" type="number" value={betaLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Max number of stocks: </span>
                    <input name="limit" type="number" value={limit} onChange={handleChange} />
                    <button className="helpButton" onClick={showDialog}>?</button>
                </div>
                <div>
                    {isLoading 
                        ? 
                        <button className="loading">Loading</button>
                        :
                        <button className="search" onClick={handleSave}>Search</button>
                     }
                </div>
            </div>
    )
}

export default UserForm