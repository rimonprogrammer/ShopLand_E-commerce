import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';

function AboutUS() {
  document.title = 'ShopLand || About us'
  return (
    <>
        <Navbar/>
        <div className="container mt-1">
          <h4>
            <Link to='/'>Home/</Link>
            About-us
          </h4>
              {
                 About_us.map((info, index) =>{
                    return(
                        <div key={index}>
                            <h5 className='fw-bold'>{info.title}</h5>
                            <p>{info.description}</p>
                        </div>
                    )
                 })
              }

              <h4 className='mt-5'>Contact with us</h4>
              <table>
                  <thead>
                      <td>Phone/WhatsApp:</td>
                      <td>Phone:</td>
                      <td>Email:</td>
                      <td>Social</td>
                  </thead>
                  <tbody>
                      <td>01313687347</td>
                      <td>01402860617</td>
                      <td>rahitulislam213@gmail.com</td>
                      <td>
                      <ul className='footer-social d-flex justify-content-center p-0 m-0'>
                        <li>
                            <a href="https://www.linkedin.com/in/nobenur-islam-rimon/" target='_blank'>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/programmerrimon" target='_blank'>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/rimonprogrammer/" target='_blank'>
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/rimonprogrammer//" target='_blank'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                      </td>
                  </tbody>
              </table>
        </div>
        <Footer/>
    </>
  )
}

export default AboutUS;

const About_us = [
    {
      title : "About ShopLand",
      description : "ShopLand has been founded on 1 March 2007. From then to now, ShopLand has won the heart of many people and now is a country-wide renowned brand. That has been possible due to the hard work ShopLand has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought ShopLand to the top choice for E-Commerce Sites in Bangladesh and is recognized as the largest Computer and Tech retailer. ShopLand has over 700 employees and is growing more and more, working diligently to fulfill the Main Criteria of ShopLand’s Motto or Vision. ShopLand is located in 6 Central territories in Dhaka, Gazipur, Chattogram, Khulna, Rajshahi, and Rangpur. ShopLand has a total of 17 Physical outlets all over the country; selling genuine Tech products. Among them, 9 outlets are in Dhaka as it’s the capital city. ShopLand also has two branches in Chittagong; the commercial capital of Bangladesh. There is one Branch in Gazipur, one in Khulna, one in Rajshahi, and one Branch in Rangpur. Apart from the Physical Branches, We also have our successful E-Commerce website."
    },
    {
      title : "ISO Certified Quality Management System",
      description : "ShopLand has always managed the standards for Quality management. In 2022, ShopLand Ltd. was certified with the well-known ISO 9001:2015 certification. This marked a groundbreaking achievement for us. As an ISO 9001:2015 certified organization; we consistently maintain all sorts of regulatory requirements to provide the best products and services to meet any customer requirement."
    },
    {
      title : "The Main Goal and Aim",
      description : "We are ShopLand, and we are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires. We delight in seeing our customers happy and satisfied with our resiliency in providing them with their products. Our complete focus is on the customers. We keep tabs and records on what our customers want, and we try our best to bring that to them. We are already providing our customers with a delivery system so that they can order online and receive their products from their area. They do not have to travel long distances to get their desired product."
    },
    {
      title : "Services Being Provided",
      description : "We are a Tech-based product seller. We provide our customers with the best quality products at the most reasonable price. We have varieties of products that our customers can choose from. The product range starts from Desktop PC, Laptop, Gaming PC, Mobile Phones, UPS, Tablet PC, Graphics Tablet, Monitors, Office Equipment, Cameras, Security Cameras, Televisions, and many other products. Each of our products is checked and reviewed before it is sold to our Loyal Customers. You are our driving force to better ourselves in all aspects of the service-providing sector. We strive to become a Perfectionist Company that delivers everything, word for word."
    },
    {
      title : "Top-Selling Brands",
      description : "We have many top-selling brands that gained our attention to focus on them. These brands are Antec, Asrock, Bitfenix, Cryorig, Deli, EKWB, ESET, Galax, Gamdias, GEiL, Infocus, KWG, Lian Li, MaxGreen, Noctua, Razer, RnM, Team, XFX, Zyxel to name a few. As being top-selling and demanding brands, you will be able to get the latest updated products and service facilities more. You will also get better after-sales service from us. If any trouble occurs with these brand products, we will be able to solve it very easily. After fixing the problem you will be able to get the product in pristine condition just like if it is still new. These Brand Products are very high-quality products that provide the best service to the customers. We ensure that you are getting the best quality product. You can freely buy top-selling Brand products without having to think twice about what you are buying. We also provide our customers with the best pricing for the products compared to anywhere in Bangladesh. You can stay easy and relax knowing that one of our goals is to provide the customer with the best product at the most reasonable pricing. We ensure that our customers are satisfied with our product and the pricing."
    },
    {
      title : "Dealing with Corporate Sector",
      description : "We have also been working with Corporate Customers from the beginning of ShopLand. We are working with many well-known offices in Bangladesh and have a very good relationship with them. We have worked with many Corporate offices like the bank, hospitals, Government organizations, Multi-National Companies, and Telecom Companies, to name a few. We provide them with all the Tech product-related support and facilities for their business. The Tech facilities that we provide are all IT-related hardware products like network-based products, servers and routers, laptops, desktops, printers, and other Tech-related hardware accessories."
    },
    {
      title : "Customer Satisfaction",
      description : "We have been in the market for a long time, and we have come to know what the customers want and desire. We have made changes around our customers so that we will be able to fulfill the desires of each of our customers. We want to improve more and more to be able to give everyone their desired or dreamed products. We are providing online buying opportunities for our customers, and providing delivery service for all of our products all over Bangladesh. We provide the best after sells customer service to our customers to make them feel that we do care about their possession and provide them with the best solutions for their problems."
    },
    {
      title : "The Brand That Cares For You",
      description : "This is ShopLand! A Brand that is Truly concerned about its customers and loyally provides all the needs of the customers. Customers come first to this Company. Our customers will receive the best service and deals that ShopLand offers. To us, our customer’s wants and needs take the top priority. We always have and will aim to provide the perfect result to our loyal customers. And our after-sales service will ensure that no one of our customers will come to us with the same issue twice. Come and Experience the service, product, and facilities ShopLand offers."
    }
]