# **To Do List**

- [x] Filter for unique data.
    - [x] Amend so that decrements in data points are recorded and not filtered out as not being unique. 
        > e.g. record 1, 2, 4, 1, 5, 8 instead of 1, 2, 4, 5, 8
- [x] Display data in a chart.
- [x] Re - fetch button.
- [ ] Basic styling.

## **Backend**
- [x] Set up Express server.
- [x] Save data to DB.
- [x] Setup a cron job.
- [x] Send current scrape logic to backend folder.
- [x] Create endpoint for data.
    - [x] Get scrape data.
    - [x] Respond with JSON.
- [x] Modify cron to run every 30 minutes instead of every minute.


## **Frontend**
- [x] Setup frontend folder with components and pages directories.
  - What dependencies might you need?
    - react     ()
    - react-dom (This package serves as the entry point to the DOM and server renderers for React.)
    - next      (A framework that allows you to write server-rendered React apps easily)
    - date-fns  (provides toolset for manipulating JavaScript dates in a browser & Node.js)
- [x] Setup basic Context API provider and consumer.