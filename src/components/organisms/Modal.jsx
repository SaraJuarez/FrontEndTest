import { StyledModal, StyledModalSubcontainer } from "../styles/modal.styled";
function Modal(props) {
  const { closeFunction, content } = props;
  return (
    <StyledModal onClick={closeFunction} className="modal-container">
      <StyledModalSubcontainer>
        {/*         <CloseIcon onClickFunction={handleClose} /> */}
        {content}
      </StyledModalSubcontainer>
    </StyledModal>
  );
}

export default Modal;
