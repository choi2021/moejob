import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';
import { AuthService, OAuthType } from '../types/Authtypes';

export class AuthServiceImpl implements AuthService {
  googleProvider: GoogleAuthProvider;
  githubProvider: GithubAuthProvider;
  auth: Auth;

  constructor(private app: FirebaseApp) {
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
    this.auth = getAuth(this.app);
  }
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  OAuthSignIn(platform: OAuthType): Promise<UserCredential> {
    const provider = this[`${platform}Provider`];
    return signInWithPopup(this.auth, provider);
  }

  signOut() {
    return signOut(this.auth);
  }
}
