import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import HomePreview from '../HomePreview';
import './HomePreviewClicker.css';

export default ({ home }) => {
    let newUrl = 'homes/' + home['_id']
    return (
        <Link to={newUrl} style={{ textDecoration: 'none' }}>
            <HomePreview home={home} />
        </Link>

    )



}