import {db} from '../firebase/config'
import { collection, getDocs } from '@firebase/firestore'

// collection ref
const colRef = collection(db, 'missions')

// get collection data
const getDoc = getDocs(colRef)
.then((snapshot) => {
    let missions: any = []
    snapshot.docs.forEach((doc) => {
        missions.push({ ...doc.data(), id: doc.id })
    })
    console.log(missions)
})
.catch(err => {
    console.log(err.message)
})

export default getDoc