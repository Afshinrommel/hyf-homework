import React from 'react'
import Home from './Home';

import About from './About';

class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <ul>
                    <li>
                        {/* <a href="/About">About</a> */}
                    </li>

                    {/* <li>
                        <a href="/">Search</a>
                    </li> */}

                </ul>

            </div>
        )
    }
}
export default Navbar;