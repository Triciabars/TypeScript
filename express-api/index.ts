import express from 'express';
//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.status(401).json({
    ok:false,
    message:'todo mal'
  })
  res.json({
    ok:true,
    message:'todo bien'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//node index para ejecutarlo
//tsc index para ejercutarlo tsc init para iniciar config y node init para iniciar config
//tsc para compilar a js
//node dist/index.js para empezarlo
//tsc -w para que se vaya transpilando y otro proceso que este haciendo la pag a node con lo de node/dist/index