
import "./App.css";
import { NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <NotificationContainer/>
    </>
  );
}

export default App;
