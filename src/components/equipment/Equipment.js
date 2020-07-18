import React from 'react';
import LoggedInNav from './../navigation/LoggedInNav';

export default () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
        <div className="dashboard d-flex">
        <LoggedInNav />
        <div className="main-content equipment">
            <div className="row px-3 local-info py-4">
                <h4 className="my-0 mr-4">dashboard</h4> <b>Date: </b>{date}/{month<10?`0${month}`:`${month}`}/{year}
            </div> 
            <h1>equipment</h1>
        </div>
    </div>
    )
}