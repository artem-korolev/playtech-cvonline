import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Slider from './Slider'

import logo from '../assets/Logo.png'
import line from '../assets/Line.png'
import btn_facebook from '../assets/btn_facebook.png'
import btn_linkedin from '../assets/btn_linkedin.png'
import btn_youtube from '../assets/btn_youtube.png'
import btn_home from '../assets/btn_home.png'



var mainheader_style = {
    display: "table-row",
    width: "1000px",
    height: "425px",
    backgroundBlendMode: "darken;transition: 3s",
    background: "url(../assets/slide1_2.jpg) no-repeat",
};
var mainheader_left_style = {
    display: 'table-cell',
    width: '261px',
    height: '425px',
    textAlign: 'center',
    backgroundColor: '#081c4a'
};

var mainheader_menu_style = {
    padding: 0,
    margin: 0,
    paddingTop: '24px',
    paddingBottom: '11px',
    fontFamily: 'TitilliumWeb-ExtraLight',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '34px',
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
    listStyle: 'none',
    letterSpacing: '1px'
};

var main_menu_links_style = {color: 'white', 'text-decoration': 'none'};

var playtech_cvo_mainmenu_li = {
    background: 'none',
    fontFamily: 'TitilliumWeb-ExtraLight',
    fontSize: '12px',
    fontWeight: '600',
    lineHeight: '34px',
    color: '#ffffff',
    textTransform: 'uppercase',
    listStyle: 'none',
    letterSpacing: '1px',
    padding: 0,
    margin: 0,
}

class Header extends Component {
  render() {
    return (
        <header>
            <div style={mainheader_style}>
                <div style={mainheader_left_style}>
                    <div style={{ padding:"48px 0 20px 0" }}>
                        <img src={logo} />
                    </div>
                    <img src={line} />
                    <ul id="playtech-cvo-mainmenu" style={mainheader_menu_style}>
                        <li style={playtech_cvo_mainmenu_li}><Link style={main_menu_links_style} to="/">All available job offers</Link></li>
                        <li style={playtech_cvo_mainmenu_li}><Link style={main_menu_links_style} to="/about">About Playtech</Link></li>
                        <li style={playtech_cvo_mainmenu_li}><Link style={main_menu_links_style} to="/meetus">Meet us</Link></li>
                        <li style={playtech_cvo_mainmenu_li}><Link style={main_menu_links_style} to="/internship">Internship</Link></li>
		            </ul>
		            <img src={line} />
		            <div style={{ paddingTop: '27px', wordSpacing: '5px' }}>
                        <a style={{marginRight: '9px'}} href="https://www.facebook.com/PlaytechEstonia/" target="_blank" ><img src={btn_facebook} /></a>
                        <a style={{marginRight: '9px'}} href="https://www.linkedin.com/company-beta/18717/" target="_blank" ><img src={btn_linkedin} /></a>
                        <a style={{marginRight: '9px'}} href="https://www.youtube.com/c/PlaytechEstonia" target="_blank" ><img src={btn_youtube} /></a>
                        <Link to="/"><img src={btn_home} /></Link>
                    </div>
                </div>
                <div style={{ display: 'table-cell', width: '739px', height: '425px', position: 'relative', overflow: 'hidden' }}>
                    <Slider />
                    <div style={{ position: 'absolute', top: '94px', left: '-104px', width: '843px', height: '331px' }}></div>
                    <div style={{ position: 'absolute', top: '371px', left: '39px' }}></div>
                    <div style={{ position: 'absolute', top: '47px', left: '464px' }}>
                        <a target="_blank" href="https://youtu.be/i76RvOUFGsg" data-lity><img src="../assets/watch_video.png" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
