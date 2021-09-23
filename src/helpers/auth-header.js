import { authenticationService } from '../services/authentication.service';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.userData.jwt) {
        return {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${currentUser.userData.jwt}`
        };
    } else {
        return {};
    }
}