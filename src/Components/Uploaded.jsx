import React from 'react';
import '../Styles/Styles.css';

const Uploaded = () => {
    return (
        <div id="uploaded">
            <div className="uploader">
                <span className="material-icons md-48">check_circle</span>
                <h2>Uploaded successfully!</h2>

                <div className="dropbox" />
                <div className="output-link">
                    <small>Lorem ipsum dolor sit amet</small>
                </div>
                <button type="button" className="copyBtn">
                    Copy Link
                </button>
            </div>
        </div>
    );
};

export default Uploaded;
