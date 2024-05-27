
import Title from '../component/Title';
import Sidebar from '../component/sidebar';
import SalesReport from '../component/SalesReport';
import SalesDatas from '../component/SalesData';

function Landing() {
  return (
    <div className="App">
     {/* <SalesReport /> */}
     <SalesDatas />
    </div>
  );
}

export default Landing;
