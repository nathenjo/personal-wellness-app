import React, { useState } from 'react';
import ImageLink from '../helpers/imageLink';

export default function Account(props) {

    const {user, setHistoryState} = props;
    const {name} = user;

       return(
         <div className='account'>
            <div className='account__title'>{`Welcome ${name}`}</div>
            <div className='account__body'>
                <ImageLink
                    className="account__body__productivity"
                    setHistoryState={setHistoryState}
                    image="https://image.shutterstock.com/image-vector/productivity-gear-cog-growing-graph-260nw-1166779504.jpg"
                    imageAlt="Productivity Image"
                    path="account/productivity"
                />
                <ImageLink
                    className="account__body__finances"
                    setHistoryState={setHistoryState}
                    image="https://image.shutterstock.com/image-vector/productivity-gear-cog-growing-graph-260nw-1166779504.jpg"
                    imageAlt="Productivity Image"
                    path="account/productivity"
                />
                <ImageLink
                    className="account__body__spiritual"
                    setHistoryState={setHistoryState}
                    image="https://image.shutterstock.com/image-vector/productivity-gear-cog-growing-graph-260nw-1166779504.jpg"
                    imageAlt="Productivity Image"
                    path="account/productivity"
                />
                <ImageLink
                    className="account__body__physical"
                    setHistoryState={setHistoryState}
                    image="https://image.shutterstock.com/image-vector/productivity-gear-cog-growing-graph-260nw-1166779504.jpg"
                    imageAlt="Productivity Image"
                    path="account/productivity"
                />
                <ImageLink
                    className="account__body__social"
                    setHistoryState={setHistoryState}
                    image="https://image.shutterstock.com/image-vector/productivity-gear-cog-growing-graph-260nw-1166779504.jpg"
                    imageAlt="Productivity Image"
                    path="account/productivity"
                />
            </div>
         </div>
       );
}