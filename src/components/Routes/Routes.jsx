import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Favorits from "../../pages/favorites/favorits";
import { Category } from "../../pages/category/category";
import { SignIn } from "../../pages/login/signIn";
import { SignUp } from "../../pages/login/signUp";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = ({ onAuthButtonClick, user }) => {
    return (
        <Routes>
            <Route
                path="/signIn"
                element={<SignIn onAuthButtonClick={onAuthButtonClick} />}
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorits />} />
                <Route path="/category/:id" element={<Category />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;