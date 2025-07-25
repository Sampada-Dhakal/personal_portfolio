import React from 'react'
import './Home.css'
import profileImg from "../../assets/photo.jpg";

const Home = () => {
    return (
        <div>
            <section className="home">
            <div className="home-content">
                <h1>Hi, i am Sampada Dhakal</h1>
                <h2>Frontend Developer and React Learner</h2>
                <p>
                    I'm passionate about building responsive and user-friendly websites.
                    Currently learning React and creating projects to sharpen my skills.
                    Welcome to my portfolio.
                </p>
                <button className="home-btn">Download CV</button>
            </div>
            <div className = "home-img">
                <img src={profileImg} alt="Sampada Dhakal" />
            </div>
            </section>

        </div>
    );
};

export default Home 