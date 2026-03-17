import { Link, Outlet } from "react-router-dom"

export default function Contanct() {

  return (
    <>
      <h3>Contanct Component</h3>
      <nav>
        <Link to='/contact/seoul'>서울 지점</Link> {' | '}
        <Link to='/contact/busan'>부산 지점</Link> 
      </nav>
      <hr />
      <Outlet></Outlet>
    </>
  )
}
