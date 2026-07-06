import Profile from '../Profile/Profile'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import userData from '../../../src/userData.json'
import friends from '../../../src/friends.json'
import transactions from "../../../src/transactions.json"
import css from './App.module.css'

export default function App() {
    return (
        <div className={css.container}>
            <Profile user={userData} />
            
            <FriendList friends={friends} />
        
            <TransactionHistory items={transactions} /> 

           
        </div>
    );
}
