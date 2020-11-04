import jwt from 'jsonwebtoken';

const JWT_TOKEN_NAME = 'AUTH_TOKEN';

const isLoggedIn = () => {
    const token = localStorage.getItem(JWT_TOKEN_NAME);
    if (!token) return false;

    const contentArr = token.split(" ");
    if (contentArr.length !== 2 || contentArr[0] !== "Bearer"){
        return false
    }
    const decodedToken = jwt.decode(contentArr[1]);
    const expirationTime = decodedToken.exp * 1000;
    const isExpired = Date.now() - expirationTime > 0;
    
    if (isExpired) {
        localStorage.removeItem("token");
        window.location.reload();
        return
    }

    return true
};

export default isLoggedIn;