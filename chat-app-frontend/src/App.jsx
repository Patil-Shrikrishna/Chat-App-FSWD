import "./App.css";
import { AppRoutes } from "./AppRoutes";
import { useUserDetails } from "./authentication";
import { Loader } from "./Loader";

function App() {
  const { isLoading, user } = useUserDetails();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <AppRoutes user={user}></AppRoutes>
    </div>
  );
}

export default App;
