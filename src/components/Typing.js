import PropTypes from 'prop-types';

function Typing({from, message}) {
    const { time, text = '...' } = message;
    const { name } = from;

    return (
        <li>
            <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {name}</span>
            <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">
                {text}
            </div>
        </li>
    )
}

Typing.propTypes = {
    from: PropTypes.exact({
        name: PropTypes.string.isRequired
    }),
    message: PropTypes.exact({
        time: PropTypes.string.isRequired,
        text: PropTypes.string
    })
}

export default Typing