import { useSelector } from "react-redux";
import SingleFriend from "./SingleFriend";
import SingleFriendFilter from "./SingleFriendFilter";

const ListFriends = () => {

const { friends, status } = useSelector((store) => store.friends);
console.log(friends);
console.log(status);

if (status !== 'all') {
    return (
        <section>
            <h2>{`All ${status}`}</h2>
            <article>
                {
                    friends.map(friend => {
                        if (friend.status === status) {
                            return <SingleFriendFilter key={friend.id} {...friend} />
                        }
                        return;
                    })
                }
            </article>
        </section>
    );
}

  return (
    <section>
        <h2>{status === 'all' ? 'All Invitations' : status}</h2>
        <article>
            {
                friends.map(friend => {
                    return (
                        <SingleFriend key={friend.id} {...friend} />
                    );
                })
            }
        </article>
    </section>
  );
};
export default ListFriends;