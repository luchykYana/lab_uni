import {Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Layout} from './components';
import {GamePage, HomePage, NotFoundPage} from './pages';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>

                <Route path={'game'} element={<GamePage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}
