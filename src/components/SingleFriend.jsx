import { useDispatch } from "react-redux";
import { accept, reject, block } from "../features/friends/friendsSlice";
const SingleFriend = ({ id, name, status }) => {
    const dispatch = useDispatch();

  return (
    <div className="single-invite">
        <p>⚜️{name}⚜️</p>
        { 
        status === '' ? 
        (
        <div className="btn-group">
            <button
                className="btn btn-invite btn-accept" 
                onClick={() => {
                    dispatch(accept(id));
                }}
            >
            Accept
            </button>
            <button
                className="btn btn-invite btn-reject"
                onClick={() => {
                    dispatch(reject(id));
                }}
            >
            Reject
            </button>
            <button
                className="btn btn-invite btn-block"
                onClick={() => {
                    dispatch(block(id));
                }}
            >
            Block
            </button>
        </div>
        )
        : 
        <p>{status}</p> 
        }
    </div>
  )
}
export default SingleFriend