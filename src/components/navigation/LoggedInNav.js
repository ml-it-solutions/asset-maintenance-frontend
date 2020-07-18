import React from 'react';

export default () => {
    return (
        <div className="menu cl-blue">
            <div href="#" className="d-block username p-4">
                Sydney Mlambo
            </div>
            <a href="/dashboard" className="d-block p-4 menu-item">
                Dashboard
            </a>
            <a href="/equipment" className="d-block p-4 menu-item">
                Equipment
            </a>
            <a href="#" className="d-block p-4 menu-item">
                Drivers
            </a>
            <a href="#" className="d-block p-4 menu-item">
                Work Orders
            </a>
            <a href="#" className="d-block p-4 menu-item">
                Inspection
            </a>
            <a href="#" className="d-block p-4 menu-item">
                Maintenance History
            </a>
            <a href="#" className="d-block p-4 menu-item">
                General Expense History
            </a>
                
        </div>
    )
}