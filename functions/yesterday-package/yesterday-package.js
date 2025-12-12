function was_package_received_yesterday(tz_from, tz_to, start, duration) {
    const tz_dif = tz_to - tz_from;
    const time_to = start + tz_dif + duration;
    if (time_to < 0) return true
        else return false;
}