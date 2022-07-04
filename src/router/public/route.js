import React from 'react';

export default function PublicRoute(props) {
    const Component = props.component;
    const route = props.route;

    return (
        <Component route={route} />
    );
}