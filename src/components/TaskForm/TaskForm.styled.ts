import styled, { css } from 'styled-components';

const fieldBaseStyles = css`
  width: 100%;
  height: 44px;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: grey;
  margin-bottom: 6px;
`;

export const ErrorText = styled.span`
  color: #dc2626;
  font-size: 12px;
  line-height: 1.3;
`;

export const Input = styled.input<{ $error?: boolean }>`
  ${fieldBaseStyles}

  border: 1px solid ${(props) => (props.$error ? '#dc2626;' : '#d1d5db')};
`;

export const Select = styled.select`
  ${fieldBaseStyles}
`;

export const Textarea = styled.textarea<{ $error?: boolean }>`
  ${fieldBaseStyles}
  border: 1px solid ${(props) => (props.$error ? '#dc2626;' : '#d1d5db')};
  min-height: 110px;
  resize: none;
`;

export const Button = styled.button`
  height: 44px;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-weight: 600;
  border: none;
`;
