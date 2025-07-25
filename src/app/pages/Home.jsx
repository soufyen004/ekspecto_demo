import HeaderBar from '../components/HeaderBar';
import LeftPanel from '../components/LeftPanel';
import CenterPanel from '../components/CenterPanel';
import RightPanel from '../components/RightPanel';
import BottomNav from '../components/BottomNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] text-gray-800">
      <HeaderBar />
      <main className="flex px-4 mt-4">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </main>
      <BottomNav />
    </div>
  );
}
