import PropTypes from 'prop-types';

function Response({from, message}) {
    const { time, text } = message;
    const { name } = from;

    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {text}
            </div>
      </li>
    )
}

Response.propTypes = {
    from: PropTypes.exact({
        name: PropTypes.string.isRequired
    }),
    message: PropTypes.exact({
        time: PropTypes.string.isRequired,
        text: PropTypes.string
    })
}

export default Response