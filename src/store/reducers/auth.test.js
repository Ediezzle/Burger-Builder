import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

configure({adapter: new Adapter()});

describe('auth reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirect: '/'
            });
    });

    it('should store the token upon login', () => {
        expect(reducer({
                token: null,
                userId: null,
                error: null,
                loading: false,
                authRedirect: '/'
            }, { 
                type: actionTypes.AUTH_SUCCESS, 
                tokenId: 'some-token',
                userId: 'some-user-id' } )).toEqual({
                    token: 'some-token',
                    userId: 'some-user-id',
                    error: null,
                    loading: false,
                    authRedirect: '/'
                });
    });

});