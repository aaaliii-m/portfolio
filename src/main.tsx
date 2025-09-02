import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import App from './App.tsx'
import Projects from "./pages/Projects.tsx";

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
