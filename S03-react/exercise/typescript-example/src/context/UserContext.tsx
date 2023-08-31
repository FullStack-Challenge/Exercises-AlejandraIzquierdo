import { createContext } from "react";

interface UserContextValue {
    name: string | null;
    age: number | null;
}

const UserContext = createContext<UserContextValue>({
    name: null,
    age: null
});

export default UserContext;