import logo from './logo.svg';
import './App.css';
import imgUser from "./img/user.png";
import NavBar from './Component/Nav';
import ListCard from './Component/User/Create/ListCard';
import CreateCard from './Component/User/Create/CreateCard';
import MoreEbryos from './Component/Admin/MoreEmbryos';
function App() {
  return (
    <div className="App">
      <div className='bg-[#1890FF] flex flex-row h-[74px] justify-between items-center px-[22px] '>
          <p className='text-[32px] font-bold leading-[22px] items-center text-[#FFFFFF]'>Logo</p>
          <div className='flex flex-row items-center'>
            <img 
                className='w-[15px] h-[16px] mr-[8px]'
                src={imgUser}/>
            <button className='text-[15px] font-normal leading-[22px] text-[#FFFFFF]'>Đăng nhập</button>
          </div>
      </div>
      <div className='flex flex-row'>
        <NavBar />
        {/* <ListCard/> */}
        {/* <CreateCard /> */}
        <MoreEbryos/>
      </div>
    </div>
  );
}

export default App;
