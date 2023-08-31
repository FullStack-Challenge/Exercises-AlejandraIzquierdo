import useUser from "../hooks/useUser";

export default function MoreDetail() {
    const {name, age} = useUser();

    return (
        <div>
            <h1>Happy Birthday!</h1>
            <p>Age: {age}</p>
        </div>
    );
}