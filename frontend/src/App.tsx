import Sidebar from "./components/Sidebar/Sidebar";
import MenuTree from "./components/MenuTree/MenuTree";
import MenuForm from "./components/MenuForm/MenuForm";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1">
        <MenuTree />
        <MenuForm />
      </div>
    </div>
  );
}
