import React from "react";
import "../css/mainPage.css"
import "../css/style.css"

/**
 * Not Found 페이지
 */
const NotFoundPage = () => {

    return (
      <>
        <div className="flex flex-column justify-center items-center position-relative width-vw-100 height-vh-100 text-center bg-FFF275">
          <div className="font-size-64px weight-800 margin-bottom-40px">
            404 Not Found
          </div>
        </div>
      </>
    );
};

export default NotFoundPage;