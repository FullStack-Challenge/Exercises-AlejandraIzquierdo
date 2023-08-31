import UserContext from "../context/UserContext";
import MoreDetail from "./MoreDetail";
import MoreInfo from "./MoreInfo";

const userData = {
    name: "Yeisson",
    age: 15
}

function UseUserContext() {
    return(
        <UserContext.Provider value={userData}>
            <div className="App">
                <h1>UseContext</h1>
                <MoreInfo/>
                <h1>MoreDetail</h1>
                <MoreDetail/>
            </div>
        </UserContext.Provider>
    )
    
}

export default UseUserContext;