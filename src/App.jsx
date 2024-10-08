import Location from './components/Location.jsx';
import travelData from './data/locations.js';
import headerLogo from '/assets/header-logo.svg';

export default function App() {
  const data = travelData.map(item => {
    return <Location key={item.id} item={item}/>
  });
  return (
    <div className="page-container">
      <header className="primary-header">
        <img src={headerLogo} className="header-logo" width="24px" height="24px" alt="" />
        <h1 className="header-title">my travel journal.</h1>
      </header>
      <main>
        <div className="posts-container">{data}</div>
      </main>
    </div>
  )
}
