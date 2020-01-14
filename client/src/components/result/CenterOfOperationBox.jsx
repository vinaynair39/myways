import React from 'react';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export const CenterOfOperationBox = () => {
    const state = useSelector(state => state.test.currentItem);

    const modal = (name, introduction) => {
        console.log('helo')
        return (
            <div className="modal fade" id="centerOfOperationModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg"  role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{name}</h5>
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
            </div>
            )
    }
    return (
        <>
            {modal(state.name, state.introduction)}
            <div className="workOrientation__box" style={{ margin: !!state.name && `0 1rem` }}>
                {!!state.name ? <>
                    <h1>{state.name}</h1>
                    <p>{state.introduction && state.introduction.substring(0, 250)}</p>
                    <button data-toggle="modal" data-target="#centerOfOperationModal">
                        Read More...
                    </button>
                </> : <h2>{'Hover around the Icons!'}</h2>
                }

            </div>
        </>
    );
    
}

export default CenterOfOperationBox;