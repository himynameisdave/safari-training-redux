import React, { Fragment } from 'react';
import Board from './containers/board.jsx';
import AddColumnButton from './containers/add-column-button.jsx';
import Title from './components/title.jsx';


const App = () => (
    <Fragment>
        <Title />
        <div className="app-column">
            <Board />
            <AddColumnButton
                className="board__add-column-button"
                text="Add Column"
            />
        </div>
    </Fragment>
);

export default App;
