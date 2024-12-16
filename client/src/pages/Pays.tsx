import { useParams } from "react-router-dom";

export default function Pays() {
    const { code } = useParams();
    return <h2>Pays : {code}</h2>;
}
