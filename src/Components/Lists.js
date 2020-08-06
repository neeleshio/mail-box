import React from 'react'
import { List, Avatar } from 'antd';

const Lists = (props) => {
    const data = props.inbox.map(mail => ({
        key: mail.id,
        title: mail.title,
        subject: mail.subject
    }));

    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar >{item.title.split('')[0]}</Avatar >}
                        title={<a onClick={props.handleClick.bind(this, item.key)}>{item.title}</a>}
                        description={item.subject}
                    />
                </List.Item>
            )}
        />
    )
}


export default Lists