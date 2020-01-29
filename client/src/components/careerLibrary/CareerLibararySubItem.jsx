import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0.4rem;
  margin: 1rem;
  width: 95%;  cursor: pointer;
  /* background: #FAFAFA; */
  border-radius: 0.7rem;
  .career-img {
    height: 6rem;
  }
`;

const CareerLibraryItem = ({
  id,
  img,
  title,
  subtitles = [
    "Dairy",
    "Agricultural Biotechnology",
    "Plant Science",
    "Food Science"
  ]
}) => {
  return (
    <Wrapper className="">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        data-toggle="modal" data-target={`#${id}`}
      >
        <div className=" career-img mb-1">
          <img className="career-img" src={img} alt="" />
        </div>
        <div className="text-center">
          <h4>{title}</h4>
        </div>
      </div>
      <div class="modal" id={`${id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">

            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerLibraryItem;
