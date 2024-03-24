import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./private/firebase";
import { getAuth } from "firebase/auth";

async function fetchProfile() {
    const profileRef = collection(firestore, 'profiles');
    const querySnapshot = await getDocs(profileRef);

    const profileList = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            name: data.name,
            password: data.password,
            email: data.email
        };
    });
    return profileList;
}
async function fetchCurrentProfile() {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
        const profileRef = collection(firestore, 'profiles');
        const querySnapshot = await getDocs(profileRef);
        const profile = querySnapshot.docs.find((user) => user.data().email === currentUser.email);
        if (profile) {
            const profileData = profile.data();
            return {
                name: profileData.name,
                email: profileData.email,
                password: profileData.password
            };
        }
    }
    return null; // Return null if no current user or profile found
}

