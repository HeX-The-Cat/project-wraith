import React from 'react'
import notFound from './images/404.png'

function NoPage() {
    return (
        <div className=" h-auto bg-blue-400 flex justify-center py-5">
            <img src={notFound} />
        </div>
    );
}

export default NoPage;