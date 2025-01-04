import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentTable from './components/StudentTable';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import ViewDetails from './components/ViewDetails';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentTable />} />
                <Route path="/student/create" element={<CreateStudent />} />
                <Route path="/student/edit/:studentid" element={<EditStudent />} />
                <Route path="/student/view/:studentid" element={<ViewDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
