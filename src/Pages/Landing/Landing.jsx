import gmBox from "../Images/GmBox.png";
import userVisuals from "../Images/userVisual.png";
import forum from "../Images/forum.png";
import LandingBgImage from "../Images/LandingBg.png";
import rocketImg from "../Images/rocket.png";
import sitting from "../Images/Sitting.png";
import thirdBgImage from "../Images/Features.png";
import OpenSqL from "../Images/openbrowser.png";
import groupies from "../Images/cuate.png";
import womanSitting from "../Images/Frame.png";
import joinBtn from "../Images/Join-button.png";
import manWalk from "../Images/Frame1.png";
import circle1 from "../Images/Circle_2.png";
import circle2 from "../Images/Cirlcles_2.png";
import circle3 from "../Images/Circles_1.png";
import circle4 from "../Images/Circle_1.png";
import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="sections">
      <div
        className="hero"
        style={{ backgroundImage: `url(${LandingBgImage})` }}
      >
        <div className="writeUps hero-text">
          <h1>
            Stay
            <br />
            linqed
          </h1>

          <p>
            ...and spend quality time with friends, family and colleagues from
            different ethnicities, communities and workgroups all in one place.
          </p>

          <Link to="#">
            <button>Open Squarelinq in your browser</button>
          </Link>
        </div>

        <div className="images hero-images">
          <div className="left-image">
            <img src={userVisuals} alt="Visuals" />
          </div>

          <div className="vertical-images">
            <img src={gmBox} alt="GoodMorning" />
            <img src={forum} alt="Forum" />
          </div>
        </div>
      </div>

      <div className="second-container">
        <img src={rocketImg} alt="Rocket" className="rocketImg" />
        <h2>Express yourself freely with private messaging and calling, stay linked to close ones no matter where they are</h2>
        <img src={sitting} alt="Sitting" className="sittingImg" />
      </div>

      <div
        className="third-container"
        style={{ backgroundImage: `url(${thirdBgImage})` }}
      ></div>
      <div className="fourth-container">
        <div className="FC-text">
         <h1>Be ready to discover yourself in the moment</h1>
         <br />
         <p>
          Get instantly connected to your friends and family, express your creativity, expand your network and discover new content on the fly
         </p>
       </div> 
       <div className="FC-groupies">
          <Link to="#">
            <img src={OpenSqL} alt="OpenBrowserBtn" className="OpenBtn" />
          </Link>
          <img src={groupies} alt="Groupies" className="group" />
        </div>
      </div>
      <div className="last-container">
        <div className="img">
          <img src={circle1} alt="" className="circle1" />
          <img src={circle2} alt="" className="circle2" />
          <img src={circle3} alt="" className="circle3" />
          <img src={circle4} alt="" className="circle4" />
        </div>
        <div className="subLast">
          <div className="joinWaitlist">
            <h1>
              Join the waitlist
            </h1>
            <br />
            <p>
              Be one of the very first people to test at new features launches and products
            </p>
            <img src={womanSitting} alt="" className="womansit" />
            <form action="post">
              <input type="text" placeholder="Enter your email..." />
              <img src={joinBtn} alt="" className="joinBtn" />
            </form>
          </div>
          <div className="contactUs-container">
            <h2>Contact Us
            </h2>
            <br />
              <p>
                Feel free to reach out to us concerning any issue you might have
              </p>

            <img src={manWalk} alt="" className="manWalk" />
            <form action="post">
              <input type="text" placeholder='Enter your fullname...'/>
              <input type="email" placeholder='Enter your Email...'/>
              <input type="text" placeholder='Enter the subject for contacting us' />
              <input type="text" placeholder='Type Something...' className='Textarea' />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
