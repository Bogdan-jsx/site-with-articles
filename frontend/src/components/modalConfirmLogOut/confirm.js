import React from "react";
import "./confirm.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";

export default function ModalConfirm({setIsModalConfirm}) {
  const dispatch = useDispatch();

  const onCancelClick = () => {
    setIsModalConfirm(false);
  }
  const onConfirmClick = () => {
    dispatch(logOut());
    setIsModalConfirm(false);
  }
  return (
      <div className="comfirmModal">
          <h2 className="confirmText">Вы точно хотите выйти?</h2>
          <button className="cancel" onClick={onCancelClick.bind(null)}>Отмена</button>
          <button className="confirm" onClick={onConfirmClick.bind(null)}>Да</button>
      </div>
  );
}