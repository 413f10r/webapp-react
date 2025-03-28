
import { Outlet } from "react-router-dom";
import Header from '../components/Header'

export default function defaultLayout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}
