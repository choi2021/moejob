export default class JobService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.wantedURL = 'https://www.wanted.co.kr/wd';
  }

  checkURL(url) {
    return url.startsWith(this.wantedURL);
  }
  async postJob(url) {
    if (!this.checkURL(url)) {
      throw new Error('잘못된 url입니다. 다시 알려주세요😅');
    }
    const res = await fetch(`${this.baseURL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
      }),
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }
    if (res.status > 299 || res.status < 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
