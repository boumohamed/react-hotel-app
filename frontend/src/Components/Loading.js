import React from 'react'

import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <div>
            <Loader
                type="Grid"
                color="#f0ad4e"
                height={100}
                width={100}
                timeout={2500}
            />
        </div>
    )
}
