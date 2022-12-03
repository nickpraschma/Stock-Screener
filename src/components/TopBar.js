import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const TopBar = ({ setParameters, reset }) => {
    const [sortBy, setSortBy] = useState("");
    const [sortAscending, setSortAscending] = useState(false);

    const sendData = (newSortBy) => {
        let newSortAscending = !sortAscending;
        setSortBy(newSortBy);
        setSortAscending(sortAscending => !sortAscending);
        setParameters(newSortBy, newSortAscending);
    }

    useEffect(() => {
        setSortBy("");
        setSortAscending(false);
    }, [reset])

    return (
        <div>
            <button className="topBarButton" onClick={() => sendData("symbol")}>
                {(sortBy === "symbol" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "symbol" && !sortAscending) && <MdKeyboardArrowDown />}
                <span> Ticker </span>
                {(sortBy === "symbol" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "symbol" && !sortAscending) && <MdKeyboardArrowDown />}
            </button>
            <button className="topBarButton" onClick={() => sendData("price")}>
                {(sortBy === "price" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "price" && !sortAscending) && <MdKeyboardArrowDown />}
                <span> Price </span>
                {(sortBy === "price" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "price" && !sortAscending) && <MdKeyboardArrowDown />}
            </button>
            <button className="topBarButton" onClick={() => sendData("marketCap")}>
                {(sortBy === "marketCap" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "marketCap" && !sortAscending) && <MdKeyboardArrowDown />}
                <span> Market Cap </span>
                {(sortBy === "marketCap" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "marketCap" && !sortAscending) && <MdKeyboardArrowDown />}
            </button>
            <button className="topBarButton" onClick={() => sendData("volume")}>
                {(sortBy === "volume" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "volume" && !sortAscending) && <MdKeyboardArrowDown />}
                <span> Volume </span>
                {(sortBy === "volume" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "volume" && !sortAscending) && <MdKeyboardArrowDown />}
            </button>
            <button className="topBarButton" onClick={() => sendData("beta")}>
                {(sortBy === "beta" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "beta" && !sortAscending) && <MdKeyboardArrowDown />}
                <span> Beta </span>
                {(sortBy === "beta" && sortAscending) && <MdKeyboardArrowUp />}
                {(sortBy === "beta" && !sortAscending) && <MdKeyboardArrowDown />}
            </button>
        </div>
    )
}

export default TopBar