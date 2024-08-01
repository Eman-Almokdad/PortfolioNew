import './Certificates.css'
import { CertificatesCards } from '../product'
const Certificates = () => {
    return (
        <div className='Certificates space' id='Certificates'>
            <h5>What Certificates I Have</h5>
            <h2>My Certificates</h2>
            <div className="container">
                {CertificatesCards.map((element, index) => {
                    return (
                        <div className='cards' key={index}>
                            <p>{element.year}</p>
                            <h3>{element.edu}</h3>
                            <h3>{element.university}</h3>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Certificates
