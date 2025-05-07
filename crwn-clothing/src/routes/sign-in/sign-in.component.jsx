import { getSigInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn=()=> {
    const logGoogleUser = async () => {
        const { user } = await getSigInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                SighIn With Google Popup
            </button>
        </div>
    );
};

export default SignIn;