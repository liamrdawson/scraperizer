import cron from 'node-cron';
import {runCount} from './scraper';


cron.schedule('* * * * *', () => {
    console.log('⏰ RUNNING THE CRON!');
    runCount();
  });