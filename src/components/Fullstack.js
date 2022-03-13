import React from 'react';

function Fullstack(props) {
  return (
    <div className="fullstack">
      <div className="fullstack__container">
        <div className="fullstack__container-text">
          Fullstack Developer, <br></br> specialized in Front End and Back End
        </div>
        <div className="fullstack__container-cards">
          <div className="fullstack__container-card-front">
            <svg
              className="fullstack__svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 8.12505C4.5 7.34266 4.81607 6.59232 5.37868 6.03908C5.94129 5.48585 6.70435 5.17505 7.5 5.17505H22.5C23.2956 5.17505 24.0587 5.48585 24.6213 6.03908C25.1839 6.59232 25.5 7.34266 25.5 8.12505V19.925C25.5 20.7074 25.1839 21.4578 24.6213 22.011C24.0587 22.5642 23.2956 22.875 22.5 22.875H19.17L19.3545 23.5963L20.5605 24.7822C20.7702 24.9885 20.913 25.2513 20.9709 25.5374C21.0287 25.8235 20.999 26.12 20.8855 26.3895C20.772 26.6589 20.5798 26.8893 20.3332 27.0514C20.0866 27.2134 19.7966 27.3 19.5 27.3H10.5C10.2034 27.3 9.91343 27.2134 9.66681 27.0514C9.4202 26.8893 9.22799 26.6589 9.11448 26.3895C9.00098 26.12 8.97127 25.8235 9.02912 25.5374C9.08698 25.2513 9.22979 24.9885 9.4395 24.7822L10.6455 23.5963L10.83 22.875H7.5C6.70435 22.875 5.94129 22.5642 5.37868 22.011C4.81607 21.4578 4.5 20.7074 4.5 19.925V8.12505ZM13.1565 18.45H7.5V8.12505H22.5V18.45H13.1565Z"
                fill="white"
              />
            </svg>

            <p className="fullstack__container-card-text">
              Front End <br></br> Developer
            </p>
          </div>
          <div className="fullstack__container-card">
            <svg
              className="fullstack__svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 8.12505C4.5 7.34266 4.81607 6.59232 5.37868 6.03908C5.94129 5.48585 6.70435 5.17505 7.5 5.17505H22.5C23.2956 5.17505 24.0587 5.48585 24.6213 6.03908C25.1839 6.59232 25.5 7.34266 25.5 8.12505V19.925C25.5 20.7074 25.1839 21.4578 24.6213 22.011C24.0587 22.5642 23.2956 22.875 22.5 22.875H19.17L19.3545 23.5963L20.5605 24.7822C20.7702 24.9885 20.913 25.2513 20.9709 25.5374C21.0287 25.8235 20.999 26.12 20.8855 26.3895C20.772 26.6589 20.5798 26.8893 20.3332 27.0514C20.0866 27.2134 19.7966 27.3 19.5 27.3H10.5C10.2034 27.3 9.91343 27.2134 9.66681 27.0514C9.4202 26.8893 9.22799 26.6589 9.11448 26.3895C9.00098 26.12 8.97127 25.8235 9.02912 25.5374C9.08698 25.2513 9.22979 24.9885 9.4395 24.7822L10.6455 23.5963L10.83 22.875H7.5C6.70435 22.875 5.94129 22.5642 5.37868 22.011C4.81607 21.4578 4.5 20.7074 4.5 19.925V8.12505ZM13.1565 18.45H7.5V8.12505H22.5V18.45H13.1565Z"
                fill="black"
              />
            </svg>

            <p className="fullstack__container-card-text">
              Back End <br></br> Developer
            </p>
          </div>
          <div className="fullstack__container-card">
            <svg
              className="fullstack__svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.105 4.42873C22.7563 3.61871 22.1425 2.45837 21.06 2.45837H12.665C12.1963 2.45837 11.7625 2.69437 11.5288 3.07542L5.17629 13.4692C4.67504 14.2879 5.30504 15.3093 6.31129 15.3093H10.5975L6.56004 25.2225C5.97629 26.4763 7.55379 27.6231 8.61379 26.716L25 11.4694H16.4388L22.105 4.42873V4.42873Z"
                stroke="#222A36"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="fullstack__container-card-text">
              React Native <br></br> Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fullstack;
