import http from 'http'
import os from 'os'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const userInfo = os.userInfo()
  console.log('====================================================================')
  console.log(req)
  console.log('====================================================================')
  res.end(
    `<body>version: ${process.env.VERSION}<br />
    hostname: ${os.hostname()}<br />
    user: ${userInfo.username}<br />
    uid: ${userInfo.uid}<br />
    gid: ${userInfo.gid}<br />
    home: ${userInfo.homedir}<br />
    shell: ${userInfo.shell}<br />
    arch: ${os.arch()}<br />
    platform: ${os.platform()}<br />
    release: ${os.release()}<br />
    type: ${os.type()}<br />
    uptime: ${os.uptime()}<br />
    loadavg: ${os.loadavg()}<br />
    freemem: ${os.freemem()}<br />
    totalmem: ${os.totalmem()}<br />
    </body>`
  )
})

server.listen(80, () => {
  console.log('Server is running on port 80')
})
