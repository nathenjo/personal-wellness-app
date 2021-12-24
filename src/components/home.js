import React, { useState, useEffect } from 'react';



export default function Home(props) {

    const {setHistoryState} = props;


       return(
         <div className="home">
            <div className='home__content'>
                <div className='home__content__left-column'>
                    <img src='https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hha3JhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                </div>
                <div className='home__content__right-column'>
                    <div className='top-row'>
                        Personal Wellness App
                    </div>
                    <div className='middle-row'>
                        <div onClick={() => setHistoryState('/login')} className='middle-row__item'><i className="fas fa-user-tie"></i>Returning User? Welcome Back!</div>
                        <div className='middle-row__item'><i className="fas fa-user-plus"></i>New User? A Most Welcome To You!</div>
                    </div>
                    <div className='bottom-row'>
                        <div className='bottom-row__item'>Keep track of all your wellbeing</div>
                        <div className='bottom-row__item'>
                            <i className="fas fa-list-ol"></i>
                            Productivity
                        </div>
                        <div className='bottom-row__item'>
                            <i className="fas fa-piggy-bank"></i>
                            Financial
                        </div>
                        <div className='bottom-row__item'>
                            <i className="fas fa-dove"></i>
                            Spiritual
                        </div>
                        <div className='bottom-row__item'>
                            <i className="fas fa-dumbbell"></i>
                            Physical
                        </div>
                        <div className='bottom-row__item'>
                            <i className="fas fa-users"></i>    
                            Social
                        </div>
                    </div>
                </div>
            </div>
         </div>
       );
}