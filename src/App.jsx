import AppRoutes from "./components/Routes/Routes";
import { useState } from "react";
import { UserContext } from "./components/Context/Context";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";



const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("user") || null
  );


  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth", { replace: false });
  };
  return (
    <UserContext.Provider value={{ user, handleLogout }}>
      <Provider store={store}>
        <AppRoutes user={user} setUser={setUser} />
      </Provider>
    </UserContext.Provider >
  );
};

export default App;
