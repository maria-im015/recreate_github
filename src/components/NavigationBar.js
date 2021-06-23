import React from 'react';
import SearchBar from './SearchBar';
import LoginControls from './LoginControls';

const NavigationBar = () => {
    return (
            <nav>
                <ul>
                <img id="logo" alt="github logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                    <li>Why Github?</li>
                    <li>Team</li>
                    <li>Enterprise</li>
                    <li>Explore</li>
                    <li>Marketplace</li>
                    <li>Pricing</li>
                    <li><SearchBar></SearchBar></li>
                    <li><LoginControls></LoginControls></li>
                </ul>
            </nav>

    );
}

export default NavigationBar;