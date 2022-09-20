import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import router from '../router/index';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadinUser: false,
        loadingSession: false
    }),

    actions: {
        async registerUser(email, password) {
            this.loadinUser = true
            try {
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (err) {
            } finally {
                this.loadinUser = false
            }
        },
        async loginUser(email, password) {
            this.loadinUser = false
            try {
                const { user } = await signInWithEmailAndPassword(auth, email, password)
                this.userData = { email: user.email, uid: user.uid };
                router.push('/')
            } catch (error) {

            } finally {
                this.loadinUser = true
            }
        },
        async logoutUser() {
            try {
                await signOut(auth);
                this.userData = null;
                router.push('/login')
            } catch (error) {

            }
        },
        currentUser() {
            return new Promise((resolve, reject) => {
                const onsubcribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        this.userData = { email: user.email, uid: user.id };
                    } else {
                        this.userData = null
                    }
                    resolve(user)
                }, (e) => reject(e))
                onsubcribe();
            })
        }
    },
});