import { expect, test } from 'vitest';
import { DateDiff } from '../src/datediff';

test("DateDiff yesterday", () => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const todayMinusYesterday = DateDiff.From(now, yesterday);
    
    expect(todayMinusYesterday.days).toBe(1);
    expect(todayMinusYesterday.hours).toBe(0);
    expect(todayMinusYesterday.minutes).toBe(0);
    expect(todayMinusYesterday.seconds).toBe(0);
});

test("DateDiff clamp to 0", () => {
    const now = new Date();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const todayMinusYesterday = DateDiff.From(yesterday, now);
    
    expect(todayMinusYesterday.days).toBe(0);
    expect(todayMinusYesterday.hours).toBe(0);
    expect(todayMinusYesterday.minutes).toBe(0);
    expect(todayMinusYesterday.seconds).toBe(0);
});

test("DateDiff same date", () => {
    const now = new Date();
    const nowAlso = new Date(now);
    const nowMinusNow = DateDiff.From(now, nowAlso);
    
    expect(nowMinusNow.days).toBe(0);
    expect(nowMinusNow.hours).toBe(0);
    expect(nowMinusNow.minutes).toBe(0);
    expect(nowMinusNow.seconds).toBe(0);
});

test("DateDiff across years", () => {
    const newYearsEve = new Date("2024/12/31");
    const newYear = new Date("2025/01/01");
    const nowMinusNow = DateDiff.From(newYear, newYearsEve);
    
    expect(nowMinusNow.days).toBe(1);
    expect(nowMinusNow.hours).toBe(0);
    expect(nowMinusNow.minutes).toBe(0);
    expect(nowMinusNow.seconds).toBe(0);
});

test("DateDiff one of each component", () => {
    const d1 = new Date();
    const d2 = new Date(d1.getTime() + DateDiff.ms_day + DateDiff.ms_hour + DateDiff.ms_minute + DateDiff.ms_second);
    const nowMinusNow = DateDiff.From(d2, d1);
    
    expect(nowMinusNow.days).toBe(1);
    expect(nowMinusNow.hours).toBe(1);
    expect(nowMinusNow.minutes).toBe(1);
    expect(nowMinusNow.seconds).toBe(1);
});