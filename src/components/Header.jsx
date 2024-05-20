import { useDispatch } from "react-redux";
import { setStatus } from "../features/friends/friendsSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <nav>
        <h1>🤝Social Media Invite👎</h1>
        <div className="btn-group">
          <button
            className="btn btn-header"
            onClick={() => {
              dispatch(setStatus("all"));
            }}
          >
          All List
          </button>
          <button
            className="btn btn-header"
            onClick={() => {
              dispatch(setStatus("accepted"));
            }}
          >
          Accepted List
          </button>
          <button
            className="btn btn-header"
            onClick={() => {
              dispatch(setStatus("rejected"));
            }}
          >
          Rejected List
          </button>
          <button
            className="btn btn-header"
            onClick={() => {
              dispatch(setStatus("blocked"));
            }}
          >
          Blocked List
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Header