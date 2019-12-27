import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark2 } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  color: green;
  padding: 1rem;
  margin:1rem;
  height: 50vh;
  border-radius: 1.5rem;
  box-shadow: #ffc765 4px 4px 1px, #ffc765 0px 1px 2px;
  position: relative;
  .recommended {
  }
  .bookmark {
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
  .link-more {
    color: green;
    font-weight: bold;
  }
  .image-vid {
    height: 100%;
    padding: 1rem;
  }
`;

function DevSuggestVideo() {
  return (
    <Wrapper className="row">
      <div className="bookmark">
        <FontAwesomeIcon icon={faBookmark} />
      </div>

      <div className="col-12 recommended">Recommended by MyWays</div>
      <div className="col-6 image-vid d-flex align-items-center">
        <img
          src="https://i.ytimg.com/vi/kcMt_Rc6ZLs/maxresdefault.jpg"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-6 d-flex flex-column justify-content-center">
        <div className="suggestion-title">
          This activity might help to increase your memory by 10'
        </div>
        <div className="d-flex align-items-center">
          <div>
            {" "}
            <div className="suggestion-source mt-2">BrightSide</div>
            <div className="suggestion-date">Posted on 11 Dec, 2019</div>
          </div>
          <div className="read-more-link mt-2 ml-auto">
            <a href="#" className="link-more">
              <u>View Video</u>
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </Wrapper>
  );
}

export default DevSuggestVideo;
