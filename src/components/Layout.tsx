import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>
        {/* 나중에 Header 컴포넌트 들어올 자리 */}
      </header>
      <main>
        <Outlet />  {/* 각 페이지가 여기에 렌더링됨 */}
      </main>
    </div>
  )
}

export default Layout