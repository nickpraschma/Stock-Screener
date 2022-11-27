// source: https://medium.com/geekculture/creating-multi-select-dropdown-with-checkbox-in-react-792ff2464ef3

import React, { Component } from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const sectorOptions = [
    { value: "consumer cyclical", label: "Consumer Cyclical", color: "#00B8D9" },
    { value: "energy", label: "Energy", color: "#0052CC" },
    { value: "technology", label: "Technology", color: "#5243AA" },
    { value: "industrials", label: "Industrials", color: "#FFFFFF" },
    { value: "financial services", label: "Financial Services", color: "#FF8B00" },
    { value: "basic materials", label: "Basic Materials", color: "#FFC400" },
    { value: "communication services", label: "Communication Services", color: "#36B37E" },
    { value: "consumer defense", label: "Consumer Defense", color: "#00875A" },
    { value: "healthcare", label: "Healthcare", color: "#253858" },
    { value: "real estate", label: "Real Estate", color: "#666666" },
    { value: "utilities", label: "Utilities", color: "#666666" },
    { value: "industrial goods", label: "Industrial Goods", color: "#666666" },
    { value: "financial", label: "Financial", color: "#666666" },
    { value: "services goods", label: "Services", color: "#666666" },
    { value: "conglomerates", label: "Conglomerates", color: "#666666" },
];

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
  };

  render() {
    return (
      <span
        className="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={sectorOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
        />
      </span>
    );
  }
}
