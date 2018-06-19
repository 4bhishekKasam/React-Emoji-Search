import React, { Component } from 'react';

import PropTypes from 'prop-types';
import './EmojiResultRow.css';

class EmojiResultRow extends Component {
    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

        return (
            <div>
                <div className="uk-flex uk-flex-center" >

                    <div className="uk-width-2-3@m uk-flex-first"></div>
                    <div className="uk-width-1-3@m  ">
                        <img src={src} alt={this.props.title} />
                    </div>
                    <div className="uk-width-2-3@m">
                        <p> {this.props.title}  </p>
                    </div>
                   
                </div>
                <br />
            </div>
        );
    }
}

EmojiResultRow.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default EmojiResultRow;
