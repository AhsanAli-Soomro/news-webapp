import Link from 'next/link'
import React from 'react'

function NewsUpdate() {
    return (
        <div>
            <marquee className='bg-red-800 text-teal-50  text-2xl'>For latest News and Updates <Link className='text-blue-500' href="/">Click here</Link></marquee>
        </div>
    )
}

export default NewsUpdate