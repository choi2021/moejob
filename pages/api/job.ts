import { NextApiRequest, NextApiResponse } from 'next';
import Crawler from '../../service/CrawlerService';

const crawler = new Crawler();
const POST = 'POST';

const JobAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === POST) {
    const url = req.body.url;
    try {
      const job = await crawler.createJob(url);
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ message: '잘못된 url입니다' });
    }
  } else {
    res.status(404).json({ message: '잘못된 접근입니다' });
  }
};

export default JobAPI;
