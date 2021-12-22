import React from 'react';

export default function Home(props) {
       return(
         <div className="home">
            <div className='home__left-column'>
                <img src='https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hha3JhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='home__right-column'>
                <div className='home__right-column__top-row'>
                    Personal Wellness App
                </div>
                <div className='home__right-column__middle-row'>
                    <div className='home__right-column__middle-row__item'><i class="fas fa-user-tie"></i>Returning User? Welcome Back!</div>
                    <div className='home__right-column__middle-row__item'><i class="fas fa-user-tie"></i><i class="fas fa-plus"></i>New User? A Most Welcome To You!</div>
                </div>
                <div className='home__right-column__bottom-row'>
                    <div className='home__right-column__bottom-row__item'>Keep track of all your wellbeing</div>
                    <div className='home__right-column__bottom-row__item'>
                        <i class="fas fa-list-ol"></i>
                        Productivity
                    </div>
                    <div className='home__right-column__bottom-row__item'>
                        <i class="fas fa-piggy-bank"></i>
                        Financial
                    </div>
                    <div className='home__right-column__bottom-row__item'>
                        <i class="fas fa-dove"></i>
                        Spiritual
                    </div>
                    <div className='home__right-column__bottom-row__item'>
                        <i class="fas fa-dumbbell"></i>
                        Physical
                    </div>
                    <div className='home__right-column__bottom-row__item'>
                        <i class="fas fa-users"></i>    
                        Social
                    </div>
                </div>
            </div>
         </div>
       );
}