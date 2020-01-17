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
`;

function ResultItem({ result }) {

  const modal = (name, introduction) => {
    console.log('helo')
    return (
      <div className="modal fade" id="centerOfOperationModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
      </div>
    )

    
  }

  return (
    <ItemWrapper>
      <div className="card-body d-flex flex-column">
        <div className="skill-title mb-2">Problem Solving</div>
        <div className="skill-desc mb-3">
          The ability to apply general rules to specific problems to produce
          answers that make sense
        </div>
        <div className="score-grid d-flex justify-content-center align-items-center">
          <div className="score">
            <CircularProgressBar strokeWidth="5" sqSize="100" percentage={result.score} />
          </div>
          <div className="secondary-grid">
            <div className="skill-desc">Average Importance in Careers</div>
            <div className="score-title mb-2">High</div>
            <div className="">
              <button data-toggle="modal" data-target="#centerOfOperationModal" className="know-more">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
}

export default ResultItem;
