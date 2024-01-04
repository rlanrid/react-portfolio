import React, { useEffect } from 'react'

const Loading = () => {
    useEffect(() => {
        const loadingPercent = document.querySelector(".loading-percent");

        var percent = 0;
        var loop = setInterval(() => {
            if (percent != 100) {
                percent++;
                loadingPercent.innerText = `${percent}%`;
            } else {
                clearInterval(loop)
                loadingPercent.innerText = `Done !`;
            }
        }, 50)
    }, [])

    return (
        <>
            <div className="e-loadholder">
                <div className="m-loader">
                    <span className="e-text">Loading</span>
                </div>
            </div>
            <div className="containerL">
                <div className="loading-container">
                    <div className="loading-line-container">
                        <span className="loading-percent">100%</span>
                        <div className="loading-line startLoading"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading
