export default class JobService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  async postJob(url) {
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
