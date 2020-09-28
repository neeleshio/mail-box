import React from 'react'
import { Card } from 'antd';

const Cards = (props) => {
    return (
        <div className="site-card-border-less-wrapper" >
            <Card title={props.subject} bordered={false} style={{ height: '100vh' }}>
                <p> {props.body}</p>
            </Card>
        </div>
    );
}

export default Cards
