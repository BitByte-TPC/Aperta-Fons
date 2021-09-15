import firebase from "firebase/compat";
import {ref} from "vue";

const error = ref(null)
const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
        const credential = firebase.auth.GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    }).catch((err) => {
        error.value = err.message
    })
}

const useSignInGoogle = () => {
    return {error, googleLogin}
}

export default useSignInGoogle