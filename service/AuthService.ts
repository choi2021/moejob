import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { AuthService, OAuthType } from '../types/Authtypes';
import { Dispatch, SetStateAction } from 'react';

export class AuthServiceImpl implements AuthService {
  googleProvider: GoogleAuthProvider;
  githubProvider: GithubAuthProvider;
  auth: Auth;

  constructor(private app: FirebaseApp) {
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.auth = getAuth(this.app);
  }
  logIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  OAuthSignIn(platform: OAuthType): Promise<UserCredential> {
    const provider = this[`${platform}Provider`];
    return signInWithPopup(this.auth, provider);
  }

  onUserStateChanged(callback: Dispatch<SetStateAction<User | null>>) {
    return onAuthStateChanged(this.auth, callback);
  }

  logOut() {
    return signOut(this.auth);
  }
}
