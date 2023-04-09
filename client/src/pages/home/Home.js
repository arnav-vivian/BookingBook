import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyLIst/propertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturesProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/footer";


const Home = () => {
    return (
       <div > 
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
            </div>
            <h1 className="homeTitle">Browse by property type</h1> 
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
       </div>

    );
};
export default Home;