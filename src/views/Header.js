import { useReactToPrint } from "react-to-print";
import Tooltip from './Tooltip';

const Header = () => {

  const printDoc = useReactToPrint({
    content: () => document.querySelector('#main')
  });

  return (
    <header>
      <h1>CV Builder</h1>
      <Tooltip />
      <button className="print" onClick={() => printDoc()}>
        Print / Save PDF
      </button>
    </header>
  )
}

export default Header;