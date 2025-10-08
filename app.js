const express = require('express');

const app = express();

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');
const path = require('path');

// Serve static files from public folder
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use("/host",hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})

const PORT = 3001;
app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});

