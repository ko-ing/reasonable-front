import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Calendar from '../component/Calendar/Calendar';
import moment, { Moment as MomentTypes } from 'moment';
import CurrentDayDetails from '../component/Calendar/CurrentDayDetail';

const CalendarWrapper = styled.div`
    width: 100%;
`;

const CalendarFeed = () => {
    const [currentDate, setCurrentDate] = useState<MomentTypes>(moment());

    return (
        <CalendarWrapper>
            <Calendar 
                setCurrentDate={setCurrentDate}
                currentDate={currentDate}
            />
            <CurrentDayDetails
                currentDate={currentDate}
            />
        </CalendarWrapper>
    );
}

export default CalendarFeed;