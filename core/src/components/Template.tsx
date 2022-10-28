import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '@mp/ds'

interface MapRoute {
    nomeRota: string;
    pathRota: string;
    onClickAction: () => void;
}

export function Template(){
    const navigate = useNavigate();
    const routes: MapRoute[] = [
        {
            nomeRota: "Home",
            pathRota: '/',
            onClickAction: () => navigate('/')
        },
        {
            nomeRota: "Reports",
            pathRota: '/reports',
            onClickAction:() => navigate('/reports')
        }
    ]

    return (
        <section>
            <Navbar mapRoutes={routes} />
            <Outlet />
        </section>
    )
}