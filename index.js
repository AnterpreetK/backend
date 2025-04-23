require('dotenv').config() // stores sensitive info in .env file

const express = require('express') // common - uses require()
//import express from "express"  module - uses import

const app = express()
const port = 4000 // this is also in .env file


// https://api.github.com/users/AnterpreetK - data of my repo
const githubData = {
        "login": "AnterpreetK",
        "id": 156046690,
        "node_id": "U_kgDOCU0VYg",
        "avatar_url": "https://avatars.githubusercontent.com/u/156046690?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/AnterpreetK",
        "html_url": "https://github.com/AnterpreetK",
        "followers_url": "https://api.github.com/users/AnterpreetK/followers",
        "following_url": "https://api.github.com/users/AnterpreetK/following{/other_user}",
        "gists_url": "https://api.github.com/users/AnterpreetK/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/AnterpreetK/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/AnterpreetK/subscriptions",
        "organizations_url": "https://api.github.com/users/AnterpreetK/orgs",
        "repos_url": "https://api.github.com/users/AnterpreetK/repos",
        "events_url": "https://api.github.com/users/AnterpreetK/events{/privacy}",
        "received_events_url": "https://api.github.com/users/AnterpreetK/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-01-09T04:02:34Z",
        "updated_at": "2025-04-17T12:55:23Z"
}

app.get('/github', (req,res) => {
    res.json(githubData);
})

app.get('/', (req, res) => { // callback()
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => { // '/name' - '/' is very imp and genrelly a common mistake 
    res.send('anter@twitter')
})

app.get('/login',(req,res) => {
    res.send('<h1>Login here</h1>') // we can write anything
})

app.get('/youtube', (req,res) => { // may need to rerun the npm run start command after every new callback function
    res.send('<h2>Welcome to YT</h2>')
})


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`) // server is listening to the port
// })

//for dotenv
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
