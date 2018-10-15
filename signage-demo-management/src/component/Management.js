import React from 'react'

const Management = ({handleClose, visible, children }) => {


    const showHideClassName = visible ? "modal display-block" : "modal display-none"

    return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    {children}
                    <button
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </section>
            </div>
    )

}

export default Management