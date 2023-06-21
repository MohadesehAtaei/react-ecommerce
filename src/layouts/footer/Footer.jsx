import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-section d-flex justify-content-evenly py-5">
          <ul>
            <li>
              <h5 className="footer-title">Service</h5>
            </li>
            <li>
              <p>Answer FAQ</p>
            </li>
            <li>
              <p>Bugs Reports</p>
            </li>
            <li>
              <p>Security</p>
            </li>
          </ul>
          <ul>
            <li>
              <h5 className="footer-title">Comminucation</h5>
            </li>
            <li>
              <p className="telegram"><i className="bi bi-telegram"></i> telegram</p>
            </li>
            <li>
              <p><i className="bi bi-whatsapp"></i> Whatsapp</p>
            </li>
            <li>
              <p><i className="bi bi-youtube"></i> Youtube</p>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer