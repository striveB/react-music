import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
