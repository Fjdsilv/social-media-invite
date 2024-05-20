import { useDispatch } from "react-redux";
import { undoFriendStatus } from "../features/friends/friendsSlice";

const SingleFriendFilter = ({ id, name, status }) => {

  const dispatch = useDispatch();

  return (
    <div className="single-invite">
        <p>⚜️{name}⚜️</p>
        <button
          className="btn btn-invite btn-undo"
          onClick={() => {
            dispatch(undoFriendStatus(id));
          }}
        >
        Undo
        </button>
    </div>
  )
}
export default SingleFriendFilter