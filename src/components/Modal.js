import {
    ModalProvider,
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';
  import 'react-simple-hook-modal/dist/styles.css';
  
  const ModalCheckout = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
  
    return (
      <>
        <button onClick={openModal}>Open</button>
        <Modal
          id="any-unique-identifier"
          isOpen={isModalOpen}
          transition={ModalTransition.BOTTOM_UP}
        >
          <button onClick={openModal}>Open</button>
        </Modal>
      </>
    );
  };
  
export default ModalCheckout;