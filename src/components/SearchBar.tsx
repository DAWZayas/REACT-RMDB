import React from "react";
import FontAwesome from "react-fontawesome";

export default class SearchBar extends React.Component<{ doSearch: DoSearch }> {
  state = {
    value: ""
  };

  timeout: NodeJS.Timeout | null = null;

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { doSearch } = this.props;

    this.setState({ value: event.target.value });
    this.timeout && clearTimeout(this.timeout);
    // Set a timeout to wait for the user to stop writing
    // So we don´t have to make unnessesary calls
    this.timeout = setTimeout(() => {
      doSearch(this.state.value);
    }, 500);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="searchbar">
        <div className="searchbar__content">
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            className="searchbar__input"
            placeholder="Search"
            onChange={this.handleSearch}
            value={value}
          />
        </div>
      </div>
    );
  }
}
