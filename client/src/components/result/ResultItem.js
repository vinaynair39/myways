import React from "react";
import styled from "styled-components";
import CircularProgressBar from "./CircularProgressBar";

const ItemWrapper = styled.div`
  color: 24292e;
  .card-body {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    width: 23vw;
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
    width: 10vw;
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
  }
`;

function ResultItem({result}) {
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
            <CircularProgressBar strokeWidth="5" sqSize="125" percentage={result.score} />
          </div>
          <div className="secondary-grid">
            <div className="skill-desc">Average Importance in Careers</div>
            <div className="score-title mb-2">High</div>
            <div className="">
              <button className="know-more">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
}

export default ResultItem;
