import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {


    const { openDateModal } = useUiStore();
    const {setActiveEvent} = useCalendarStore();
    const handleClickNew = () => {
        setActiveEvent({
            title: "Holis",
            notes: " Hay que comprar el pastel",
            start: new Date(),
            end: addHours(new Date(), 3),
            user: {
                id: '1',
                name: "Salomon "
            }
        });
        openDateModal();
    }
    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}>
            <i className="fas fa-plus"></i>
        </button>
    )
}