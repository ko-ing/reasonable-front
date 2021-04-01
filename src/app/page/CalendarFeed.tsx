import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
const CalendarWrapper = styled.div`
    width: 100%;
    height: 3000px;
`;

const CalendarFeed = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    return (
        <CalendarWrapper>
            <Calendar 
                value={currentDate}
                locale="en-US"
                // onChange={setCurrentDate} 
            />
            
        </CalendarWrapper>
    );
}

export default CalendarFeed;