import React, { useEffect, useRef, useState } from 'react';
import { Layout } from 'Layout';
import { HomePage, IssueBoard } from 'Views';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Routes.css';

const NotFound = () => (
    <h4>NOT FOUND</h4>
)

const routes = [
    { path: '/', Component: HomePage },
    { path: '/board', Component: IssueBoard },
    { path: '*', Component: NotFound, exact: false }
]

const Routes = () => {
    const location = useLocation();
    const nodeRef = useRef(null);
    const [ref, setRef] = useState(nodeRef);

    useEffect(() => {
        if(nodeRef.current){
            console.log(nodeRef)
            setRef(nodeRef)
        }
        return () => {
            
        }
    }, [])
    
    return (
        <Layout>
            <TransitionGroup childFactory={child => React.cloneElement(child)}>
                <CSSTransition
                    nodeRef={ref}
                    key={location.key}
                    timeout={1000}
                    unmountOnExit
                    mountOnEnter
                    classNames='page'>
                    <Switch location={location}>
                        {routes.map(({ path, Component, exact }) =>
                            <Route key={path} exact={exact || true} path={path}>
                                <div key={location.pathname} ref={nodeRef}>
                                    <Component />
                                </div>
                            </Route>
                        )}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    )
}

export default Routes
