 import {useState} from "react";
import validator from "validator";
import Select from "react-select";
import Dropdown from './Dropdown';


const UserForm = ({ searchStocks }) => {
    const [filters, setFilters] = useState({});
    const [errors, setErrors] = useState({});

    // Need to add functionality for dropdown
    const {marketCapLowerThan, marketCapMoreThan, priceLowerThan, priceMoreThan, 
        betaLowerThan, betaMoreThan, volumeLowerThan, volumeMoreThan,
        limit} = filters;
    
    let noMarketCap = false;
    const validateData = () => {
        let errors = {};
        // if (!marketCapLowerThan || !marketCapMoreThan) {
        //     errors.marketCap = "Market cap parameters are required.";
        //     noMarketCap = true;
        // }

        ///...

        return errors;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({...prevFilters, [name]: value}));
    }

    const handleSelectChange = (option) => {
        setFilters((prevFilters) => ({...prevFilters, sector: option}));
    }

    const handleSave = () => {
        const errors = validateData();
        if (Object.keys(errors).length) {
            setErrors(errors);
            return;
        }

        setErrors({});
        searchStocks(filters);
    }

    // const searchStocks = (filters) => {
    //     console.log("SEND REQUEST TO API HERE")
    // }

    return (
            <div className="form">
                <div>
                    <span>Marketcap </span>
                    <span>between </span> 
                    <input name="marketCapMoreThan" type="text" value={marketCapMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="marketCapLowerThan" type="text" value={marketCapLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Price </span>
                    <span>between </span> 
                    <input name="priceMoreThan" type="text" value={priceMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="priceLowerThan" type="text" value={priceLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Volume </span>
                    <span>between </span> 
                    <input name="volumeMoreThan" type="text" value={volumeMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="volumeLowerThan" type="text" value={volumeLowerThan} onChange={handleChange} />
                </div>
                <div>
                    <span>Beta </span>
                    <span>between </span> 
                    <input name="betaMoreThan" type="text" value={betaMoreThan} onChange={handleChange} />
                    <span> - </span>
                    <input name="betaLowerThan" type="text" value={betaLowerThan} onChange={handleChange} />
                </div>
                {/* <div>
                    <span>Sector </span>
                    <Dropdown></Dropdown>
                </div> */}
                <div>
                    <span>Max number of stocks: </span>
                    <input name="limit" type="text" value={limit} onChange={handleChange} />
                </div>
                <div>
                    <button className="search" onClick={handleSave}>
                        Search
                    </button>
                </div>
            </div>
    )
}

export default UserForm