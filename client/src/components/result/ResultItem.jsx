import React from "react";
import styled from "styled-components";
import CircularProgressBar from "./CircularProgressBar";

const ItemWrapper = styled.div`
  color: #24292e;
  .card-body {
    width: 19vw;
    overflow: hidden;
  }
  .skill-title {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .skill-desc {
    font-size: 0.8rem;
  }
  .score {
    width: 7vw;
  }
  .secondary-grid {
    height: 100%;
    padding-left: 1rem;
  }
  .score-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #0b3b0b;
  }
  .know-more {
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #2e2e2e;
    background: transparent;
    font-size: 0.9rem;
  }
  .modal-body{
    padding-top: 0;
    & h5{
      margin-top: 1.5rem;
      font-weight: 700;
    }
  }
`;

function ResultItem({ name, definition, score, introduction,basicFear,difficultiesExternal,areaOfFocus,challenges,needsAtWorkplace,
  workplaceStrength1,dominantWorkPlaceTraits,application1,workplaceStrength2,application2,application3,application4,application5,application6,
  workplaceStrength3,workplaceStrength4,workplaceStrength5,workplaceStrength6,lessonsLearned,
  coreValues,thingsToBeTakenCareOf,choosingTheCorrectPath,issuesAtWorkPlace, keyMotivations,difficultiesInternal,strengthsExternal, strengthsInternal}) {

  const modal = () => {
    return (
      <div class="modal fade bd-example-modal-lg" id={name} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">{name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
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
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )

  }

  return (
    <ItemWrapper>
      {modal()}
      <div className="card-body d-flex flex-column">
        <div className="skill-title mb-2">{name}</div>
        <div className="skill-desc mb-3">
          {definition}
        </div>
        <div className="score-grid d-flex justify-content-center align-items-center">
          <div className="score">
            <CircularProgressBar strokeWidth="5" sqSize="100" percentage={score} />
          </div>
          <div className="secondary-grid">
            <div className="skill-desc">Average Importance in Careers</div>
            <div className="score-title mb-2">High</div>
            <div className="">
              <button data-toggle="modal" data-target={`#${name}`} className="know-more">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
}

export default ResultItem;
