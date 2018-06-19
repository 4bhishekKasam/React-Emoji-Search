import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css'

class Search extends Component {

    handleChange = (e) => { this.props.textChange(e) }

    render() {
        return (
            <div className="uk-container ">
                <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                        <input class="uk-input"
                          type="text"
                           placeholder="Enter Emoji Name..."
                            onChange={this.handleChange}
                        />
                    </div>
                </fieldset>
            </div>
        );
    }
}

Search.propType = {
    textChange: PropTypes.func,
};

export default Search;
