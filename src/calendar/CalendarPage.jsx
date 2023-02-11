import { Navbar } from "./components/Navbar"
import { Calendar } from 'react-big-calendar'
import { localizer, getMessagesES } from "../helpers"
import { CalendarEvent } from "./components/CalendarEvent"
import { useState } from "react"
import { CalendarModal } from "./components/CalendarModal"
import { useCalendarStore, useUiStore } from "../hooks"
import { FabAddNew } from "./components/FabAddNew"
import { FabDelete } from "./components/FabDelete"


export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "week");
    const { openDateModal } = useUiStore()
    const {events, setActiveEvent} = useCalendarStore();
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: "#347cf7",
            borderRadius: '0px',
            opacity: 0.8,
            color: "white"
        }
        return { style };
    }

    const onDoubleClick = (event) => {
        console.log("double click")
        openDateModal();
        setActiveEvent(event);
    }

    const onSelect = (event) => {
        console.log("onSelect")
        setActiveEvent(event);

    }
    const onViewChanged = (event) => {
        localStorage.setItem("lastView", event);
    }
    return (
        <>
            <Navbar />
            <div>
                <Calendar
                    culture="es"
                    localizer={localizer}
                    events={events}
                    defaultView={lastView}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 'calc(100vh - 80px)' }}
                    messages={getMessagesES()}
                    eventPropGetter={eventStyleGetter}
                    components={{
                        event: CalendarEvent
                    }}
                    onDoubleClickEvent={onDoubleClick}
                    onSelectEvent={event => onSelect(event)}
                    onView={onViewChanged}

                />
            </div>
            <CalendarModal />
            <FabAddNew/>
            <FabDelete />
        </>
    )
}