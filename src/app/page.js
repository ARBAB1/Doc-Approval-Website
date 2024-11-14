import Image from "next/image";
import { About, Banner, Brand, Contact, Courses, Feedback, Goals,Services, Stories } from "./sections";


/**
 * The main page of the application, which renders all the sections
 */
export default function Home() {
  return (
    <div>
  
      <Banner />
    
      <Services/>
      <About/>
      <Contact/>

  
    </div>

  );
}
