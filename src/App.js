import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ScrollToTop } from "./components/CommonUtil";
import MainPage from "./pages/MainPage";
import PicturePage from "./pages/PicturePage";
import SelectFramePage from "./pages/SelectFramePage";
import PictureCompletedPage from "./pages/PictureCompletedPage";
import SelectPhotoPage from "./pages/SelectPhotoPage";
import SuccessPage from "./pages/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";
import PrizeDrawPage from "./pages/PrizeDrawPage";
import DrawResultPage from "./pages/DrawResultPage";
import DownloadPage from "./pages/DownloadPage";
import Example from "./pages/Example";


const AppRoutes = () => {
    const routes = [
        {path: '/', element: <MainPage/>},
        {path: '/picture',element: <PicturePage/>},
        {path: '/picture/completed', element: <PictureCompletedPage/>},
        {path: '/picture/select-frame', element: <SelectFramePage/>},
        {path: '/picture/select-photo', element: <SelectPhotoPage/>},
        {path: '/picture/success', element: <SuccessPage/>},
        {path: '/test', element: <TestPage/>},
        {path: '/picture/draw', element: <PrizeDrawPage />},
        {path: "/picture/draw-result", element: <DrawResultPage />},
        {path: '/example', element: <Example/>},
        {path: '/picture/qr', element: <DownloadPage/>},
        {path: '*', element: <NotFoundPage/>}
    ];

    return useRoutes(routes);
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppRoutes />
        </Router>
    );
}

export default App;