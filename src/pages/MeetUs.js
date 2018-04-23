import React, { Component } from 'react'

import MainWrapper from '../components/MainWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MeetUs extends Component {
  render() {
    return (
        <MainWrapper>
            <Header />
            
            <div style={{ padding: '68px 24px 26px 24px' }}>
                <div style={{ display: 'table', width: '100%' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingTop: '2px' }}>
                        <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '36px', fontWeight: 700, lineHeight: '68.2px' }}>MEET US</div>
                    </div>
                </div>
            </div>
            
            <div style={{ padding: '0 24px 26px 24px', fontFamily: 'TitilliumWeb-Regular', fontWeight: 300, lineHeight: '24px', color: '#081c4a', fontSize: '16px' }}>
		        Playtech offers varied career opportunities and options to develop. Only a quarter of the company’s employees are developers, others include QA-s, infrastructure&service support specialists, product&project managers, product operations specialists, intergration&migration, technical writers, software analysts&architects, and many more.
		        <br/><br/>Meet some of our greatest talents!
                <br/><br/><br/>
                
                <div style={{ display: 'table' }}>
                    <div style={{ display: 'table-cell', paddingRight: '15px' }}>
				        <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '30px', fontWeight: 700, lineHeight: '30px' }}>1st story - Egert Pani</div>
				        <br/>
				        <iframe width="300" height="169" src="https://www.youtube.com/embed/mtHXwEQ6wZk" frameborder="0" allowfullscreen></iframe>
				        <div style={{ fontFamily: 'TitilliumWeb', color: '#081c4a', fontSize: '16px', fontWeight: 300, lineHeight: '24px', paddingTop: '20px' }}></div>
			        </div>
			        <div style={{ display: 'table-cell', paddingRight: '15px' }}>
				        <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '30px', fontWeight: 700, lineHeight: '30px' }}>2nd story - Jayme Dias</div>
				        <br/>
				        <iframe width="300" height="169" src="https://www.youtube.com/embed/eFq3gvzLWY8" frameborder="0" allowfullscreen></iframe>
				        <div style={{ fontFamily: 'TitilliumWeb', color: '#081c4a', fontSize: '16px', fontWeight: 300, lineHeight: '24px', paddingTop: '20px' }}></div>
			        </div>

			        <div style={{ display: 'table-cell', paddingRight: '15px' }}>
				        <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '30px', fontWeight: 700, lineHeight: '30px' }}>3rd story - Aire Aasoja</div>
				        <br/>
				        <iframe width="300" height="169" src="https://www.youtube.com/embed/Ub2xx7kyZd8" frameborder="0" allowfullscreen></iframe>
				        <div style={{ fontFamily: 'TitilliumWeb', color: '#081c4a', fontSize: '16px', fontWeight: 300, lineHeight: '24px', paddingTop: '20px' }}></div>
			        </div>
		        </div>
		        <p>
                    Work life balance and great team mates are definitely keywords of working at Playtech. Check for example our fun event, one of many, held this spring for our employees’ and their families:
                    <br/><br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QxqbvArtq6U" frameborder="0" allowfullscreen></iframe>
                </p>
            </div>
	
            <br/><br/><br/>

            <Footer />
        </MainWrapper>
    );
  }
}

export default MeetUs;