import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const App = (): JSX.Element => (
    <Fragment>
        <h1 className="title">⚡ Webpack React Boilerplate ⚡</h1>
    </Fragment>
);

export default (): void => {
    ReactDOM.render(<App />, document.getElementById('root'));
};
