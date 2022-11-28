// source for number formatter: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "B" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
};

const Stock = ({ stock }) => {
    return (
        <div>
            <container className="cell">{stock.symbol}</container>
            <container className="cell">{stock.price} <span class="USD">USD</span> </container>
            <container className="cell">{nFormatter(stock.marketCap, 2)} <span class="USD">USD</span> </container>
            <container className="cell">{nFormatter(stock.volume, 2)} </container>
            <container className="cell">{parseFloat(stock.beta).toFixed(3)} </container>
        </div>
    )
}

export default Stock