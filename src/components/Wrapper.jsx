import React from 'react';
import New from './New';
import Popular from './Popular';

export default function sort(Componetn) {
    return function (params) {
        if (params.views < 100) {
            return <New>{ Componetn(params) }</New>
        } else {
            return <Popular>{ Componetn(params) }</Popular>
        }
    }
};
