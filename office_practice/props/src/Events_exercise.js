import { useState } from 'react';
import InstructorItem from './instructorItem';

let customLink = (props) => {
    return (
        <div>
            <a href={props.href}  target='_blank' rel='noreferrer'>{props.text}</a>
            <button onClick={props.handleClick}>Change</button>
        </div>
    );
}

let App = () => {
    let sample = [
        {
            href: 'www.google.com',
            text: 'Google'
        },
        {
            href: 'www.youtube.com',
            text: 'Youtube'
        },
        {
            href: 'www.channelstv.com',
            text: 'Channels TV'
        }
    ]

    let disabler = () => {

    }

    let [link, setLink] = useState(sample);
    let output = link.map(item => {
        return (
            <customLink
                href={item.href}
                text={item.text}
                onClick={() => disabler()}
            />
        );
    });

    return (
        <div>

        </div>
    );
}

export default App;