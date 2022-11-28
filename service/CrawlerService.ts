import cheerio from 'cheerio';
import puppeteer from 'puppeteer';
import { JobType } from '../types/Jobtype';
import Chromium from 'chrome-aws-lambda';
type TargetType = {
  [key: number]: 'mainWork' | 'qualification' | 'preferential';
};
const MAINWORK = '주요업무';
const QUALIFICATION = '자격요건';
const PREFERENTIAL = '우대사항';
const DOT_BASE = '• ';
const HYPHEN_BASE = '- ';

const DotRegex = /(?<=• )(.*?)(?=<br>)/gm;

const WANTED_URL = 'https://www.wanted.co.kr/wd';

export default class Crawler {
  constructor(private wantedURL: string = WANTED_URL) {}

  checkUrl(url: string) {
    return url.startsWith(this.wantedURL);
  }

  async createJob(url: string) {
    if (!this.checkUrl(url)) {
      throw new Error('url 에러');
    }
    const browser = await puppeteer.launch({
      args: [...Chromium.args],
      executablePath: await Chromium.executablePath,
    });
    const page = await browser.newPage();
    await page.goto(url);

    const content = await page.content();
    const $ = cheerio.load(content);
    const imgLists = $('img');
    const name = $('h6');
    const result: JobType = {
      name: $(name[0]).text(),
      platform: 'wanted',
      id: Date.now().toString(),
      mainWork: [],
      qualification: [],
      preferential: [],
      url,
      img: '',
    };

    imgLists.each((idx, node) => {
      if (idx === 1) {
        result.img = $(node).attr('src') || '';
      }
    });

    const titleList = $('.JobDescription_JobDescription__VWfcb > h6');
    if (titleList.length === 0) {
      throw new Error('Content 에러');
    }
    const contentList = $(
      '.JobDescription_JobDescription__VWfcb > h6+p > span'
    );

    const target: TargetType = {};

    titleList.each((idx, node) => {
      const text = $(node).text();
      switch (text) {
        case MAINWORK:
          target[idx] = 'mainWork';
          break;
        case QUALIFICATION:
          target[idx] = 'qualification';
          break;
        case PREFERENTIAL:
          target[idx] = 'preferential';
          break;
        default:
      }
    });

    contentList.each((idx, node) => {
      if (idx in target) {
        const html = $(node).html()!;
        const isDot = !!html.match(DotRegex);
        const base = isDot ? DOT_BASE : HYPHEN_BASE;
        const endPoint = html.search('<br><br>');
        const data = html
          .slice(0, endPoint)
          .split(base)
          .join('')
          .split('<br>')
          .filter((item) => !!item);
        result[target[idx]] = data;
      }
    });

    await browser.close();
    return result;
  }
}
