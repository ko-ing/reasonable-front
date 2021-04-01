import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from '../component/Calendar/Calendar';
import moment, { Moment as MomentTypes } from 'moment';

const CalendarWrapper = styled.div`
    width: 100%;
    height: 3000px;
`;

const CalendarFeed = () => {
    const [currentDate, setCurrentDate] = useState<MomentTypes>(moment());

    return (
        <CalendarWrapper>
            <Calendar 
                currentDate={currentDate}
            />
        </CalendarWrapper>
    );
}

export default CalendarFeed;