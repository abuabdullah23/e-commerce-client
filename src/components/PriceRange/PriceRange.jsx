import React, { useState } from 'react';
import './PriceRange.css'; // Make sure to import your CSS file

const PriceRange = ({ range, setLowPrice, setHighPrice }) => {
    const [minPrice, setMinPrice] = useState(range.low);
    const [maxPrice, setMaxPrice] = useState(range.high);
    const priceGap = 5;

    const handlePriceInputChange = (e) => {
        let newMinPrice = parseInt(e.target.value);
        let newMaxPrice = parseInt(maxPrice);

        if ((newMaxPrice - newMinPrice >= priceGap) && newMaxPrice <= range.high) {
            setMinPrice(newMinPrice);
        }
    };

    const handleRangeInputChange = (e) => {
        let newMinVal = parseInt(e.target.value);
        let newMaxVal = parseInt(maxPrice);
        setLowPrice(newMinVal)


        if ((newMaxVal - newMinVal) < priceGap) {
            setMinPrice(newMaxVal - priceGap);
        } else {
            setMinPrice(newMinVal);
        }
    };

    const calculateLeftPercentage = () => {
        return ((minPrice / range.high) * 100) + "%";
    };

    const calculateRightPercentage = () => {
        return 100 - ((maxPrice / range.high) * 100) + "%";
    };

    return (
        <div className="wrapper">
            {/* <header>
                <h2>Price Range</h2>
                <p>Use slider or enter min and max price</p>
            </header> */}
            <div className="price-input">
                <div className="field">
                    {/* <span>Min</span> */}
                    <input
                        type="number"
                        className="input-min"
                        value={minPrice}
                        onChange={handlePriceInputChange}
                    />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    {/* <span>Max</span> */}
                    <input
                        type="number"
                        className="input-max"
                        value={maxPrice}
                        onChange={(e) => {
                            setMaxPrice(parseInt(e.target.value))
                            setHighPrice(parseInt(e.target.value))
                        }}
                    />
                </div>
            </div>
            <div className="slider">
                <div
                    className="progress"
                    style={{ left: calculateLeftPercentage(), right: calculateRightPercentage() }}
                ></div>
            </div>
            <div className="range-input">
                <input
                    type="range"
                    className="range-min"
                    min="0"
                    max={range.high}
                    value={minPrice}
                    step="1"
                    onChange={handleRangeInputChange}
                />
                <input
                    type="range"
                    className="range-max"
                    min="0"
                    max={range.high}
                    value={maxPrice}
                    step="1"
                    onChange={(e) => {
                        setMaxPrice(parseInt(e.target.value))
                        setHighPrice(parseInt(e.target.value))
                    }}
                />
            </div>
        </div>
    );
};

export default PriceRange;
