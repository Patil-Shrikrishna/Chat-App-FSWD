import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from 'react';

// custom hook
export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(() => {
        const auth = getAuth();
        console.log("use state", auth);
        const user = auth.currentUser;
        const isLoading = ! user;
        console.log("loading", isLoading);
        return {isLoading, user};
    });

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, user => {
            console.log("useeffect", user);
            setUserDetails({isLoading: false, user})
        });
    }, []);

    return userDetails;
}
