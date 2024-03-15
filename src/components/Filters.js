import React from 'react'

const Filters = (props) => {
    const filters = props.filterData;
    const setFilter = props.setFilter;
    return (
        <div className='text-center py-2 bg-info-subtle'>
            {filters.map((filter) => {
                return <button key={filter.id} className='btn btn-sm btn-outline-info me-2' onClick={()=>{setFilter(filter.title)}}>{filter.title}</button>
            })}
        </div>
    )
}

export default Filters
