const express = require('express');

const app = express();

const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');
const path = require('path');
const { pageNotfound } = require('./controllers/errors');

// Serve static files from public folder
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded({ extended: false }));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views','views');

app.use(userRouter);
app.use("/host",hostRouter);
app.use(pageNotfound);

const PORT = 3001;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});

