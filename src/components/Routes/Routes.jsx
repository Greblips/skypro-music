import { Routes, Route } from "react-router-dom";
import { Main } from "../../pages/main/main";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Favorits from "../../pages/favorites/favorits";
import { Category } from "../../pages/category/category";
import { AuthPage } from "../../pages/auth/auth"
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = ({ setUser, user }) => {
    return (
        <Routes>
            <Route
                path="/auth"
                element={<AuthPage setUser={setUser} />}
            />

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