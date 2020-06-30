import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent component
    this.props.onTermSubmit(this.state.term);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="search-bar ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Video Search</label>
              <input
                type="text"
                placeholder="Search"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
