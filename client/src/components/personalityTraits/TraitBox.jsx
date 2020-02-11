import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const WorkOrientationBox = () => {
    const state = useSelector(state => state.test.currentItem);
    const { pathname } = useLocation();
    const [toggle, setToggle] = useState(false)

    const modal = ({ introduction, strengthsExternal, strengthsInternal, difficultiesExternal, difficultiesInternal, name,
        keyMotivations, areaOfFocus, basicFear, challenges, dominantWorkPlaceTraits, workplaceStrength1, application1, workplaceStrength2, application2,
        workplaceStrength3, application3, workplaceStrength4, application4, workplaceStrength5, application5, workplaceStrength6, application6,
        needsAtWorkplace,issuesAtWorkPlace, choosingTheCorrectPath, thingsToBeTakenCareOf, coreValues, lessonsLearned
    }) => {
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
                            <div class="modal-body">
                                <h5>Introduction:</h5> {introduction}
                                <h5>Strengths: External (behavioural):</h5> {strengthsExternal}
                                <h5>Strengths: Internal:</h5> {strengthsInternal}
                                <h5>Difficulties: External (behavioural):</h5> {difficultiesExternal}
                                <h5>Difficulties: Internal:</h5> {difficultiesInternal}
                                <h5>Key Motivations:</h5> {keyMotivations}
                                <h5>Area of Focus:</h5> {areaOfFocus}
                                <h5>Basic Fear:</h5> {basicFear}
                                <h5>Challenges:</h5> {challenges}
                                <h5>Dominant Workplace traits:</h5> {dominantWorkPlaceTraits}
                                <h5>Workplace Strength 1:</h5> {workplaceStrength1}
                                <h5>Application 1:</h5> {application1}
                                <h5>Workplace Strength 2:</h5> {workplaceStrength2}
                                <h5>Application 2:</h5> {application2}
                                <h5>Workplace Strength 3:</h5> {workplaceStrength3}
                                <h5>Application 3:</h5> {application3}
                                {workplaceStrength4 && <><h5>Workplace Strength 4:</h5>{workplaceStrength4}</>}
                                {application4 && <><h5>Application 4:</h5> {application4}</>}
                                {workplaceStrength5 && <><h5>Workplace Strength 5:</h5> {workplaceStrength5}</>}
                                {application5 && <><h5>Application 5:</h5> {application5}</>}
                                {workplaceStrength6 && <><h5>Workplace Strength 6:</h5> {workplaceStrength6}</>}
                                {application6 && <><h5>Application 6:</h5> {application6}</>}
                                <h5>Needs at Workplace:</h5> {needsAtWorkplace}
                                <h5>Issues at Workplace:</h5> {issuesAtWorkPlace}
                                <h5>Choosing the correct Path:</h5> {choosingTheCorrectPath}
                                <h5>Things to be taken care:</h5> {thingsToBeTakenCareOf}
                                <h5>Core Values Impacting Career Decsion:</h5> {coreValues}
                                <h5>Lessons Learned:</h5> {lessonsLearned}
                            </div>
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
                {modal(state)}
                {!!state.name ? <>
                    <h1>{state.name}</h1>
                    <p>{state.introduction && state.introduction.substring(0, 250)}</p>
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