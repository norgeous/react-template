import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'

import HomeGrid      from './HomeGrid/HomeGrid'

@inject("store")@ observer

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    render() {
        const store = this.store;

        return (
            <div className="HomePage">
                <main>
                    <HomeGrid/>
                </main>
            </div>
        )

    }

}