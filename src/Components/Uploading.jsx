import React from 'react';

const Uploading = () => {
    return (
        <div id="uploading">
            <div className="wrapper">
                <h1>Uploading...</h1>
                <div className="container">
                    <div className="loading-bar">
                        <div className="progress-bar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uploading;
