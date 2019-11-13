import cron from 'node-cron';
import {runCount} from './scraper';


cron.schedule('0,30 * * * *', () => {
    console.log('⏰ RUNNING THE CRON!');
    runCount();
  });