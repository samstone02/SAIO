import { Link, NavLink } from "react-router-dom"
import { BsTriangleFill } from "react-icons/bs";
import DevContactInfo from "../components/DevContactInfo"

export default function IndexPage() {
    return (
        <main>
            <div className="mx-48 mt-16">
                <h1>Make it stick with SAIO</h1>
                <h2>With calendar, to do lists, flashcards, and more you'll never forget anything. Become an expert learner and tackle any test or project with ease.</h2>
                <Link to="/app/home">
                    <div className="mt-12 flex place-content-center items-center">
                        {/* <div className="sixthBackground h-2 w-full m-0"></div> */}
                        {/* <BsTriangleFill className="w-56 rotate-90  m-0"/> */}
                        <h2 className="to-app theme-border-radius grid place-content-center h-12 w-1/3">Get started today!</h2>
                        {/* <BsTriangleFill className="w-56  rotate-270  m-0"/> */}
                        {/* <div className="sixthBackground h-2 w-full  m-0"></div> */}
                    </div>
                </Link>
            </div>
            <div className="secondaryBackground theme-border-radius theme-shadow mt-12 px-48 py-6">
                <div className="flex justify-between m-0 p-0">
                    <h1 className="m-0 p-0">team://localhost</h1>
                    <h1 className="m-0 p-0">About Us</h1>
                </div>
                <p className="mt-3">
                    SAIO was made by a team of 5 passionate devs for their capstone project at Eastern Michigan University. They hope this site impresses in it's imagination and technicality!
                </p>
                <div className="flex flex-wrap gap-x-12">
                    <DevContactInfo
                        name="Sam"
                        role="Team Leader"
                        contactEmail="samuelrystone@gmail.com"
                        profileLink="https://linkedin.com/in/SamuelRyanStone"
                        desc="Recently graduated from Eastern Michigan University magna cum laude majoring in Computer Science. Enjoys programming, especially for web, games, and graphics. Outside of coding, Sam enjoys rock climbing, longboarding, and video games."
                    />
                    <DevContactInfo
                        name="Sam"
                        role="Team Leader"
                        contactEmail="samuelrystone@gmail.com"
                        profileLink="https://linkedin.com/in/SamuelRyanStone"
                        desc="Recently graduated from Eastern Michigan University magna cum laude majoring in Computer Science. Enjoys programming, especially for web, games, and graphics. Outside of coding, Sam enjoys rock climbing, longboarding, and video games."
                    />
                    <DevContactInfo
                        name="Sam"
                        role="Team Leader"
                        contactEmail="samuelrystone@gmail.com"
                        profileLink="https://linkedin.com/in/SamuelRyanStone"
                        desc="Recently graduated from Eastern Michigan University magna cum laude majoring in Computer Science. Enjoys programming, especially for web, games, and graphics. Outside of coding, Sam enjoys rock climbing, longboarding, and video games."
                    />
                    <DevContactInfo
                        name="Sam"
                        role="Team Leader"
                        contactEmail="samuelrystone@gmail.com"
                        profileLink="https://linkedin.com/in/SamuelRyanStone"
                        desc="Recently graduated from Eastern Michigan University magna cum laude majoring in Computer Science. Enjoys programming, especially for web, games, and graphics. Outside of coding, Sam enjoys rock climbing, longboarding, and video games."
                    />
                    <DevContactInfo
                        name="Sam"
                        role="Team Leader"
                        contactEmail="samuelrystone@gmail.com"
                        profileLink="https://linkedin.com/in/SamuelRyanStone"
                        desc="Recently graduated from Eastern Michigan University magna cum laude majoring in Computer Science. Enjoys programming, especially for web, games, and graphics. Outside of coding, Sam enjoys rock climbing, longboarding, and video games."
                    />
                </div>
            </div>
        </main>
    )
}