import useUser from "../hooks/useUser";

export default function MoreInfo() {
    const {name, age} = useUser();

    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}