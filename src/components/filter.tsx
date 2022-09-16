import * as React from "react";
import {
    FilterContainer,
    ColumnOne,
    ColumnTwo,
    ColumnThree,
} from "../styles/FilterElements";

const Filter = () => {
    return (
        <>
            <FilterContainer>
                <ColumnOne>
                    <div className="subheading">Property Type</div>
                    <div className="search">
                        <div className="select">
                            <select>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Unit">Unit</option>
                                <option value="Townhouse">Townhouse</option>
                                <option value="Land">Land</option>
                                <option value="Villa">Villa</option>
                                <option value="Acreage">Acreage</option>
                                <option value="BlockUnits">
                                    Block of Units
                                </option>
                                <option value="RetirementLiving">
                                    Retirement Living
                                </option>
                                <option value="Rural">Rural</option>
                            </select>
                        </div>
                    </div>
                </ColumnOne>
                <span className="span_one"></span>
                <ColumnTwo>
                    <div className="subheading">Bedrooms</div>
                    <div>
                        <div className="span_min">Min</div>
                        <div className="search_one">
                            <div className="select_one">
                                {" "}
                                <select>
                                    <option>Any</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div className="span_max">Max</div>
                        <div className="search_two">
                            <div className="select_two">
                                {" "}
                                <select>
                                    <option>Any</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ColumnTwo>
                <span className="span_two"></span>
                <ColumnThree>
                    <div className="subheading">Bathrooms</div>
                    <div className="search">
                        <div className="select">
                            <select>
                                <option>Any</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                </ColumnThree>
            </FilterContainer>
        </>
    );
};

export default Filter;
