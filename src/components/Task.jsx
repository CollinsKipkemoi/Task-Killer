import PropTypes from 'prop-types'
import '../styles/List.css'


function Task({ name, describe, handleComplete, complete, handleDelete}) {

    Task.propTypes = {
        name: PropTypes.string.isRequired,
        describe: PropTypes.string.isRequired,
        handleComplete: PropTypes.func.isRequired,
        complete: PropTypes.bool.isRequired,
        handleDelete: PropTypes.func.isRequired
    };
    return (
        <div className='oneTask'>
            <div className="first">
                <p style={{ fontSize: "1.2em", color: "tomato", textDecoration: complete ? "line-through": "none"}} className='name'>{name}</p>
                <p style={{textDecoration: complete ? "line-through" : "none"}} className='describe'>{describe}</p>
            </div>
            <div className="taskButtons">
                <button style={{display : complete ? 'none' : "inline-block"}}  className="complete" onClick={handleComplete}>Complete</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}


export default Task