import data from "./data/data.json"
import { db } from "./firebase.config"
import { useEffect } from "react"
import { collection, addDoc } from "firebase/firestore"

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), data.currentUser)
        const products = data.productRequests

        products.forEach(async (product) => {
          await addDoc(collection(db, "productRequests"), product)
        })

        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
    }
    fetchData()
  }, [])
  return <div className="font-bold">Hi</div>
}

export default App
