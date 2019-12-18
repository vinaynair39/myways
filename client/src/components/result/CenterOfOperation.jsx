import React from 'react';
import CenterOfOperationBox from './CenterOfOperationBox';
import Charts from './Charts'
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

const CenterOfOperation = ({ results }) => (
    <>
        <Charts />
        <div className="row d-flex justify-content-center" style={{ width: "100vw" }}>
        </div>
        <div className="row d-flex justify-content-center" style={{ width: "100vw" }}>
            <div className="col-4"><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/1491/1491416.png"} colr="#FACC2E" /></div>

            <div className="col-4"><CenterOfOperationBox img={"https://image.flaticon.com/icons/svg/1301/1301414.svg"} colr="#F25C5C" /></div>
            <div className="col-4"><CenterOfOperationBox img={"https://image.flaticon.com/icons/png/512/1491/1491376.png"} colr="#0080FF" /></div>
        </div>
    </>
)

export default CenterOfOperation;