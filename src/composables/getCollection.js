import {ref, watchEffect} from "vue";
import {projectFirestore} from "@/firebase/config";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("score")

    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results.reverse()
        error.value = null
        console.log(documents.value)
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = "could not fetech data"
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return {error, documents}
}

export default getCollection