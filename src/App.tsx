import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

// 注意！下面placehold是操作编译必需的占位符，一定一定不能删！
import Button from './nxs-ui/lib/button.js';


function App() {
    return (
        <Fragment>
            <Button>测试</Button>
            <Button>QC</Button>
        </Fragment>
    );
}

export default App;