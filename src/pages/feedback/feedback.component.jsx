import React, {useState} from 'react';
import { Input, Button, Form, Rate } from 'antd';
import extractName from '../../utilities/website-name.js';

import './feedback.styles.css'

export default function Feedback({history, match}) {

    const website = extractName(match.params.website);
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        values.website = website; 
        setLoading(true);
        //temp
        setTimeout(() => {setLoading(false)
                          history.push('/feedback/completed')}, 5000);
    }

    const onFinishFailed = (err) => {
        console.log(err)
    }

    return (
        <div>
            <br/>
            <h2>{website}</h2>
            <br/>

            <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} >

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your name',
                    },
                    ]}
                >
                    <Input size="large" placeholder="Name" />
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Please enter your Email Address',
                    },
                    ]}
                >
                    <Input size="large" type="email" placeholder="Email" />
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="How did you find this website?"
                    name="find"
                >
                    <Input size="large" placeholder="How did you find this website?" />
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="How would you rate the website on a scale of 5?"
                    name="rating"
                >
                    <Rate/>
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="What did you like about the website?"
                    name="good"
                >
                    <Input.TextArea size="large" placeholder="What did you like about the website?" />
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="What can be improved?"
                    name="improvement"
                >
                    <Input.TextArea size="large" placeholder="What can be improved?" />
                </Form.Item>

                <br/><br/>

                <Form.Item
                    label="Anything else?"
                    name="other"
                >
                    <Input.TextArea size="large" placeholder="Anything else?" />
                </Form.Item>

                <br/><br/>

                
                <Button type="primary" loading={loading} htmlType="submit">Submit</Button>
            </Form>
        </div>
    )
}

// email: "a@b.com"
// find: "h"
// good: "h"
// improvement: "h"
// name: "a"
// other: "h"
// rating: undefined
// website: "Coronavirus Tracker Live"