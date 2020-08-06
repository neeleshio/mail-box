import React from 'react'
import { Card } from 'antd';

const Cards = (props) => {
    return (
        <div className="site-card-border-less-wrapper" >
            <Card title={props.subject} bordered={false} style={{ width: "100vw", height: '100vh' }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
}

export default Cards
