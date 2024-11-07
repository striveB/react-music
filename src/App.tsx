import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from './store'
function App() {
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.value,
      name: state.counter.name
    }),
    shallowEqual
  )
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载</Link>
      </div>
      <h1>
        当前计数：{count}
        {name}
      </h1>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
