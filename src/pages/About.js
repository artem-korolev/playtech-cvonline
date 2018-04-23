import React, { Component } from 'react'

import MainWrapper from '../components/MainWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Picture from '../assets/Picture.jpg'

class About extends Component {
  render() {
    return (
        <MainWrapper>
            <Header />
            
            <div style={{ padding: '68px 24px 26px 24px' }}>
	            <div style={{ display: 'table', width: '100%' }}>
		            <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingTop: '2px' }}>
			            <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '36px', fontWeight: 700, lineHeight: '68.2px' }}>ABOUT PLAYTECH</div>
		            </div>
	            </div>
	        </div>
	        <div style={{padding: '0 24px 26px 24px', fontFamily: 'TitilliumWeb-Regular', fontWeight: 300, lineHeight: '24px', color: '#081c4a', fontSize: '16px'}}>
                Playtech offers cutting edge, value-added solutions to the online gaming industry's top operators and can be positively considered as one of the pioneers of the worldwide online gaming industry.
                <br/><br/>Different Playtech products have won numerous prizes helping us reach continuous partnerships with the most reputable gaming operators – our largest customers include Bet365, William Hill, Paddypower, Ladbrokes, Betfair, and others.
                <br/><br/>Currently there are around 5000 employees working in the production and development units at 17 geographic locations around the world. Looking at these different locations gives an idea of the excitingly entwining multicultural environment we work in.
                <br/><br/>Playtech center in Estonia includes both the development, production and customer support functions of the Group. Being one of the largest IT companies in the country, Playtech Estonia is 650 people strong. About 500 people work in Tartu office and other 150 in Tallinn office.
                <br/><br/><br/>
                <img src={Picture} />
            </div>

            <Footer />
        </MainWrapper>
    );
  }
}

export default About;