import React from 'react'
import "./main.css";
import mine from "../../assets/Mine.jpg";
import Chart from "../charts/Chart";
const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={mine} alt="hello"/>
                    <div className="main_greeting">
                        <h1>Hello Miner</h1>
                        <p>Welcome to your dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of Miners
                            </p>
                            <span className="font-bold text-title">
                                    1035
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Times of Mining 
                            </p>
                            <span className="font-bold text-title">
                                    4356
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of videos watched
                            </p>
                            <span className="font-bold text-title">
                                    341
                            </span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">
                                Number of likes
                            </p>
                            <span className="font-bold text-title">
                                    210
                            </span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily charts</h1>
                                <p>Los Angeles</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>


                    <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Los Angeles</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                    
                    <div className="charts__right__cards">
                    <div className="card1">
                        <h1>income</h1>
                        <p>$5,200</p>
                    </div>

                    <div className="card2">
                        <h1>income</h1>
                        <p>$5,200</p>
                    </div>

                    <div className="card3">
                        <h1>income</h1>
                        <p>$5,200</p>
                    </div>

                    <div className="card4">
                        <h1>income</h1>
                        <p>$5,200</p>
                    </div>
                </div>
                </div>

                
                    
                </div>


                
                

            </div>
        </main>
    )
}

export default Main
