import React from 'react';
import { setCurrentItem } from '../../actions/test';
import { useSelector } from 'react-redux';


const LearningStyleBox = () => {
    const state = useSelector(state => state.test.currentItem)
    const modal = (name, introduction) => {
        return (
            <div className="modal fade" id="learningModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
            </div>)
    }

    return (
        <>
        {modal(state.name, state.definition)}
        <div className="workOrientation__box" style={{ margin: !!state.name && `0 1rem` }}>
            {!!state.definition ? <>
                <h1>{state.name}</h1>
                <p>{state.definition}</p>
                <li>Best Way to Learn: {state.wayToLearn}</li>
                <button data-toggle="modal" data-target="#learningModal">
                    Read More...
                    </button>
            </> : <h2>Hover around the icons!</h2>
            }
        </div>
        </>
    );
}

export default LearningStyleBox;