import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark2 } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  color: green;
  padding: 1rem;
  height: 50vh;
  margin:1rem;
  border-radius: 1.5rem;
  box-shadow: #FFC765 4px 4px 1px, #FFC765 0px 1px 2px;
    position: relative;
  .recommended {
  }
  .bookmark{
    font-size: 1.5rem;
    position: absolute;
    right: 2rem;
    top: 1rem;
    cursor: pointer;

  }
  .suggestion-title {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .suggestion-source {
    font-size: 1.3rem;
  }
  .link-more{
      color: green;
      font-weight: bold;
  }
`;

function DevSuggestItem() {
  return (
    <Wrapper className="d-flex flex-column justify-content-center">
        <div className="bookmark"><FontAwesomeIcon icon={faBookmark} /></div>
      <div className="recommended">Recommended by MyWays</div>
      <div className="suggestion-title">
        This activity might help to increase your memory by 10'
      </div>
      <div className="d-flex align-items-center">
        <div className="suggestion-source">BrightSide | </div>
        <div className="ml-2 suggestion-date">Posted on 11 Dec, 2019</div>
      </div>
      <div className="description mt-2">
        Rasengan!! sdhsauidhsaohdoashdosahd
        lsodsokdaokskdoeihf; oihfodrihgoirhgo Asakujaku!! sdhsauidhsaohdoashdosahd
       
        
      </div>
      <div className="read-more-link mt-2"><a href="#" className="link-more"><u>Read More</u></a></div>
      <div className=""></div>
    </Wrapper>
  );
}

export default DevSuggestItem;
