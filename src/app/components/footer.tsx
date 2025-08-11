"use client"

const Footer = ()=>{
    return(
        <div>
             <footer className="bg-blue-800 text-white py-8 text-center">
          <p className="mb-2">Contact us at <a href="mailto:support@oceanbite.com" className="underline">support@oceanbite.com</a></p>
          <p>&copy; {new Date().getFullYear()} OceanBite. All rights reserved.</p>
        </footer>
        </div>
    )
}
export default Footer