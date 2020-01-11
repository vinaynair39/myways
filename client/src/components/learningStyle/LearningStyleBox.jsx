import React from 'react';
import { setCurrentItem } from '../../actions/test';
import { useSelector } from 'react-redux';


const LearningStyleCard = () => {
    const state = useSelector(state => state.test.currentItem)

    const modal = (name, introduction) => {
        console.log('helo')
        return (
            <div className="modal fade" id="learningModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
        <div className="workOrientation__box" style={{ margin: !!state.name && `0 1rem` }}>
            {modal(state.name, state.introduction)}
            {!!state.definition ? <>
                <h1>{state.name}</h1>
                <p>{state.introduction.substring(0, 250)}</p>
                <button data-toggle="modal" data-target="#learningModal">
                    Read More...
                    </button>
            </> : <h2>Hover around the icons!</h2>
            }
        </div>
    );
}

export default LearningStyleCard;