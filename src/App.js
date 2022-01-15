import React from 'react'

import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import { FaCoffee } from 'react-icons/fa'
import { useTheme } from './hooks/use-theme'

import './App.css'

export default function App() {
  const { theme, setTheme } = useTheme()

  const handleLightThemeClick = () => {
    setTheme('light')
  }
  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

  return (
    <div className="app__container w-100 h-100 d-flex flex-column">
      <div className="p-3 d-flex justify-content-end">
        <ButtonGroup aria-label="Theme toggle">
          <Button variant="secondary" onClick={handleLightThemeClick}>
            Light
          </Button>
          <Button variant="secondary" onClick={handleDarkThemeClick}>
            Dark
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <FaCoffee size={100} className="app__logo mb-5" />
        <div className="d-flex">
          <Form.Control
            className="app__input mr-3"
            type="email"
            placeholder="Enter email"
          />
          <Button className="app__button" type="button">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}
