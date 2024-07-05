import React from "react";
import NavBar from "./NavBar/NavBar";
import { Button } from "./Button/Button";
import Card from "./Card/Card";
import image from "./../public/images/bg.png";
import aboutbg from "./../public/images/aboutbg.png";
import man from "./../public/images/man.png";
import sec from "./../public/images/sec.png";
import third from "./../public/images/third.png";
import cattering from "./../public/images/catering.png";
import mask from "./../public/images/mask.png";
import weed from "./../public/images/weed.png";
import party from "./../public/images/party.png";
import women from "./../public/images/women.png";
import black from "./../public/images/black.png";

import sid from "./../public/images/sid.png";
import bigimage from "./../public/images/bigimg.png";




import {
  faCoffee,
  faBowlFood,
  faWineBottle,
  faCakeCandles,
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./ServiceCard/ServiceCard";
import Customer from "./CustomerSay/Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex flex-col justify-center items-center    h-screen"
      >
        {/* <img src="C:\Users\Legion\Downloads\bg.png.pn" alt="Background Image"/> */}
        <div className="text-center">
          <h1 className="text-6xl">Best food for</h1>
          <h1 className="text-6xl">your taste</h1>
          <p className="mt-6">
            Discover delectable cuisine and unforgettable moments{" "}
          </p>
          <p>in our welcoming, culinary haven.</p>
        </div>
        <div className="flex mt-8 space-x-4">
          <Button name="Book A Table" />
          <Button name="Explore Menu" />
        </div>
      </div>
      {/* This Is Another Section */}
      <div>
        <h1 className="text-4xl text-center my-12">Browse Our Menu</h1>
        <div className="flex justify-center space-x-4">
          <Card
            MenuIcon={faCoffee}
            CardName="Breakfast"
            CardDescription="In the new era of technology we look in the future with certainty and pride for our life."
            Span="Explore Menu"
          />
          <Card
            MenuIcon={faBowlFood}
            CardName="Main Dishes"
            CardDescription="In the new era of technology we look in the future with certainty and pride for our life."
            Span="Explore Menu"
          />
          <Card
            MenuIcon={faWineBottle}
            CardName="Drinks"
            CardDescription="In the new era of technology we look in the future with certainty and pride for our life."
            Span="Explore Menu"
          />
          <Card
            MenuIcon={faCakeCandles}
            CardName="Desserts"
            CardDescription="In the new era of technology we look in the future with certainty and pride for our life."
            Span="Explore Menu"
          />
        </div>
      </div>

      <div className="container w-[1600px] h-[680px] bg-[#F9F9F7] mt-20 ">
        <div className="w-[1296px] h-[616px]  ">
          <div
            style={{ backgroundImage: `url(${aboutbg})` }}
            className="w-[599px] h-[566px] ml-[152px] relative rounded-lg "
          >
            <div className="yo div haii!!!!  ">
              <div className="w-[280px] h-[250px] ml-[360px]  bg-[#474747] bottom-0 absolute m-[-50px] rounded-lg">
                <p className="text-white font-bold text-[32] mt-[50px] ml-[50px]">
                  Come and Visit us
                </p>
                <p className="text-[#F9F9F7] text-[24] mt-6 ml-[50px] flex space-x-3">
                  <FontAwesomeIcon className="text-l mt-1" icon={faPhone} />
                  <p>(977) 9800919170</p>
                </p>
                <p className="text-[#F9F9F7] text-[24] mt-6 ml-[50px] flex space-x-3">
                  <FontAwesomeIcon className="text-l mt-1" icon={faEnvelope} />
                  banalish93@gmail.com
                </p>
                <p className="text-[#F9F9F7] text-[24] mt-6 ml-[50px] flex space-x-2 ">
                  <FontAwesomeIcon className="text-l mt-1" icon={faLocation} />
                  Itahari-19, Tarahara
                </p>
              </div>
              <div className="w-[480px] h-[457px]  ml-[650px] absolute bottom-4 ">
                <h1 className="font-bold text-4xl">
                  We Provide Healthy Food For your Family.
                </h1>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  incidunt quae voluptatibus accusamus quia mollitia minus
                  tempora saepe recusandae iure?
                </p>

                <p className="mt-6 text-[#414536]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis expedita nam id! Ab ipsam laboriosam possimus hic
                  voluptate cupiditate error!
                </p>
                <div className="mt-10">
                  <Button name="More About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main w-[1600px] h-[650px] mt-12">
        <div className="Small div w-[1100px] h-[500px] ml-[150px]">
          <div className="language div w-[400px] h-[100px] ml-[20px] mt-4">
            <p className="text-4xl ">
              {" "}
              We Also Offer Uniques Services For our Events
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <ServiceCard
              scimage={cattering}
              name="Caterings"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit here we go."
            />
            <ServiceCard
              scimage={mask}
              name="Birthdays"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit here we go."
            />
            <ServiceCard
              scimage={weed}
              name="Weedings"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit here we go."
            />
            <ServiceCard
              scimage={party}
              name="Events"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit here we go."
            />
          </div>
        </div>
      </div>

      <div className="w-[1600px] h-[600px] bg-[#F9F9F7] flex">
        <div className="w-[550px] h-[550px]  ml-[130px]  ">
          <div className="left  w-[550px]  h-[550px] flex justify-between">
            {/* ya image kesere selected part leuna?? */}
            <div
              style={{ backgroundImage: `url(${man})` }}
              className="bigImage w-[320px] h-[520px]  rounded-lg"
            ></div>
            <div className="mt-[50px]">
              <div
                style={{ backgroundImage: `url(${sec})` }}
                className="smallImage w-[200px] h-[250px]  rounded-lg mr-3 "
              ></div>
              <br></br>
              <div
                style={{ backgroundImage: `url(${third})` }}
                className="smallImage w-[200px] h-[220px]  rounded-lg mr-3 "
              ></div>
            </div>
          </div>
        </div>
        <div className="devilside w-[550px] h-[550px] flex justify-center items-center ">
          <div className="w-[300px] h-[300px] mr-[100px]">
            <div className="w-[300px] h-[100px]">
              <p className="text-4xl">Fastest Food Delivery in City</p>
            </div>
            <div>
              <p className="mt-4 text-[#414536]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                quibusdam.{" "}
              </p>
              <div className="flex space-x-3">
              <div className="h-[30px] w-[30px] flex items-center justify-center mt-3 bg-red-600 rounded-full">
                  <FontAwesomeIcon className="text-[12px] text-white" icon={faPhone} />
                </div>
                <p className="mt-4"> Delivery Within 30 minutes</p>
              </div>
              <div className="flex space-x-3 ">
                <div className="h-[30px] w-[30px] flex items-center justify-center mt-3 bg-red-600 rounded-full">
                  <FontAwesomeIcon className="text-[12px] text-white " icon={faPhone} />
                </div>
                <p className="mt-4"> Best Price for you Mero vaii </p>
              </div>
                 
              <div className="flex space-x-3 ">
                <div className="h-[30px] w-[30px] flex items-center justify-center mt-3 bg-red-600 rounded-full">
                  <FontAwesomeIcon className="text-[12px] text-white " icon={faPhone} />
                </div>
                <p className="mt-4"> Online Service Available </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1600px] h-[500px] ">
        <div className="w-[1100px] h-[400px] ml-[105px]">
          <p className="text-3xl text-center mt-7">Whats Our Costumer Say</p>
          <div className="mt-8 flex space-x-6">
            <Customer
              name='"The Best Resturent"'
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio dolore accusamus doloremque ullam nihil!"
              smimage={women}
              cName="Ashley Medison"
              Address="Los Angeles, CA"
            />
            <Customer
              name='"Simply delicious"'
              smimage={black}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio dolore accusamus doloremque ullam nihil!"
              cName="Anish Puri"
              Address="Tarahara, SD"
            />
            <Customer
              name='"One of a Kind Resturent"'
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio dolore accusamus doloremque ullam nihil!"
              smimage={sid}
              cName="Siddarth Dev"
              Address="Kathmandu"
            />
          </div>
        </div>
      </div>



      <div className="w-[1600px] h-[700px] bg-[#F9F9F7]">
      <div className="w-[1100px] h-[600px] ml-[100px]">
        <div className="flex space-x-[650px]">
          <h1 className="text-4xl">Our Blog & Articles</h1>
          <Button className=" ml-[50px]" name='Read All Articles'/>

        </div>
        <div className=" flex space-x-8">
          <div className="BigCard h-[515px] w-[500px] mt-8">
            <div className="h-[300px] w-[500px]">
              <img src={bigimage} alt="" />
              <p className="ml-6 text-[#737865] mt-3 "> january 3, 2023</p>
              <p className="mt-3 ml-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti laudantium unde, est nam doloribus!</p>
              <p className="mt-5 rounded-lg ml-6 text-[#414536]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla libero voluptates, temporibus molestiae veritatis voluptate quidem. Natus deserunt corrupti tenetur.</p>
              
            </div>
            

          </div>
          <div className="flex space-x-6">
            <div >
            <div className="smallcards h-[240px] w-[250px] rounded-lg  mt-8">
            <div className="h-[70px] w-[250px]">
              <img src={cattering} alt="" />
              
            </div>

             
            </div>
            <div className="smallcards rounded-lg h-[240px] w-[250px]rounded-lg mt-8">
            <div className="h-[70px] w-[250px]">
              <img  src={cattering} alt="" />
              
            </div>

             
            </div>
            </div>
            <div>
            <div className="smallcards h-[240px] w-[250px] rounded-lg mt-8">
            <div className="h-[70px] w-[250px] ">
              <img src={cattering}  alt="" />
              
            </div>

             
            </div>
            <div className="smallcards h-[240px] w-[250px] rounded-lg mt-8">
            <div className="h-[70px] w-[250px] bg-pink-500">
              <img  src={cattering} alt="" />
              
            </div>

             
            </div>
            </div>

          </div>
        </div>

        </div>

      </div>

      <>
      <Footer/>
      </>
    </>
  );
};

export default Home;
