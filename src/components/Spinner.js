import React, { useState } from 'react'
import { PuffLoader } from 'react-spinners'

const Spinner = () => {
    return (
        <div className='spinner-container d-flex align-items-center justify-content-center'>
            <PuffLoader color="#24d4f4"/>
        </div>
    )
}

export default Spinner
