import React from 'react';
import dropboxBg from '../Assets/image.svg';
import '../Styles/Styles.css';

const Upload = () => {
    return (
        <div id="upload">
            <div className="uploader">
                <h1>Upload your image</h1>
                <h4>File should be Jpeg, Png,....</h4>
                <div className="dropbox">
                    <img
                        src={dropboxBg}
                        alt="Sunset behind the mountains where clouds in the sky"
                    />
                    <br />
                    <h3>Drag & Drop your image here</h3>
                </div>
                <h2>Or</h2>
                <button type="button" className="uploadBtn">
                    Choose a file
                </button>
            </div>
        </div>
    );
};

export default Upload;
