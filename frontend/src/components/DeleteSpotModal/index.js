import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteSpotThunk } from "../../store/spots";

const DeleteSpotModal = ({ id }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const deleteSpot = (id) => {
    return dispatch(deleteSpotThunk(id)).then(closeModal);
  };

  return (
    <div className="delete-spot-modal">
      <h2>Confirm Delete</h2>
      <h3>Are you sure you want to remove this spot from the listings?</h3>
      <button onClick={() => deleteSpot(id)}>Yes (Delete Spot)</button>
      <button onClick={() => closeModal()}>No (Keep Spot)</button>
    </div>
  );
};

export default DeleteSpotModal;