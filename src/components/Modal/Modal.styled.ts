import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 370px;
  background: #ffff;
  gap: 20px;

  @media (min-width: 768px) {
    width: 560px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border-bottom: 3px solid rgb(233, 236, 239);
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  text-align: left;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  all: unset;
  padding: 5px;
  cursor: pointer;
  font-size: 25px;
`;
