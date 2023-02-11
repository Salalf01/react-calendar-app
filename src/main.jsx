import React from 'react'
import ReactDOM from 'react-dom/client'
import CalendarApp from './CalendarApp'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css"


ReactDOM.createRoot(document.getElementById('root')).render(
    <CalendarApp />
)
