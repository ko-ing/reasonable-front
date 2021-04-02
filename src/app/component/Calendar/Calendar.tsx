import { useMemo, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import moment, { Moment } from 'moment';

const CalendarWrapper = styled.div`
    /* background-color: #f7fcff; */
    background-color: white;
    width: 100%;
`;

const MonthYearWrapper = styled.div`
/* width: 50px; */
position: relative;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
padding-top: 15px;
`;

const Year = styled.div`
    font-size: 12px;
`;

const Month = styled.div`
    font-size: 22px;
`;

const Day = styled.div<{
    selected: boolean
    color?: string
    fontSize?: string
}>`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${p => p.color || "#484848"};
    font-size: ${p => p.fontSize || "16px"};
    ${p => p.selected && css`
        background-color: #719eff;
        border-radius: 20px;
        color: #fefefe;
    `}
`;

const DayRow = styled.div`
    width: calc(100% -10px);
    display: flex;
    justify-content: space-around;
    padding: 7px 10px;
`;

const MonthRoute = styled.div<{
    isLeft: boolean
}>`
    position: absolute;
    ${p => p.isLeft ? "left" : "right"} : 100px;
    top: 21px;
    font-size: 22px;
`;

const Months = ['일 월', '이 월', '삼 월', '사 월', '오 월', '유 월', '칠 월', '팔 월', '구 월', '시 월', '십 일 월', '십 이 월'];
const Days = ['일', '월', '화', '수', '목', '금', '토'];


const Calendar = ({
    currentDate,
    setCurrentDate
}: {
    currentDate: Moment
    setCurrentDate: any
}) => {
    const [monthOnPage, setMonthOnPage] = useState<Moment>(moment());
    const generate = useMemo(() => {
        const startWeek = monthOnPage.clone().startOf('month').week();
        const endWeek = monthOnPage.clone().endOf('month').week() === 1 ? 53 : monthOnPage.clone().endOf('month').week();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <DayRow key={week}>
                    {Array(7).fill(0).map((n, i) => {
                        let current = monthOnPage.clone().week(week).startOf('week').add(n + i, 'day');
                        let isInThisMonth = current.isSame(monthOnPage, 'month');
                        return (
                            <Day 
                                selected={current.isSame(currentDate, 'date')}
                                color={!isInThisMonth ? "#bfbfbf" : (current.day() == 0) ? "red" : (current.day() == 6) ? "blue" : "#484848"}
                                fontSize="14px"
                                onClick={() => {
                                    console.log(current)
                                    setCurrentDate(current)
                                    if (!isInThisMonth) setMonthOnPage(current);
                                }}
                            >
                                {current.format('D')}
                            </Day>
                        )
                    })}
                </DayRow>
            )
        }
        return calendar;
    }, [monthOnPage, currentDate]);
    
    return (
        <CalendarWrapper>
            <MonthYearWrapper>
                <MonthRoute isLeft onClick={() =>{setMonthOnPage(monthOnPage.clone().subtract(1, 'months'))}}>&lt;</MonthRoute>
                <MonthRoute isLeft={false} onClick={() =>{setMonthOnPage(monthOnPage.clone().add(1, 'months'))}}>&gt;</MonthRoute>
                <Month>{Months[monthOnPage.month()]}</Month>
                <Year>{monthOnPage.year()}</Year>
            </MonthYearWrapper>
            <DayRow>
            {Days.map((d,i) => (
                <Day 
                    selected={false}
                    color={(i == 0) ? "red" : (i == 6) ? "blue" : "#484848"}
                >
                    {d}
                </Day>
            ))}
            </DayRow> 
            {generate}
        </CalendarWrapper>
    )
}

export default Calendar;