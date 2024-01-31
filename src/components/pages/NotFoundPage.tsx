import { useRouteError } from "react-router-dom"


export const NotFoundPage = () => {

    const error = useRouteError()
    console.log(error);
    

    return (
        <>
            <h1>page not found</h1>
        </>
    )
}