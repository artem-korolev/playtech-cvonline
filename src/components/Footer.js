import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import btn_facebook from '../assets/btn_facebook.png'
import footer_insta from '../assets/footer_insta.png'
import btn_linkedin from '../assets/btn_linkedin.png'
import btn_youtube from '../assets/btn_youtube.png'
import btn_home from '../assets/btn_home.png'
import footer_bg_img from '../assets/footer_bg_img.jpg'


var footer_links_style = { fontFamily: 'TitilliumWeb-Light', color: '#ffffff', lineHeight: '24px', fontSize: '18px', fontWeight: 300, textDecoration: 'none' }
var footer_header_style = { fontFamily: 'TitilliumWeb-Bold', color: '#ffffff', lineHeight: '24px', fontSize: '24px', fontWeight: 700 }

class Footer extends Component {
  render() {
    return (
        <footer style={{ background: 'url(' + footer_bg_img + ') no-repeat', padding: '43px 130px 83px 44px' }}>
            <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#ffffff', fontSize: '36px', fontWeight: 700, paddingBottom: '20px' }}>CONTACTS</div>
            <div style={{ paddingTop: '10px' }}>
                <table width="100%">
                    <tr valign="top">
                        <td>
                            <div style={footer_header_style}>Playtech Estonia</div>
					        <br/>
                            
                            <div><a style={footer_links_style} href="http://www.playtech.ee" target="_blank">www.playtech.ee</a></div>
					        <div><a style={footer_links_style} href="http://www.playtech.com" target="_blank">www.playtech.com</a></div>
					        <div><a style={footer_links_style} href="mailto:career@playtech.com">career@playtech.com</a></div>
                            
                            <div style={{ paddingTop: '15px', wordSpacing: '5px' }}>
						        <a href="https://www.facebook.com/PlaytechEstonia/" target="_blank" ><img src={btn_facebook} /></a>
						        <a href="https://www.instagram.com/playtechestonia/" target="_blank" ><img src={footer_insta} /></a>
						        <a href="https://www.linkedin.com/company-beta/18717/" target="_blank" ><img src={btn_linkedin} /></a>
						        <a href="https://www.youtube.com/c/PlaytechEstonia" target="_blank" ><img src={btn_youtube} /></a>
					        </div>
				        </td>
                        
                        <td width="266">
                            <div style={footer_header_style}>Risse Soomets</div>
					        <br/>
					        <div style={footer_links_style}>+372 5385 8655</div>
					        <div><a style={footer_links_style} href="mailto:risse.soomets@playtech.com" target="_blank">risse.soomets@playtech.com</a></div>
				        </td>
				
				        <td width="266">
					        <div style={footer_header_style}>Talviki Viigand</div>
					        <br/>
					        <div style={footer_links_style}>+372 551 8307</div>
					        <div><a style={footer_links_style} href="mailto:talviki.viigand@playtech.com" target="_blank">talviki.viigand@playtech.com</a></div>
				        </td>
			        </tr>
		        </table>
	        </div>
        </footer>
    );
  }
}

export default Footer;
