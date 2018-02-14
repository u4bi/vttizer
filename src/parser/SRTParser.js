export var SRTParser = (subtitle) => {
    let data = [];

    subtitle.replace(/\r+/g, '') // new line
            .replace(/^\s+|\s+$/g, '') // trim
            .split('\n\n')
            .forEach(e => {
                let cue = e.split(/\n/),
                    m = cue[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);

                data.push({
                    id : cue[0],
                    start : (parseInt(m[1], 10) * 60 * 60) + (parseInt(m[2], 10) * 60) + (parseInt(m[3], 10)) + (parseInt(m[4], 10) / 1000),
                    end   : (parseInt(m[5], 10) * 60 * 60) + (parseInt(m[6], 10) * 60) + (parseInt(m[7], 10)) + (parseInt(m[8], 10) / 1000),
                    text  : cue[2]
                });
            });

    return data;
};