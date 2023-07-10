import React, { Component } from 'react';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls : 6,
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div></div>
        )
    }
}