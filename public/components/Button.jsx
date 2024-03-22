import React from 'react'

function Button(props) {
    return (
        <div>
            <button className='bg-[#a0a0eb] px-5 py-3 text-black font-bold mt-5 hover:bg-[#aed890] hover:text-white rounded'>{props.text}</button>
        </div>
    )
}

export default Button