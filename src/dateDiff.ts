export const date_parts = ["days", "hours", "minutes", "seconds"] as const;
export type date_part = typeof date_parts[number];

export class DateDiff {

    public static ms_second = 1000;
    public static ms_minute = DateDiff.ms_second * 60;
    public static ms_hour = DateDiff.ms_minute * 60;
    public static ms_day = DateDiff.ms_hour * 24;

    public days: number;
    public hours: number;
    public minutes: number;
    public seconds: number;

    /**
     * Create an object representing the difference between two dates.
     * @param delta in milliseconds. If negative, clamps to 0.
     */
    constructor(delta: number) {

        // no negative diff
        delta = Math.max(delta, 0);

        this.days = Math.floor(delta / DateDiff.ms_day);
        this.hours = Math.floor(delta % DateDiff.ms_day / DateDiff.ms_hour);
        this.minutes = Math.floor(delta % DateDiff.ms_hour / DateDiff.ms_minute);
        this.seconds = Math.floor(delta % DateDiff.ms_minute / DateDiff.ms_second);
    }

    /**
     * Creates a dateDiff between d2 (future) and d1 (past)
     */
    public static From = (d2: Date, d1: Date) => new DateDiff(d2.getTime() - d1.getTime());

    public getDisplayString = (n: number, l: number = 2): string => n.toString().padStart(l, "0");

    public toString = (k: date_part): string => this.getDisplayString(this[k]);
    public toStrings = () => ({
    days: this.toString("days"),
    hours: this.toString("hours"),
    minutes: this.toString("minutes"),
    seconds: this.toString("seconds"),
});

    public isZeroOrNegative = () => this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0;
}