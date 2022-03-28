import { CButton } from "@coreui/react";
import { useRouter } from "next/router"

export default function Todo()
{
    const route = useRouter();

    const handleSubmit = () => {
        route.push('/todo/add-todo');
    }

    return (
        <div>
            <CButton type="submit" onClick={() => handleSubmit()}>Submit</CButton>
        </div>
    )
}