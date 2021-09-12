import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Box from '@material-ui/core/Box';
import Profile from "./components/Profile";

function App() {
    return (
            <div className="App">
                <Box className="box">
                    <div className="container-lg"><Navbar/></div>
                    <Profile/>
                </Box>

            </div>
    );
}

export default App;
