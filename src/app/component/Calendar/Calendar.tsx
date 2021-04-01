import styled from 'styled-components';

const CalendarWrapper = styled.div`

`;

const Month = styled.div`

`;

const Calendar = ({
    currentDate
}: {
    currentDate: Date
}) => {
    return (
        <CalendarWrapper>
            <Month>
                {currentDate.toLocaleString('default', { month: 'long' })}
            </Month>
        </CalendarWrapper>
    )
}

export default Calendar;