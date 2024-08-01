import './Skills.css'

const Skills = () => {
    const skills = ["Html", "Css", "BootStrap", "Tailwind Css", "Javascript", "Rest Api", "React-Js", "Vite-js", "Next-Js", "Mongo-Db", "Mongoose", "Git & GitHub"]
    return (
        <div className='skills space' id='Skills'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container">
                {
                    skills.map((element, index) => {
                        return (
                            <div key={index}>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                <h4>{element}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills