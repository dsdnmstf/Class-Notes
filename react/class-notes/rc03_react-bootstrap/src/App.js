import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Students from "./components/Students";
import data from "./Data";
import sdata from "./Studentdata";

function App() {
  console.log(data, sdata);
  return (
    <div>
      <MyNavbar />
      <CourseCard data={data} />
      <Students data={sdata}/>
      <Footer />
    </div>
  );
}

export default App;
