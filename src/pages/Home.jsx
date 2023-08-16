import React, {useEffect}  from 'react'
import GridSection from '../components/GridSection'
import AboutFlow from '../components/AboutFlow'
import Services from '../components/Services'
import CustomerReviews from '../components/CustomersReview'
import Hero from '../components/Hero';
import AboutCon from '../components/AboutCon';
import GetInTouch from '../components/GetInTouch'

const Home = () => {
  useEffect(() => {
    const targetDiv = document.getElementById('targetDiv');
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });

    }
  }, []);
  return (
 
    <div id="targetDiv">
      <Hero 
       header="ShipSmartly Logistics & Tracking Platform!"
       paragraph="Our mission is to provide secure and efficient shipping solutions for confidential packages across international borders."
       buttonText="Track"/>
       <GridSection />
       <AboutFlow />
       <Services />
       <CustomerReviews />
       <AboutCon />
<GetInTouch />
 

    </div>
  )
}

export default Home
