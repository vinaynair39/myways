import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const WorkOrientationBox = () => {
    const state = useSelector(state => state.test.currentItem);
    const { pathname } = useLocation();
    const [toggle, setToggle] = useState(false)

    const modal = (name, introduction) => {
        console.log('helo')
        return (
            <div className="modal fade" id="traitModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {introduction}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>)
    }
    return (
        <>
            <div className="workOrientation__box" style={{ margin: !!state.name && `0 1rem` }}>
                {modal(state.name, state.introduction)}
                {!!state.name ? <>
                    <h1>{state.name}</h1>
                    <p>{state.introduction.substring(0, 250)}</p>
                    <button data-toggle="modal" data-target="#traitModal">
                        Read More...
                    </button>
                </> : <h2>{pathname === '/centerofOperation' ? 'Hover around the Icons!' : 'Hover around the label text!'}</h2>
                }

            </div>
        </>
    );
}

export default WorkOrientationBox;