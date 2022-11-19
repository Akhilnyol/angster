import React, { useEffect } from 'react'
import "./Header.css"

function Header() {

  useEffect(() => {    
    window.userWalletAddress = null
        const loginButton = document.getElementById('loginButton')
        const userWallet = document.getElementById('userWallet')
    
        function toggleButton() {
          if (!window.ethereum) {
            loginButton.innerText = 'MetaMask is not installed'
            loginButton.classList.remove('bg-purple-500', 'text-white')
            loginButton.classList.add('bg-gray-500', 'text-gray-100', 'cursor-not-allowed')
            return false
          }
    
          loginButton.addEventListener('click', loginWithMetaMask)
        }
    
        async function loginWithMetaMask() {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((e) => {
              console.error(e.message)
              return
            })
          if (!accounts) { return }
    
          window.userWalletAddress = accounts[0]
          userWallet.innerText = window.userWalletAddress
          loginButton.innerText = 'Sign out of MetaMask'
    
          loginButton.removeEventListener('click', loginWithMetaMask)
          setTimeout(() => {
            loginButton.addEventListener('click', signOutOfMetaMask)
          }, 200)
        }
    
        function signOutOfMetaMask() {
          window.userWalletAddress = null
          userWallet.innerText = ''
          loginButton.innerText = 'Sign in with MetaMask'
    
          loginButton.removeEventListener('click', signOutOfMetaMask)
          setTimeout(() => {
            loginButton.addEventListener('click', loginWithMetaMask)
          }, 200)
        }
    
        window.addEventListener('DOMContentLoaded', () => {
          toggleButton()
        }); });

  return (
    <div>

<section className="header" id="title">
      <div className="container-fluid">
         {/* Navbar  */}

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-brand" href="#">
            <img src="./logo.jpg" alt="Angster" width="240" height="90" className="d-inline-block align-text-top" />
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <button className="nav-link" id='loginButton'>Sign in</button>
              </li>

              <li className="nav-item">
                <button className="nav-link">About Us</button>
              </li>
            </ul>
          </div>
        </nav>

         {/* Title  */}

        <div className="intro">
          <h1 className="big-heading">Revolutionizing fan engagements through <span>Quests</span></h1>

          <p>
            Angster is a protocol that aims to revolutionize fan engagemnt throug Quests, Tokens and Rewards powered by
            blockchain Technology. These are designed to enable tokenization and GameFi economies for the fans in
            decentralised platform
          </p>

          <button type="button" className="btn btn-dark btn-lg first">Get early access</button>
          <button type="button" className="btn btn-outline-dark btn-lg second">Join Discord</button>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Header