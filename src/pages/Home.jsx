import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GridSection from '../components/GridSection'
import AboutFlow from '../components/AboutFlow'
import Services from '../components/Services'
import CustomerReviews from '../components/CustomersReview'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero 
       header="ShipSmartly Logistics & Tracking Platform!"
       paragraph="Our mission is to provide secure and efficient shipping solutions for confidential packages across international borders."
       buttonText="Track"/>
       <GridSection />
       <AboutFlow />
       <Services />
       <CustomerReviews />
       <GetInTouch />
       <Footer />
    </div>
  )
}

export default Home
