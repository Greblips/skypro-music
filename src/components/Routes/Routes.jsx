import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;