const ignoreDSTTimezone = (dateTime, timeZone) => {
    const getDateTime = dateTime.replace('Z', '');
    const time = moment(getDateTime).format(Constants.TimeType.HH_mm_ss);
    const dateConvert = moment.utc('2019-01-02T' + time).tz(timeZone).format(Constants.DateType.YYYY_MM_DD);
    const timeConvert = moment.utc('2019-01-02T' + time).tz(timeZone).format(Constants.TimeType.HH_mm_ss);
    const compare = moment(dateConvert).diff(moment('2019-01-02'), 'days');
    const date = moment(dateTime).tz(timeZone).format(Constants.DateType.YYYY_MM_DD);
    const dateTimeDisplay = moment(date + 'T' + timeConvert).add(compare, 'day').format(Constants.DateType.YYYY_MM_DDTHHmmss);
    return dateTimeDisplay;
};
