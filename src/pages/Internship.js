import React, { Component } from 'react'

import MainWrapper from '../components/MainWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Internship extends Component {
  render() {
    return (
        <MainWrapper>
            <Header />
            
            <div style={{ padding: '68px 24px 26px 24px' }}>
                <div style={{ display: 'table', width: '100%' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingTop: '2px' }}>
			            <div style={{ fontFamily: 'TitilliumWeb-Bold', color: '#081c4a', fontSize: '36px', fontWeight: 700, lineHeight: '68.2px' }}>INTERNSHIP</div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '0 24px 26px 24px', fontFamily: 'TitilliumWeb-Regular', fontWeight: 300, lineHeight: '24px', color: '#081c4a', fontSize: '16px' }}>
                <div style={{ display: 'table', textAlign: 'left' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'top', paddingRight: '40px' }}>
                        {/*<!--<b style="font-family: TitilliumWeb-Bold;">We are doing it again! This year's summer internship program will take place from June 12th to August 25th.</b>
                        <br><br>
                        More information about the positions, how to apply and deadlines will be revealed during February 2017!-->*/}
                        Playtech Estonia offers dfferent internship opportunities. The most valued and varied is the yearly Summer Internship Program where we take around 20 new interns to our teams for two summer months, both in Tartu and Tallinn. 
                        <br/><br/>Information about the Playtech Summer Internship Program is usually announced in March every year on website <a href="http://www.playtech.ee/" target="_blank">www.playtech.ee</a>. This year the inters have started their journey with us, so stay tuned for the next year’s info!
                        <br/><br/>Some other internship positions may be available throughout the year. Please contact
                        <a href="mailto:career@playtech.com">career@playtech.com</a> for more info.
                    </div>
                    <div style={{ display: 'table-cell', textAlign: 'right' }}>
                        <iframe width="475" height="267" src="https://www.youtube.com/embed/9wsn7kNuoMg" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
	        </div>
	        <br/><br/><br/>

            <Footer />
        </MainWrapper>
    );
  }
}

export default Internship;