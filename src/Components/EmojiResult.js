import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResult.css'

class EmojiResult extends Component {
    render() {
        return (
            <div className="uk-container">
                {
                    this.props.emojiData.map((emojiData) => {
                        return (
                            <EmojiResultRow
                                key={emojiData.symbol}
                                symbol={emojiData.symbol}
                                title={emojiData.title}
                            />
                           
                        );
                    })
                }
            </div>
        );
    }
}

EmojiResult.propTypes = {
    emojiData: PropTypes.array,
}


export default EmojiResult;
