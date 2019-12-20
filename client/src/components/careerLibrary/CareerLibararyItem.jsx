import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "react-router-dom/Link";
import styled from "styled-components";
import CareerLibrarySubItem from "./CareerLibararySubItem";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0.7rem;
  margin: 1rem;
  width: 20rem;
  cursor: pointer;
  background: #f8d637;
  border-radius: 0.7rem;
  .career-img {
    height: 5.5rem;
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
        class="modal"
        id={`${id}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenteredLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div class="modal-content ">
            <div class="modal-body row  d-flex justify-content-center align-items-center">
              {subtitles.map(subtitle => {
                return (
                  <div class="col-4">
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
