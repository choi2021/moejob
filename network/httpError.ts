const FIREBASE_AUTH_ERROR = {
  USER_NOT_FOUND: 'Firebase: Error (auth/user-not-found).',
  WRONG_PASSWORD: 'Firebase: Error (auth/wrong-password).',
  EMAIL_EXISTS: 'Firebase: Error (auth/email-already-in-use).',
};

export default class HTTPError extends Error {
  private errorMessage: string = '';
  constructor(private statusCode: number, public message: string) {
    super(message);
  }

  get signInMessage(): string {
    switch (this.message) {
      case FIREBASE_AUTH_ERROR.USER_NOT_FOUND:
        this.errorMessage = '이메일을 찾을 수 없습니다';
        break;
      case FIREBASE_AUTH_ERROR.WRONG_PASSWORD:
        this.errorMessage = '비밀번호를 확인해주세요';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.errorMessage;
  }

  get signUpMessage(): string {
    switch (this.message) {
      case FIREBASE_AUTH_ERROR.EMAIL_EXISTS:
        this.errorMessage = '이미 존재하는 이메일입니다';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.errorMessage;
  }
}
