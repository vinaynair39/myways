import React from "react";
import styled from "styled-components";
import CareerLibrarySubItem from "./CareerLibararySubItem";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0 10px 20px, rgba(0, 0, 0, 0.24)  0 6px 17px;
  padding: 0.7rem;
  margin: 1.4rem;
  width: 20rem;
  cursor: pointer;
  border-radius: 0.7rem;
  .career-img {
    height: 5.5rem;
  }
  .hover{
    &:hover{
      transform: scale(1.1);
      transition: all 0.2s ease;
  }
  &:active{
      transform: translateY(4px);
  }
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
        className="d-flex flex-column justify-content-center align-items-center "
        data-toggle="modal"
        data-target={`#${id}`}
      >
        <div className=" career-img mb-1">
          <img className="career-img" src={img} alt="" />
        </div>
        <div className="text-center">
          <h4>{title}</h4>
        </div>
      </div>
      <div
        className="modal"
        id={`${id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenteredLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body row  d-flex justify-content-center align-items-center">
              {subtitles.map(subtitle => {
                return (
                  <div className="col-4">
                    <CareerLibrarySubItem
                      img={
                        "https://image.flaticon.com/icons/png/512/1512/1512506.png"
                      }
                      title={subtitle}
                      id="ree"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CareerLibraryItem;
