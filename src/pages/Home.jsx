import "./Home.css";

import { Lightning } from "../components/indexComponents";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => 
  {
  useEffect(()=>
  {
    toast("Welcome to ANI-TASK-V2")
  },[])
  const navigate=useNavigate()  //hook no.1 used here
  const handleBtnClicked = () => {
    toast.success("Navigating to Task Manager...");
    setTimeout(()=>(navigate("/task-manager")),2000)
  };

  return (
    <div className="mainWrapper">
      <div className="backgroundLightning">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>

      <div className="badassTitle">
        WANT TO BE MOTIVATED AND BE A THUNDER?
      </div>

      <div className="scrollDownText">
        <p>⬇ Scroll Down ⬇</p>
      </div>

      <div className="funnySection animatedSection">
        <h2 className="sectionTitle">Alpha Productivity Checklist</h2>
        <ul className="funnyList">
          <li>• Wake up before sunrise and challenge it to a fist fight</li>
          <li>• Eat a dumbbell for breakfast and burp protein</li>
          <li>• Drink molten lava to build fireproof guts</li>
          <li>• If you're hungry, grill a steak on your abs and eat it in front of a vegan</li>
          <li>• Scream "discipline" at your mirror until your reflection quits</li>
          <li>• Answer emails with Morse code just to feel superior</li>
          <li>• Use your to-do list as toilet paper — you're above it</li>
          <li>• Drink 500 litres of water daily — flood your inner weakness</li>
          <li>• Sleep 2 seconds a year while planking</li>
          <li>• Dip your balls in acid — pain is just weakness leaving aggressively</li>
          <li>• Eat your keyboard when deadlines approach</li>
          <li>• Run so fast even your future can’t catch up</li>
        </ul>

        <div className="motivationalNote">
          "If reality checks you, bounce it back with interest."
        </div>
      </div>

      <div className="todoHint animatedSection">
        <p>
          Start by adding your tasks on my task manager. For example:
          <br />
          • Intimidate your deadlines into submitting early
          <br />
          • Finish that assignment you ghosted for a week
          <br />
          • Hydrate or your organs will unionize
        </p>
      </div>

<h2 className="videoTitle">⚡ Ultimate Thunder Motivation — WARNING: May cause excessive hype ⚡</h2>
<div className="videoWrapper">
  <iframe
    src="https://www.youtube.com/embed/DihKRTxjsnw?rel=0"
    title="Motivational Quotes Demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

<h2 className="consequencesTitle">
  ⚡ What’s Waiting For You If You Use This Task Manager (Or Don’t) ⚡
</h2>
<ul className="consequencesList">
  <li>✔️ Follow the rules: You’ll become a productivity god — even your alarm clock will bow down to you.</li>
  <li>❌ Ignore your tasks: The app will spam you with guilt trips so intense, even your pet will judge you.</li>
  <li>✔️ Hydrate like a champ: Your brain cells will throw a party, and creativity will overflow like a busted fire hydrant.</li>
  <li>❌ Skip hydration: Your organs will unionize, go on strike, and demand snacks AND breaks — simultaneously.</li>
  <li>✔️ Finish your tasks: Deadlines will cry for mercy, and your inbox will turn into a fan club.</li>
  
  <li>❌ Procrastinate hardcore: Deadlines will hire ninjas to sabotage your life. Spoiler alert: They’ll succeed.</li>
 <li>💪 Smash your keyboard with your determination — every keystroke powers up your productivity level! ✅</li>

  <li>❌ Lose this battle: Your “To-Do” list will grow sentience and start plotting revenge. You’ve been warned.</li>
</ul>

<button className="proceedBtn" onClick={handleBtnClicked}>
  PROCEED TO OUR TASK MANAGER
</button>

<ToastContainer position="top-center" autoClose={1500} theme="dark" />

    </div>

    
  );

};
