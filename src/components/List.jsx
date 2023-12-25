import PropTypes from 'prop-types';
import Task from "./Task"
import '../styles/List.css'

function List({ items, handleComplete, handleDelete }) {

    return (
        <div className='list'>
            {items.map((value, key) => {
                return <Task describe={value.describe} name={value.name} complete={value.complete} handleComplete={() => handleComplete(value.id)} key={key} handleDelete = {() => handleDelete(value.id)}/>
            })}
        </div>
    )
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleDelete : PropTypes.func.isRequired

};

export default List