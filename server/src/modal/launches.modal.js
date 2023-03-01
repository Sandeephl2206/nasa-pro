const launches = new Map();
let latestflight = 100;
const launch = {
    flightNumber : 100,
    mission: 'Keplar Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('december 27, 2030'),
    target: 'Keplar-442-b',
    customer: ['ZTM','NASA'],
    upcoming: true,
    success : true
}
function existlaunchwithid(launchid){
    return launches.has(launchid);
}

function addnewlaunch(launch){
    latestflight++;
    launches.set(
        latestflight,
        Object.assign(launch,{
            flightNumber : latestflight,
            customer:["sandeep ","Lohar"],
            upcoming: true,
            success: true,
        })
    )
}
launches.set(launch.flightNumber,launch);
function abortmission(launchid){
    const aborted = launches.get(launchid);
    aborted.upcoming = false;
    aborted.success = false; 
    return aborted;
}
module.exports  = {
    launches,
    addnewlaunch,
    existlaunchwithid,
    abortmission,
};