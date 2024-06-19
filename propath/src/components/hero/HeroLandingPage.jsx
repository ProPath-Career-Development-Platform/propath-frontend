import React from 'react';
import bgimg from '/heroLanding.jpg';
import './Hero.css';
import { FaBriefcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

function HeroLandingPage() {
  return (
    <div>
        <div className="hero" style={{backgroundImage: `url(${bgimg})`, minHeight: '100vh'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-left text-neutral-content justify-start mb-64">
                <div className='w-7/12'>
                    <h1 className="mb-5 text-5xl font-semibold text-white">Your Next Career Move Starts Here.</h1>
                    <p className="mb-5 text-white text-xl">Join ProPath for personalized career matches that connect you with opportunities aligned to your skills and ambitions, ensuring a fulfilling professional journey.</p>
                    <button className="btn btn-primary bg-primary border-primary text-white mt-5">Get Started</button>
                </div>
            </div>
            <div className='card-container mt-56'>
              <div className='cards'>
                <div className='flex items-center justify-center w-16 h-16 border-2 border-white rounded-full mr-4'>
                  <FaBriefcase className='text-white text-4xl'/>
                </div>
                <div>
                  <h1 className='text-3xl text-white font-bold'>7,542</h1>
                  <p className='text-[#d1cfcf] font-light'>Live Jobs</p>
                </div>
              </div>
              <div className='cards'>
                <div className='flex items-center justify-center w-16 h-16 border-2 border-white rounded-full mr-4'>
                  <FaBuilding className='text-white text-4xl'/>
                </div>
                <div>
                  <h1 className='text-3xl text-white font-bold'>9,452</h1>
                  <p className='text-[#d1cfcf] font-light'>Companies</p>
                </div>
              </div>
              <div className='cards'>
                <div className='flex items-center justify-center w-16 h-16 border-2 border-white rounded-full mr-4'>
                  <FaUserAlt className='text-white text-4xl'/>
                </div>
                <div>
                  <h1 className='text-3xl text-white font-bold'>29,452</h1>
                  <p className='text-[#d1cfcf] font-light'>Candidates</p>
                </div>
              </div>
            </div>
            <div className='bg-transparent flex justify-center rounded-lg p-4' style={{marginTop: '32rem'}}>
              <label className="input input-bordered flex items-center gap-2 w-72">
                <FaBriefcase className='opacity-70'/>
                <input type="text" className="grow" placeholder="Enter Job Title" />
              </label>
              <label className="input input-bordered flex items-center gap-2 ml-3 w-72">
                <FaLocationDot className='opacity-70'/>
                <input type="text" className="grow" placeholder="Enter Location" />
              </label>
              <button className="btn btn-primary ml-3 bg-primary border-primary text-white">Search</button>
            </div>
        </div>
    </div>
  )
}

export default HeroLandingPage