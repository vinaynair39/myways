import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const WorkOrientationBox = () => {
    const state = useSelector(state => state.test.currentItem)
    const modal = (name, introduction) => {
        return (
            <div className="modal fade" id="workOrientationModal" tabIndex="-10" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg"  role="document">
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
            </div>
            )
    }
    return (
        <>
            {modal(state.name, state.introduction)}
            <div className="workOrientation__box" style={{margin: !!state.name && `0 1rem`}}>
                {!!state.name ? <>
                    <h1>{state.name}</h1>
                    <p>{state.definition}</p>
                    <li>Unique Ability: {state.uniqueAbility}</li>
                    <li>Strength: {state.strength}</li>
                    <li>Work Behaviour: {state.behaviour}</li>
                    <button data-toggle="modal" data-target="#workOrientationModal">
                        Read More...
                    </button>
                </> : <h2>Hover around the icons!</h2>
                }
            </div>
        </>
    );
}

export default WorkOrientationBox;