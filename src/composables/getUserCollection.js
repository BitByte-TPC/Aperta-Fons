import { projectAuth, projectFirestore } from "../firebase/config";
import { ref } from "vue";

const getUserCollection = (collection) => {
    const error = ref(null);
    const userDetails = ref(null);
    projectAuth.onAuthStateChanged((user) => {
        if (user) {
            const userID = user.uid;
            const q = projectFirestore.collection(collection).where("uid", "==", userID);
            q.onSnapshot((snap) => {
                let results = []
                snap.docs.forEach(doc => {
                    results.push({ ...doc.data(), time_sec: doc.time})
                })
                userDetails.value = results.reverse();
                error.value = null;
            }), (err) => {
                console.log(err.message)
                error.value = "could not fetch data";
            }
        } else {
            error.value = "User is Invalid"
        }
    });
    return { userDetails,error}
}

export default getUserCollection;


