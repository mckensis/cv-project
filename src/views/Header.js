import { useReactToPrint } from "react-to-print";
import Tooltip from './Tooltip';

const Header = ({ main }) => {

  const printDoc = useReactToPrint({
    content: () => main.current
  });

  return (
    <header>
      <h1>CV Builder</h1>
      <Tooltip />
      <button
        className="print"
        onClick={() => printDoc()}
      >
        Print / Save PDF
      </button>
    </header>
  )
}

export default Header;