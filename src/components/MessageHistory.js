import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

function MessageHistory({list}) {
    const output = list.map(el => {
        const {id, from, type, time, text} = el
        if (type === 'message') {
            return <Message key={id} from={from} message={{time, text}} />
        } else if (type === 'response') {
            return <Response key={id} from={from} message={{time, text}} />
        } else if (type === 'typing') {
            return <Typing key={id} from={from} message={{time}} />
        }
    })

    return (
        list.length > 0 && 
            <ul>
                {output.map(message => message)}
            </ul>
    )
}

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}

MessageHistory.defaultProps = {
    list: []
}

export default MessageHistory