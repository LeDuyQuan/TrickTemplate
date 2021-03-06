// Convert utc to local time
localTimeConversion: function(utcTime, timezone, format = `${moment.HTML5_FMT.DATE} ${moment.HTML5_FMT.TIME_SECONDS}`) {
    return moment.utc(utcTime).tz(timezone).format(format);
},

// Convert local to utc time
formatDatetimeUTC: function(localTime, timezone, format = `${moment.HTML5_FMT.DATE} ${moment.HTML5_FMT.TIME_SECONDS}`) {
    return moment.tz(moment(localTime).format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS), timezone).utc().format(format);
},
