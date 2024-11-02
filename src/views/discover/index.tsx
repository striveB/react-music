import { memo, Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
const Discover = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/album">歌单</Link>
        <Link to="/discover/djradio">电台</Link>
      </div>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}
export default memo(Discover)
