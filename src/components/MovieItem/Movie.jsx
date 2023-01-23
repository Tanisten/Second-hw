import { StyledInnerDiv } from "../header/header";
import { Modal } from "../Modal/Modal";
import Button from "../btn";
import { useState } from "react";

export const Movie = ({ url, title, id, rating, onConfirm }) => {
    
    const [queryModal, setqueryModal] = useState(false);

    const queryHandler = () => {
      setqueryModal((prevState) => !prevState);
    };
  
 
  return (
    <div className="all-items">
      <img src={url} alt="" />
      <div className="btns">
        <h3>{title}</h3>
        <div className="items">
          <Button
            title={`${rating}/5 stars`}
            color="rgb(231,125,59)"
            borderRadius="20px"
          />

          <Button title={"DELETE"} color="blue" onClick={queryHandler}/>

          {queryModal ? (
                  <Modal>
                    <StyledInnerDiv>
                      <button onClick={()=>onConfirm(id)} >АХАХА</button>
                    </StyledInnerDiv>
                  </Modal>
                ) : null}
          <Button title={"EDIT"} color="blue" />
        </div>
      </div>
    </div>
  );
};
